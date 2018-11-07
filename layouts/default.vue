<template>
  <v-app>
    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      :clipped="true"
      v-model="drawer"
      fixed
      app
      class="mt-custom"
    >
      <SideBar/>
    </v-navigation-drawer>
    <v-toolbar
            fixed
            app
            :clipped-left="true"
            dark
            dense
            class="pink darken-4 header"
    >
      <v-icon small>access_time</v-icon>
      <p class="mb-0 ml-1">ПН-ВС: 10:00 - 19:00</p>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <p class="mb-0 ml-1" slot="activator">
          +380960000000
          <v-icon small>arrow_drop_down</v-icon>
        </p>

        <v-list>
          <v-list-tile
                  v-for="item in phones"
                  :key="item"
                  @click=""
          >
            <v-list-tile-title>{{ item }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-toolbar fixed app :clipped-left="true" dark color="primary" class="mt-5">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <img src="/logo.png" height="30px" class="ml-1"/>
      <v-spacer></v-spacer>
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>shopping_cart</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content class="mt-5">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      class="mt-custom"
    >
      <v-list>
        <v-list-tile>
          <v-list-tile-title>Корзина</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  import SideBar from '~/components/SideBar'

  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'home', title: 'Домашняя страница', to: '/' },
          { icon: 'apps', title: 'Продукция', to: '/products' },
          { icon: 'bubble_chart', title: 'Контакты', to: '/contacts' }
        ],
        phones: [
          '+380960000000',
          '+380960000000 (опт)'
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Pilochki'
      }
    },
    created () {
      this.$vuetify.theme.primary = '#C2185B'
      this.$vuetify.theme.secondary = '#FCE4EC'
      this.$vuetify.theme.accent = '#536DFE'
    },
    components: {
      SideBar
    }
  }
</script>

<style lang="stylus" scoped>
  .mt-custom{
    margin-top: 112px !important;
  }
  .header{
    padding: 0 3rem;

    .v-toolbar__content{
      height: auto;
    }
  }

  @media screen and (max-width: 960px) {
    .mt-custom{
      margin-top: 0 !important;
    }
    .header{
      padding: 0;
      font-size: 0.8rem;
    }
  }
</style>
