<template>
  <v-layout>
    <v-flex>
      <v-container grid-list-lg fluid class="px-0">
        <v-layout :column="!isModuleList" wrap>
          <v-flex xs6 md4 v-for="n in 18" :key="n">
            <ProductItem :isModuleList="isModuleList" :items="products"/>
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
          { title: 'Вся продукция', to: '/products#all' }
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
