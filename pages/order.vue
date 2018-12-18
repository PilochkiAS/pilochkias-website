<template>
  <v-layout column class="grey--bg" fill-height>
    <v-parallax class=""
                src="https://images.pexels.com/photos/567540/pexels-photo-567540.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
      <v-layout class="parallax-content" fill-height justify-center align-center>
        <h1 class="display-2">Оформлеение заказа</h1>
      </v-layout>
    </v-parallax>

    <v-container class="pt-5">
      <v-layout column fill-height class="pt-5">
        <v-card raised class="white mb-3 py-3 px-4 hidden-sm-and-down">
          <v-layout fill-height>
            <v-flex xs12>
              <v-form v-model="valid">
                <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    :counter="true"
                    label="Полное имя"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="Электронная почта"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="phoneNumber"
                    :rules="phoneNumberRules"
                    prefix="8"
                    mask="phone"
                    label="Номер телефона"
                    required
                ></v-text-field>
              </v-form>
            </v-flex>
          </v-layout>
        </v-card>
      </v-layout>
    </v-container>

    <v-container class="py-5">
      <v-card>
        <v-layout row justify-end align-center fill-height class="py-4 px-5 hidden-sm-and-down" v-if="$store.getters.getSortedProducts.length > 0">
          <p class="primary--text subheading ma-0 mr-4"><b class="font-weight-regular accent--text">Товаров в корзине:</b> {{ totalProductsNumber }} шт.</p>
          <p class="primary--text subheading ma-0 mr-4"><b class="font-weight-regular accent--text">Общая стоимость:</b> {{ totalPrice }} грн</p>

          <v-btn
              slot="activator"
              color="accent"
              dark
              @click="makeOrder"
          >
            Подтвердить заказ
          </v-btn>
        </v-layout>
        <v-layout column justify-end align-center fill-height class="py-4 px-5 hidden-md-and-up" v-if="$store.getters.getSortedProducts.length > 0">
          <p class="primary--text subheading ma-0 mr-4"><b class="font-weight-regular accent--text">Товаров в корзине:</b> {{ totalProductsNumber }} шт.</p>
          <p class="primary--text subheading ma-0 mr-4"><b class="font-weight-regular accent--text">Общая стоимость:</b> {{ totalPrice }} грн</p>

          <v-btn
              slot="activator"
              color="accent"
              dark
              @click="makeOrder"
              class="mt-3"
          >
            Подтвердить заказ
          </v-btn>
        </v-layout>
      </v-card>
    </v-container>

    <section8 />

    <v-snackbar
        v-model="snackbar"
        :color="snackbarColor"
        :timeout="2000"
        top
        right
    >
      {{ snackbarMessage }}
      <v-btn
          dark
          flat
          @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-layout>
</template>
<script>
  import section8 from '~/components/sections/section8.vue'

  export default {
    data: () => ({
      snackbarMessage: '',
      snackbarColor: '',
      snackbar: false,
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Имя обязательно',
        v => v.length >= 6 || 'Имя должно быть больше 6 символов'
      ],
      email: '',
      emailRules: [
        v => !!v || 'Электронная почта обязательна',
        v => /.+@.+/.test(v) || 'Электронная почта должна быть валидной'
      ],
      phoneNumber: '',
      phoneNumberRules: [
        v => !!v || 'Номер телефона обязателен',
        v => v.length === 10 || 'Номер телефона должен быть валидным',
        v => v[0] === '0' || 'Номер телефона должен быть валидным'
      ]
    }),
    computed: {
      totalProductsNumber () {
        return this.$store.state.cart.products.length
      },
      totalPrice () {
        let price = 0
        this.$store.getters.getSortedProducts.forEach(product => {
          price += product.totalPrice
        })
        return price
      }
    },
    methods: {
      getImageUrl (id) {
        if (process.env.NODE_ENV === 'development') {
          return id ? 'http://localhost/api/image/' + id : ''
        } else if (process.env.NODE_ENV === 'production' && process.env.herokuBaseURL === 'true') {
          console.log('==> process.env.herokuBaseURL:', process.env.herokuBaseURL)
          return id ? 'https://pilochki-cms.herokuapp.com/api/image/' + id : ''
        } else if (process.env.NODE_ENV === 'production') {
          return id ? 'https://pilochki-cms.herokuapp.com/api/image/' + id : ''
        }
      },
      onProductNumberChange (e, product) {
        if (e === 0) {
          this.$store.commit('removeFromCart', product)
        }
        this.$store.commit('changeProductNumber', { number: e, product })
      },
      makeOrder () {
        const products = this.$store.getters.getSortedProducts.map(item => {
          return {
            product: item._id,
            totalPrice: item.totalPrice,
            number: item.number
          }
        })

        const order = {
          products,
          customer: {
            fullName: this.name,
            phone: this.phoneNumber,
            email: this.email,
            address: 'Test address'
          },
          isDone: false
        }

        const confirmOrder = confirm('Подтвердите заказ')

        if (confirmOrder) {
          this.createOrder(order).then(res => {
            this.callSnackbar('Заказ успешно оформлен.', 'success')
          })
        }
      },
      async createOrder (orders) {
        await this.$axios.post('/api/orders', orders)
      },
      callSnackbar (message, color) {
        this.snackbarMessage = message
        this.snackbarColor = color
        this.snackbar = true
      }
    },
    mounted () {
    },
    components: {
      section8
    }
  }
</script>

<style lang="stylus" scoped>
  .v-parallax {
    max-height: 40vh;

    .parallax-content {
      background-color: rgba(127, 130, 139, 0.29);
    }
  }
  .product {
    height: 120px;

    .product--center {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .products-header {
    height: 60px;

    .product--center {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .container {
    flex: 1 1 auto;
  }

  @media screen and (max-width: 960px) {
    .product {
      height: auto;
    }
  }
</style>

<style lang="stylus">
  .v-parallax__content {
    padding: 0;
  }
  @media screen and (max-width: 960px) {
  }
</style>
