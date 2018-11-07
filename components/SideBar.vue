<template>
  <v-layout column h-100 class="pb-5">
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

    <p class="text-xs-center"><v-icon small class="mr-1">access_time</v-icon>ПН-ВС: 10:00 - 19:00</p>

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
          <v-subheader>Позвонить</v-subheader>
          <v-list-tile
                  v-for="phone in phones"
                  :key="phone.title"
                  @click="sheet = false"
          >
            <v-list-tile-avatar>
              <v-icon> phone </v-icon>
            </v-list-tile-avatar>
            <v-list-tile-title>
              <a :href="phone.tel">{{ phone.title }}</a>
            </v-list-tile-title>
          </v-list-tile>
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
          { title: '+380960000000', tel: 'tel:380960000000' },
          { title: '+380960000000 (опт)', tel: 'tel:380960000000' }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .h-100{
    height: 100%;
  }
</style>
