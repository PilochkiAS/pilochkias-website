<template>
  <v-layout>
    <v-flex>
      <v-container grid-list-lg fluid class="px-0">
        <v-layout :column="!isModuleList" wrap>
          <v-flex xs6 md4 v-for="item in products" :key="item._id">
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
        products: []
      }
    },
    props: ['isModuleList', 'category'],
    methods: {
      async getProductsByCategory () {
        if (this.category > 0) {
          this.products = this.$store.getters.getProductsByCategory(this.category)
        } else {
          this.products = this.$store.state.products.products
        }
      }
    },
    async mounted () {
      await this.getProductsByCategory()
    },
    watch: {
      category: {
        handler: async function (to, from) {
          await this.getProductsByCategory()
        },
        deep: true
      }
    },
    components: {
      ProductItem
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
