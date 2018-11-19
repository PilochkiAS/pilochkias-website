<template>
  <v-card flat tile hover>
    <v-layout :column="isModuleList" class="custom-cards">
      <v-flex xs5 class="py-0">
        <!--<v-img-->
        <!--:src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"-->
        <!--height="150px"-->
        <!--&gt;</v-img>-->
        <v-img
                src="https://smart-pilka.ru/image/cache/catalog/img_6425-1000x1000.jpg"
                height="150px"
        ></v-img>
      </v-flex>

      <v-flex xs7>
        <v-card-title primary-title class="py-0">
          <div>
            <div class="title">SMart лампа 56 Ватт светодиодная</div>
            <span class="grey--text">1,000 miles of wonder</span>
          </div>
        </v-card-title>
      </v-flex>
    </v-layout>

    <v-divider light inner></v-divider>

    <v-card-actions>
      <div class="accent--text font-weight-bold">8 800.00 грн</div>
      <v-spacer></v-spacer>
      <v-btn icon :class="isModuleList ? 'action-btn hidden-sm-and-down':'action-btn'">
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-btn icon :class="isModuleList ? 'action-btn hidden-sm-and-down':'action-btn'">
        <v-icon>share</v-icon>
      </v-btn>
      <v-btn icon class="action-btn">
        <v-icon>add_shopping_cart</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        products: [
          { title: 'Вся продукция', to: '/products#all' }
        ]
      }
    },
    created () {

    },
    props: ['isModuleList', 'items']
  }
</script>

<style lang="stylus" scoped>
  .v-btn.action-btn:hover .v-btn__content .v-icon {
    color: #26C6DA;
  }

  @media screen and (max-width: 960px) {
  }
</style>
<style lang="stylus">


  @media screen and (max-width: 960px) {
  }
</style>
