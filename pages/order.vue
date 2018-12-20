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
        <v-card raised class="white mb-3 py-3 px-4">
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
                    v-model="address"
                    :rules="addressRules"
                    label="Адрес"
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
                <v-expansion-panel v-model="isPanelOpen" popout class="mt-0">
                  <v-checkbox v-model="panel" label="Заказать гравировку" value="true"></v-checkbox>
                  <v-expansion-panel-content class="mt-0 expand-content">
                    <v-card flat>
                      <v-layout column class="grey lighten-3 py-3 px-4">
                        <v-flex xs12>
                          <v-textarea
                              v-model="engraving"
                              label="Сообщение"
                              :rules="engravingRules"
                              :counter="true"
                              required
                          ></v-textarea>
                        </v-flex>
                      </v-layout>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-form>
            </v-flex>
          </v-layout>
        </v-card>
      </v-layout>
    </v-container>

    <v-container class="py-5">
      <v-card v-if="$store.getters.getSortedProducts.length > 0">
        <v-layout row justify-end align-center fill-height class="py-4 px-5 hidden-sm-and-down">
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
        <v-layout column justify-end align-center fill-height class="py-4 px-5 hidden-md-and-up">
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

      <v-card v-else>
        <v-layout column fill-height justify-center align-center class="py-4 px-5">
          <p class="primary--text subheading ma-0">Вы не можете сделать заказ, так как корзина пуста. </p>
          <v-btn nuxt to="/products" color="accent">Перейти к покупкам</v-btn>
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
      panel: false,
      isPanelOpen: null,
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Имя обязательно',
        v => v.length >= 6 || 'Имя должно быть больше 6 символов'
      ],
      address: '',
      addressRules: [
        v => !!v || 'Адрес доставки обязателен'
      ],
      engraving: '',
      engravingRules: [
        v => !!v || 'Пожалуйста, расскажите, какую гравировку вы хотите?'
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
    watch: {
      panel (to, from) {
        console.log('==> panel:', to)
        if (!to) {
          this.isPanelOpen = null
        } else if (to === 'true') {
          this.isPanelOpen = 0
        }
      }
    },
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
            address: this.address
          },
          engraving: this.engraving,
          isDone: false
        }

        const confirmOrder = confirm('Подтвердите заказ')

        if (confirmOrder) {
          this.createOrder(order).then(res => {
            this.callSnackbar('Заказ успешно оформлен.', 'success')
          })
        }
      },
      async createOrder (order) {
        await this.$axios.post('/api/orders', order)
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
  .container {
    flex: 1 1 auto;
  }

  .expand-content {
    border-top: 0 !important;
  }


  @media screen and (max-width: 960px) {
  }
</style>

<style lang="stylus">
  .v-parallax__content {
    padding: 0;
  }
  @media screen and (max-width: 960px) {
  }
</style>
