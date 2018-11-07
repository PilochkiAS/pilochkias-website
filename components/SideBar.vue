<template>
  <v-layout column fill-height class="pb-4">
    <v-list>
      <v-list-tile router
                   to="/"
                   active-class="secondary primary--text"
      >
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Домашняя страница</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-group
              prepend-icon="apps"
      >
        <v-list-tile
                slot="activator"
                router
                to="/products"
                active-class="secondary primary--text"
                exact>
          <v-list-tile-title>Товары</v-list-tile-title>
        </v-list-tile>

        <v-list-tile
                v-for="product in products"
                :key="product.title"
                router
                :to="product.to"
                active-class="secondary primary--text"
                exact>
          <v-list-tile-title class="pl-5">{{ product.title }}</v-list-tile-title>
        </v-list-tile>

      </v-list-group>

      <v-list-tile router to="/delivery"
                   active-class="secondary primary--text"
                   exact
      >
        <v-list-tile-action>
          <v-icon>location_on</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Доставка и оплата</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile router to="/contacts"
                   active-class="secondary primary--text"
                   exact
      >
        <v-list-tile-action>
          <v-icon>bubble_chart</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Контакты</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-spacer></v-spacer>

    <div class="text-xs-center time">
      <v-icon small class="mr-1">access_time</v-icon>
      <p class="text-xs-center ma-0">ПН-ВС: 10:00 - 19:00</p>
    </div>
    <div class="text-xs-center">
      <v-bottom-sheet v-model="sheet" full-width>
        <v-btn
                slot="activator"
                color="accent"
                dark
        >
          Позвонить
        </v-btn>

        <v-list>
          <v-subheader>
            Позвонить
          </v-subheader>
          <template v-for="(item, index) in phones">
            <v-list-tile
                    :key="item.title"
            >
              <v-list-tile-content>
                <v-list-tile-title v-html="item.link"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-bottom-sheet>
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
          { title: '+380960000000', link: `<a href="tel:380960000000">+380960000000</a>` },
          { title: '+380960000000 (опт)', link: `<a href="tel:380960000000">+380960000000 (опт)</a>` }
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
