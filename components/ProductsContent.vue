<template>
  <v-layout>
    <v-flex>
      <v-container grid-list-lg fluid class="px-0">
        <v-layout :column="!isModuleList" wrap>
          <v-flex xs6 md4 v-for="item in products" :key="item.title">
            <ProductItem :isModuleList="isModuleList" :item="item"/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
  import ProductItem from '~/components/ProductItem'

  export default {
    data () {
      return {
        products: [
          {
            title: 'Пилочка для маникюра BANAN',
            id: 'qweqweqwe1',
            price: 160,
            discount: 140,
            imgSrc: 'https://images.ua.prom.st/912158191_w800_h640_dsc_0003.jpg'
          },
          {
            title: 'Пилочка для маникюра МAXI',
            id: 'qweqweqwe2',
            price: 180,
            discount: 0,
            imgSrc: 'https://images.ua.prom.st/912416731_w800_h640_dsc_0788.jpg'
          },
          {
            title: 'Основа для маникюра BAF',
            id: 'qweqweqwe3',
            price: 90,
            discount: 0,
            imgSrc: 'https://images.ua.prom.st/912438962_w800_h640_dsc_0133.jpg'
          },
          {
            title: 'Пилочка для маникюра BANAN',
            id: 'qweqweqwe4',
            price: 160,
            discount: 140,
            imgSrc: 'https://images.ua.prom.st/912158191_w800_h640_dsc_0003.jpg'
          },
          {
            title: 'Пилочка для маникюра МAXI',
            id: 'qweqweqwe5',
            price: 180,
            discount: 0,
            imgSrc: 'https://images.ua.prom.st/912416731_w800_h640_dsc_0788.jpg'
          },
          {
            title: 'Основа для маникюра BAF',
            id: 'qweqweqwe6',
            price: 90,
            discount: 0,
            imgSrc: 'https://images.ua.prom.st/912438962_w800_h640_dsc_0133.jpg'
          },
          {
            title: 'Пилочка для маникюра BANAN',
            id: 'qweqweqwe7',
            price: 160,
            discount: 140,
            imgSrc: 'https://images.ua.prom.st/912158191_w800_h640_dsc_0003.jpg'
          },
          {
            title: 'Пилочка для маникюра МAXI',
            id: 'qweqweqwe8',
            price: 180,
            discount: 0,
            imgSrc: 'https://images.ua.prom.st/912416731_w800_h640_dsc_0788.jpg'
          },
          {
            title: 'Основа для маникюра BAF',
            id: 'qweqweqwe9',
            price: 90,
            discount: 0,
            imgSrc: 'https://images.ua.prom.st/912438962_w800_h640_dsc_0133.jpg'
          },
          {
            title: 'Пилочка для маникюра BANAN',
            id: 'qweqweqwe10',
            price: 160,
            discount: 140,
            imgSrc: 'https://images.ua.prom.st/912158191_w800_h640_dsc_0003.jpg'
          },
          {
            title: 'Пилочка для маникюра МAXI',
            id: 'qweqweqwe11',
            price: 180,
            discount: 0,
            imgSrc: 'https://images.ua.prom.st/912416731_w800_h640_dsc_0788.jpg'
          },
          {
            title: 'Основа для маникюра BAF',
            id: 'qweqweqwe12',
            price: 90,
            discount: 0,
            imgSrc: 'https://images.ua.prom.st/912438962_w800_h640_dsc_0133.jpg'
          },
          {
            title: 'Пилочка для маникюра BANAN',
            id: 'qweqweqwe13',
            price: 160,
            discount: 140,
            imgSrc: 'https://images.ua.prom.st/912158191_w800_h640_dsc_0003.jpg'
          },
          {
            title: 'Пилочка для маникюра МAXI',
            id: 'qweqweqwe14',
            price: 180,
            discount: 0,
            imgSrc: 'https://images.ua.prom.st/912416731_w800_h640_dsc_0788.jpg'
          },
          {
            title: 'Основа для маникюра BAF',
            id: 'qweqweqwe15',
            price: 90,
            discount: 0,
            imgSrc: 'https://images.ua.prom.st/912438962_w800_h640_dsc_0133.jpg'
          }
        ]
      }
    },
    created () {

    },
    components: {
      ProductItem
    },
    props: ['isModuleList']
  }
</script>

<style lang="stylus" scoped>
  .v-btn.action-btn:hover .v-btn__content .v-icon {
    color: #26C6DA;
  }

  @media screen and (max-width: 960px) {
    .custom-cards {

    }
  }
</style>
<style lang="stylus">


  @media screen and (max-width: 960px) {
    .v-breadcrumbs__divider {
      padding: 0 4px !important;
    }
  }
</style>
