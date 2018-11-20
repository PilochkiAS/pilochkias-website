<template >
  <v-layout column>
    <v-carousel light class="carousel1">
      <v-carousel-item
              v-for="banner in banners"
              :key="banner.title"
              :src="banner.imgSrc"
      >
        <v-layout fill-height align-center class="bg-darken">
          <v-flex xs8 offset-xs2 offset-sm2>
            <div>
              <h2 class="display-2 white--text">{{ banner.title }}</h2>
              <span class="headline white--text font-weight-thin">{{ banner.description }}</span>
            </div>
            <v-btn color="accent" nuxt :to="banner.link" class="mx-0">Подробнее</v-btn>
          </v-flex>
        </v-layout>
      </v-carousel-item>
    </v-carousel>

    <v-layout row>
      <v-flex xs6>
        <h2 class="pt-4 pb-4 text-xs-center">Наиболее популярные товары</h2>

        <v-carousel light class="carousel2" height="350">
          <v-carousel-item
                  v-for="item in products"
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

      <v-flex xs6>
        <h2 class="pt-4 pb-4 text-xs-center">Акции и скидки</h2>

        <v-carousel light class="carousel2" height="350">
          <v-carousel-item
                  v-for="item in products"
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
  </v-layout>
</template>
<script>
  import ProductItem from '~/components/ProductItem'

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
        products: [
          {
            title: 'Пилочка для маникюра BANAN',
            price: 160,
            discount: 140,
            imgSrc: 'https://images.ua.prom.st/912158191_w800_h640_dsc_0003.jpg'
          },
          {
            title: 'Пилочка для маникюра МAXI',
            price: 180,
            discount: 0,
            imgSrc: 'https://images.ua.prom.st/912416731_w800_h640_dsc_0788.jpg'
          },
          {
            title: 'Основа для маникюра BAF',
            price: 90,
            discount: 0,
            imgSrc: 'https://images.ua.prom.st/912438962_w800_h640_dsc_0133.jpg'
          }
        ],
        isModuleList: true
      }
    },
    components: {
      ProductItem
    }
  }
</script>
<style lang="stylus" scoped>
  .bg-darken {
    background-color: rgba(71, 73, 78, 0.25);
  }

  @media screen and (max-width: 960px) {
    .display-2 {
      font-size: 2.2rem !important;
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

</style>
