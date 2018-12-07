<template>
  <v-layout>
    <v-flex>
      <v-container grid-list-lg fluid class="px-0">
        <v-layout :column="!isModuleList" wrap>
          <v-flex xs6 md4 v-for="item in products" :key="item._id" @click.native.stop="openDialog(item)" @click="openDialog(item)">
            <ProductItem :isModuleList="isModuleList" :item="item"/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>

    <product-item-dialog v-model="dialog" :product="chosenProduct"/>
  </v-layout>
</template>

<script>
  import ProductItem from '~/components/ProductItem'
  import ProductItemDialog from '~/components/ProductItemDialog'

  export default {
    data () {
      return {
        dialog: false,
        chosenProduct: {}
      }
    },
    props: ['isModuleList', 'category', 'products'],
    methods: {
      openDialog (product) {
        this.dialog = true
        this.chosenProduct = product
      }
    },
    async mounted () {
    },
    watch: {
    },
    components: {
      ProductItem,
      ProductItemDialog
    }
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
