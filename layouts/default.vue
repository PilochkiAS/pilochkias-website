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
        <v-badge left color="accent">
          <span slot="badge" v-if="$store.state.cart.products.length > 0">{{ $store.state.cart.products.length }}</span>
          <v-icon>shopping_cart</v-icon>
        </v-badge>
      </v-btn>
    </v-toolbar>

    <v-content>
      <nuxt />
    </v-content>

    <v-navigation-drawer
      temporary
      right
      v-model="rightDrawer"
      fixed
    >
      <CartSideBar v-model="rightDrawer"/>
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
  import CartSideBar from '~/components/CartSideBar'

  export default {
    data () {
      return {
        cart: [1, 2, 3],
        clipped: false,
        drawer: false,
        sheet: false,
        phones: [
          { title: '+380970710071', link: `<a href="tel:380970710071">+380970710071</a>` },
          { title: '+380963447307', link: `<a href="tel:380963447307">+380963447307</a>` }
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
    computed: {
      cartProducts (value) {
        return this.$store.state.cart.products
      }
    },
    components: {
      SideBar,
      CartSideBar
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
  .fab-animation {
    animation: rotate 2s ease-in 1s infinite normal forwards;

    &:before {
      position: absolute;
      width: 56px;
      height: 56px;
      background-color: #C2185B;
      animation: zoom-out 3s linear 0s infinite normal;
    }
  }

  $animation-rotate-scale = 15deg;
  @keyframes rotate {
    5%{
      transform: rotate(0deg);
    }
    10%{
      transform: rotate($animation-rotate-scale);
    }
    15%{
      transform: rotate(0deg);
    }
    20%{
      transform: rotate($animation-rotate-scale);
    }
    25%{
      transform: rotate(0deg);
    }
  }

  $animation-zoomout-scale = 1.5;
  @keyframes zoom-out {
    0%{
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
    72%{
      -webkit-transform: scale($animation-zoomout-scale);
      transform: scale($animation-zoomout-scale);
      opacity: 0;
    }
    100%{
      -webkit-transform: scale($animation-zoomout-scale);
      transform: scale($animation-zoomout-scale);
      opacity: 0;
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
<style lang="stylus" scoped>
  .v-badge__badge.accent span{
    padding-top: 1px;
    padding-left: 1px;
  }
  @media screen and (max-width: 960px) {

  }
</style>
