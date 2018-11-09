<template>
  <v-layout>
    <v-flex>
      <v-container grid-list-lg fluid class="px-0">
        <v-layout :column="!isModuleList" wrap>
          <v-flex xs4 v-for="n in 18" :key="n">
            <v-card flat tile hover>
              <!--<v-card-title>-->
                <!--<div>-->
                  <!--<div class="headline">Top western road trips</div>-->
                <!--</div>-->
              <!--</v-card-title>-->

              <v-layout :column="isModuleList">
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
                <v-btn icon class="action-btn">
                  <v-icon>favorite</v-icon>
                </v-btn>
                <v-btn icon class="action-btn">
                  <v-icon>share</v-icon>
                </v-btn>
                <v-btn icon class="action-btn">
                  <v-icon>add_shopping_cart</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
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
    props: ['isModuleList']
  }
</script>

<style lang="stylus" scoped>
  .v-btn.action-btn:hover .v-btn__content .v-icon {
    color: #536DFE;
  }
</style>
