<template>
  <v-layout column class="grey--bg" fill-height>
    <v-parallax class=""
                src="https://images.pexels.com/photos/567540/pexels-photo-567540.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
      <v-layout class="parallax-content" fill-height justify-center align-center>
        <h1 class="display-2">Корзина</h1>
      </v-layout>
    </v-parallax>

    <v-container class="pt-5">
      <v-layout column fill-height class="pt-5" v-if="$store.getters.getSortedProducts.length > 0">
        <v-card raised class="white products-header mb-3 hidden-sm-and-down">
          <v-layout fill-height>
            <v-flex xs1 align-self-center class="product--center">
            </v-flex>
            <v-flex xs2 align-self-center class="">
            </v-flex>
            <v-flex xs5 align-self-center class="">
              <p class="primary--text subheading ma-0">Товар</p>
            </v-flex>
            <v-flex xs1 align-self-center class="">
              <p class="primary--text subheading ma-0">Цена</p>
            </v-flex>
            <v-flex xs2 align-self-center class="product--center">
              <p class="primary--text subheading ma-0">Количество</p>
            </v-flex>
            <v-flex xs2 align-self-center class="">
              <p class="primary--text subheading ma-0">Общая сумма</p>
            </v-flex>
          </v-layout>
        </v-card>

        <v-card class="white product mb-3 hidden-sm-and-down" v-for="product in $store.getters.getSortedProducts" :key="product.id">
          <v-layout fill-height>
            <v-flex xs1 align-self-center class="product--center">
              <v-btn icon @click="$store.commit('removeFromCart', product)">
                <v-icon>close</v-icon>
              </v-btn>
            </v-flex>
            <v-flex xs2 align-self-center class="">
              <v-img
                  :src="getImageUrl(product.mainImage)"
                  :height="100"
              ></v-img>
            </v-flex>
            <v-flex xs5 align-self-center class="px-3">
              <p class="primary--text subheading ma-0">{{ product.title }}</p>
            </v-flex>
            <v-flex xs1 align-self-center class="">
              <p class="accent--text subheading ma-0">{{ product.discount ? product.discount : product.price }} грн</p>
            </v-flex>
            <v-flex xs2 align-self-center class="product--center">
              <v-btn flat small icon @click="$store.commit('changeProductNumber', { number: product.number - 1, product })"><v-icon>remove</v-icon></v-btn>
              <v-text-field
                  hide-details
                  :value="product.number"
                  solo
                  @change="e => onProductNumberChange(e, product)"
              ></v-text-field>
              <v-btn flat small icon @click="$store.commit('addToCart', product)"><v-icon>add</v-icon></v-btn>
            </v-flex>
            <v-flex xs2 align-self-center class="">
              <p class="accent--text subheading ma-0">{{ product.totalPrice }} грн</p>
            </v-flex>
          </v-layout>
        </v-card>

        <v-card class="white product mb-3 hidden-md-and-up" v-for="product in $store.getters.getSortedProducts" :key="product.id">

          <v-layout column>
              <v-card-title primary-title class="pa-0">
                <v-layout>
                  <v-flex xs4>
                    <v-img :src="getImageUrl(product.mainImage)" height="150px"></v-img>
                  </v-flex>
                  <v-flex xs8>
                    <div class="subheading mt-2 mb-3 mx-2">{{ product.title }}</div>
                    <v-flex class="product--center mt-auto">
                      <v-btn flat small icon @click="$store.commit('changeProductNumber', { number: product.number - 1, product })"><v-icon>remove</v-icon></v-btn>
                      <v-text-field
                          hide-details
                          :value="product.number"
                          solo
                          small
                          @change="e => onProductNumberChange(e, product)"
                      ></v-text-field>
                      <v-btn flat small icon @click="$store.commit('addToCart', product)"><v-icon>add</v-icon></v-btn>
                    </v-flex>
                  </v-flex>
                </v-layout>
              </v-card-title>
              <v-card-actions>
                <v-layout align-center justify-end class="pr-3">
                  <v-btn icon flat color="accent" @click="$store.commit('removeFromCart', product)">
                    <v-icon>delete</v-icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                  <p class="subheading my-0 mx-1">Цена: <span class="accent--text">{{ product.discount ? product.discount : product.price }} грн</span></p>
                  <p class="subheading my-0 mx-1">Всего: <span class="accent--text">{{ product.totalPrice }} грн</span></p>
                </v-layout>
              </v-card-actions>
          </v-layout>
        </v-card>
      </v-layout>

      <v-layout column fill-height class="pt-5" v-else>
        <v-card class="white py-4 mb-3">
          <v-layout column fill-height justify-center align-center>
            <p class="primary--text subheading ma-0">Корзина пуста</p>
            <v-img src="/cart_empty.png" height="120" width="120" class="mt-2 mb-3"></v-img>
            <v-btn nuxt to="/products" color="accent">Перейти к покупкам</v-btn>
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
              nuxt
              to="/order"
          >
            Перейти к заказу
          </v-btn>
        </v-layout>
        <v-layout column justify-end align-center fill-height class="py-4 px-5 hidden-md-and-up" v-if="$store.getters.getSortedProducts.length > 0">
          <p class="primary--text subheading ma-0 mr-4"><b class="font-weight-regular accent--text">Товаров в корзине:</b> {{ totalProductsNumber }} шт.</p>
          <p class="primary--text subheading ma-0 mr-4"><b class="font-weight-regular accent--text">Общая стоимость:</b> {{ totalPrice }} грн</p>

          <v-btn
              slot="activator"
              color="accent"
              dark
              nuxt
              to="/order"
              class="mt-3"
          >
            Перейти к заказу
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
      snackbar: false
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
