<template>
  <div>
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
  </div>
</template>

<script>
  export default {
    data () {
      return {
        products: [
          { title: 'Вся продукция', to: '/products#all' },
          { title: 'Пилки и файлы', to: '/products#saw-files' },
          { title: 'Диски SMart', to: '/products#smart-disks' },
          { title: 'Оборудование', to: '/products#equipment' }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
