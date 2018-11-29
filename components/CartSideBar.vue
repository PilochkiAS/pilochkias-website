<template>
  <v-layout column fill-height class="">
    <div class="cart-header">
      <v-layout class="pl-4 py-2">
        <h2>Корзина</h2>
        <v-spacer></v-spacer>
        <v-btn
                icon
                @click.stop="closeSideBar"
        >
          <v-icon>close</v-icon>
        </v-btn>
      </v-layout>
      <v-divider></v-divider>
    </div>

    <v-container grid-list-md fluid class="cart-content px-0 pt-0">
      <v-layout column v-if="$store.state.cart.products.length > 0">
        <v-flex
                v-for="item in $store.getters.getSortedProducts"
                :key="item.title"
                xs4
        >
          <v-card flat tile class="py-0 px-0">
            <v-card-title primary-title class="py-1 px-3">
              <h4 class="mb-0">{{ item.title}}</h4>
              <v-spacer></v-spacer>
              <v-btn icon
                     small
                     flat
                     color="red"
                     class="my-0 mr-0"
                     @click="$store.commit('removeFromCart', item)"
              >
                <v-icon>close</v-icon>
              </v-btn>
            </v-card-title>

            <v-layout class="ma-0 pb-2 px-3">
              <v-img
                      :src="getImageUrl(item.mainImage)"
                      height="50px"
                      width="50px"
              ></v-img>

              <v-flex xs8 class="py-0">
                <v-layout class="ma-0 px-1">
                  <p class="ma-0">Сумма:</p>
                  <p class="primary--text ml-1 mb-0">{{ item.totalPrice }} грн</p>
                </v-layout>
                <v-layout class="ma-0 px-1">
                  <p class="ma-0">Количество:</p>
                  <p class="primary--text ml-1 mb-0">{{ item.number }} шт</p>
                  <!--<p class="primary&#45;&#45;text ml-1 mb-0">1 шт</p>-->
                </v-layout>
              </v-flex>
            </v-layout>
            <v-divider></v-divider>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout column
                v-else
                class="ma-0 pt-5"
                align-center
      >
        <h3>Корзина пуста</h3>
        <v-img src="/cart_empty.png" height="120" width="120"></v-img>
      </v-layout>
    </v-container>

    <div class="cart-footer pt-1">
      <v-divider></v-divider>
      <v-layout class="ma-0 px-4 pt-2">
        <p class="ma-0">Объектов в корзине:</p>
        <p class="primary--text ml-1 mb-0">{{ totalProductsNumber }} шт</p>
      </v-layout>
      <v-layout class="ma-0 px-4">
        <p class="ma-0">Общая сумма:</p>
        <p class="primary--text ml-1 mb-0">{{ totalPrice }} грн</p>
      </v-layout>

      <v-layout class="go-to-order-btn py-2">
        <v-btn
                slot="activator"
                color="accent"
                dark
        >
          Перейти к заказу
        </v-btn>
      </v-layout>
    </div>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    props: ['value'],
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
      closeSideBar () {
        this.$emit('input', !this.value)
      },
      getImageUrl (id) {
        if (id) return '/api/image/' + id
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .time {
    display: flex;
    justify-content: center;
  }
  .cart-header {
    .layout {
      display: flex;
      align-items: center;
      height: 50px;
    }
  }
  .cart-content {
    height: 100%;
    overflow-y: scroll;
  }
  .cart-footer {
    /*position: relative;*/
    /*bottom: 0;*/

    .go-to-order-btn {
      display: flex;
      justify-content: center;
    }
  }
  .d-flex > * {
    /*flex: 0 1 auto !important;*/
  }
</style>
