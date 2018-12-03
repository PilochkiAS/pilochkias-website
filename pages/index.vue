<template >
  <v-layout column>
    <v-carousel light class="carousel1" :height="'50vh'">
      <v-carousel-item
              v-for="banner in banners"
              :key="banner.title"
      >
        <v-layout fill-height class="ma-0 px-5 banner">
          <v-flex xs12 md6 class="banner-text px-5">
            <h1 class="primary--text pa-1">{{ banner.title }}</h1>
            <h2 class="white--text pa-1 font-weight-light">{{ banner.description }}</h2>

            <div class="text-xs-left">
              <v-btn
                      slot="activator"
                      color="primary"
                      outline
                      dark
                      nuxt
                      :to="banner.link"
              >
                Подробнее
              </v-btn>
            </div>
          </v-flex>
          <v-flex xs0 md6 class="">
          </v-flex>
        </v-layout>

      </v-carousel-item>
    </v-carousel>

    <v-layout justify-center class="pt-4" v-if="pwaPrompt">
      <v-btn
              slot="activator"
              color="primary"
              outline
              dark
              @click="installAppBtnClick"
      >
        Установить Приложение
      </v-btn>
    </v-layout>

    <v-layout row class="products-carousels my-5">
      <v-flex  xs12 md6>
        <h2 class="pt-4 pb-4 text-xs-center">Наиболее популярные товары</h2>

        <v-carousel light class="carousel2" height="280">
          <v-carousel-item
                  v-for="item in $store.getters.getRandomProducts"
                  :key="item.title"
          >

            <v-layout justify-center fill-height>
              <v-flex xs8>
                <ProductItem :isModuleList="isModuleList" :item="item"/>
              </v-flex>
            </v-layout>

          </v-carousel-item>
        </v-carousel>
      </v-flex>

      <v-flex xs12 md6 v-if="$store.getters.getDiscountProducts.length > 0">
        <h2 class="pt-4 pb-4 text-xs-center">Акции и скидки</h2>

        <v-carousel light class="carousel2" height="280">
          <v-carousel-item
                  v-for="item in $store.getters.getDiscountProducts"
                  :key="item.title"
          >

            <v-layout justify-center fill-height>
              <v-flex xs8>
                <ProductItem :isModuleList="isModuleList" :item="item"/>
              </v-flex>
            </v-layout>

          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>

    <section4 />

    <section5 />
  </v-layout>
</template>
<script>
  import ProductItem from '~/components/ProductItem'
  import section4 from '~/components/sections/section4'
  import section5 from '~/components/sections/section5'

  export default {
    data () {
      return {
        banners: [
          { title: 'ПИЛКИ И ФАЙЛЫ',
            description: 'Всех размеров для маникюра и педикюра',
            link: '/products#saw-files',
            imgSrc: 'https://images.ua.prom.st/1406733799_viber_image_22.jpg'
          },
          { title: 'ДИСК SMART',
            link: '/products#smart-disks',
            description: `Диск Smart - это инновационный, запатентованный компанией SMART инструмент`,
            imgSrc: 'https://images.ua.prom.st/1406732993_viber_image_1.jpg'
          },
          { title: 'ОБОРУДОВАНИЕ',
            link: '/products#equipment',
            description: 'Аппараты, лампы и пылесосы для маникюра и педикюра',
            imgSrc: 'https://pilochki.com/files/12pzjm0qsiozn8kbg9xw/slider_original.jpg'
          }
        ],
        isModuleList: true,
        pwaPrompt: null
      }
    },
    async asyncData ({ store, route }) {
      return store.dispatch('fetchProducts')
    },
    methods: {
      installAppBtnClick (e) {
        // Show the prompt
        this.pwaPrompt.prompt()
        // Wait for the user to respond to the prompt
        this.pwaPrompt.userChoice
          .then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the A2HS prompt')
            } else {
              console.log('User dismissed the A2HS prompt')
            }
            // hide our user interface that shows our A2HS button
            this.pwaPrompt = null
          })
      }
    },
    mounted () {
      window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault()
        // Stash the event so it can be triggered later.
        this.pwaPrompt = e
      })
    },
    components: {
      ProductItem,
      section4,
      section5
    }
  }
</script>
<style lang="stylus" scoped>
  .bg-darken {
    background-color: rgba(71, 73, 78, 0.25);
  }
  .carousel1 {
    height: 50vh;
  }
  .banner {
    background-color: #80DEEA;
    background-image: url("https://images.ua.prom.st/912438962_w800_h640_dsc_0133.jpg");
    background-size: cover;
  }
  .banner-text {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #80DEEAA8;
    h1 {
      font-size: 40px;
    }
  }
  .products-carousels {
    flex-direction: row;
  }

  @media screen and (max-width: 960px) {
    .display-2 {
      font-size: 2.2rem !important;
    }
    .banner-text {
      h1 {
        font-size: 1.5rem;
      }
      h2 {
        font-size: 1.2rem;
      }
    }
    .products-carousels {
      flex-direction: column !important;
    }
    .headline {
      font-size: 1.5rem !important;
    }
  }

</style>

<style lang="stylus">
  .carousel1 {
    .v-carousel__controls {
      background: none;
      justify-content: flex-start;
      padding-left: 20%;
    }
    .v-btn--active:before, .v-btn:hover:before, .v-btn:focus:before {
      background: none;
    }
    .v-btn i{
      color: white !important;
      opacity: 1;
    }
    .v-btn--active i{
      color: #26C6DA !important;
    }
  }
  .carousel2 {
    .v-carousel__controls {
      background: none;
    }
    .v-btn--active:before, .v-btn:hover:before, .v-btn:focus:before {
      background: none;
    }
    .v-btn--active i{
      color: #26C6DA !important;
    }
  }
  .v-carousel {
    box-shadow: none;
  }

  @media screen and (max-width: 960px) {
    .carousel1 {
      .v-carousel__controls {
        justify-content: center;
        padding-left: unset;
      }
    }
  }
</style>
