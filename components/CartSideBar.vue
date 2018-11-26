<template>
  <v-layout column fill-height class="pb-4">
    <div class="px-4 py-2">
      <h2>Корзина</h2>
    </div>
    <v-divider></v-divider>

    <v-container grid-list-md fluid class="px-0">
      <v-layout column>
        <v-flex
                v-for="item in $store.state.cart.products"
                :key="item.title"
                xs4
        >
          <v-card flat tile class="px-3">
            <v-img
                    :src="item.imgSrc"
                    height="90px"
            ></v-img>

            <v-card-title primary-title class="pa-1">
              <div>
                <h4 class="mb-0">{{ item.title}}</h4>
                <!--<div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>-->
              </div>
            </v-card-title>

            <v-card-actions class="pt-0">
              <p class="primary--text">{{ item.price }} грн</p>
              <v-spacer></v-spacer>
              <v-btn icon flat color="red"><v-icon>delete</v-icon></v-btn>
            </v-card-actions>
          </v-card>
          <v-divider></v-divider>

        </v-flex>
      </v-layout>
    </v-container>

    <v-spacer></v-spacer>

    <div class="text-xs-center">
      <v-btn
              slot="activator"
              color="accent"
              dark
      >
        Перейти к заказу
      </v-btn>
    </div>

  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        sheet: false,
        products: [
          { title: 'Вся продукция', to: '/products#all' },
          { title: 'Пилки и файлы', to: '/products#saw-files' },
          { title: 'Диски SMart', to: '/products#smart-disks' },
          { title: 'Оборудование', to: '/products#equipment' }
        ],
        phones: [
          { title: '+380970710071', link: `<a href="tel:380970710071">+380970710071</a>` },
          { title: '+380963447307 (опт)', link: `<a href="tel:380963447307">+380963447307</a>` }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .time {
    display: flex;
    justify-content: center;
  }
  .d-flex > * {
    /*flex: 0 1 auto !important;*/
  }
</style>
