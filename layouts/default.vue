<template>
  <v-app>
    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      :clipped="true"
      v-model="drawer"
      fixed
      app
    >
      <SideBar/>
    </v-navigation-drawer>

    <v-toolbar fixed app :clipped-left="true" dark color="primary">
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

    <v-content>
      <nuxt />
    </v-content>

    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
    >
      <v-list>
        <v-list-tile>
          <v-list-tile-title>Корзина</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app class="text-xs-center">
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>

    <v-bottom-sheet v-model="sheet" full-width>
      <v-btn slot="activator" color="accent" fixed
             dark fab bottom right class="fab-animation"
      >
        <v-icon> phone </v-icon>
      </v-btn>

      <v-list>
        <v-subheader>
          Позвонить
        </v-subheader>
        <template v-for="(item, index) in phones">
          <v-list-tile
                  :key="item.title"
                  avatar
                  @click=""
          >
            <v-list-tile-content>
              <v-list-tile-title v-html="item.link"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-bottom-sheet>
  </v-app>
</template>

<script>
  import SideBar from '~/components/SideBar'

  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        sheet: false,
        phones: [
          { title: '+380970710071', link: `<a href="tel:380970710071">+380970710071</a>` },
          { title: '+380963447307 (опт)', link: `<a href="tel:380963447307">+380963447307</a>` }
        ],
        fixed: false,
        items: [
          { icon: 'home', title: 'Домашняя страница', to: '/' },
          { icon: 'apps', title: 'Продукция', to: '/products' },
          { icon: 'bubble_chart', title: 'Контакты', to: '/contacts' }
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
      this.$vuetify.theme.accent = '#26C6DA'
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
