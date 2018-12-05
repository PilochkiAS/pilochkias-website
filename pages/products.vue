<template>
  <v-layout row justify-center>
    <v-flex xs12 lg12 md12>
      <v-toolbar class="mb-4">
        <h3 class="grey--text">{{ category.title }}</h3>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn icon class="mx-sm-0"><v-icon>filter_list</v-icon></v-btn>
          <v-btn icon class="mx-sm-0"><v-icon>swap_vert</v-icon></v-btn>
          <v-btn icon class="mx-sm-0">
            <v-icon v-if="!isModuleList" @click="isModuleList = !isModuleList">view_module</v-icon>
            <v-icon v-else @click="isModuleList = !isModuleList">view_list</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
        <v-container>
          <ProductsContent
                  :isModuleList="isModuleList"
                  :category="category.id"
                  :products="products"
          />
          <v-pagination
                  v-model="page"
                  circle
                  :length="paginationLength"
                  :total-visible="7"
                  class="pagination"
                  v-if="paginationLength > 1"
          ></v-pagination>
        </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
  import ProductsContent from '~/components/ProductsContent'

  export default {
    data () {
      return {
        page: 1,
        paginationLength: 0,
        productsPerPage: 9,
        isModuleList: true,
        category: { title: 'Вся продукция', id: '0' },
        categories: [
          { title: 'Вся продукция', id: '0' },
          { title: 'Пилочки для маникюра и педикюра', id: '1' },
          { title: 'Сменные файлы для пилочек', id: '2' },
          { title: 'Наборы с Podo-Disk', id: '3' },
          { title: 'Шрифты для гравировки', id: '4' },
          { title: 'Сменные файлы для Podo-Disk', id: '5' },
          { title: 'Наборы Баф BLACK', id: '6' }
        ],
        products: []
      }
    },
    async asyncData ({ store, route }) {
      return store.dispatch('fetchProducts')
    },
    created () {
      this.handleHash(this.$route.query)
      this.spliceProducts()
    },
    methods: {
      handleHash (query) {
        switch (query.category) {
          case '1':
            this.category = this.categories[1]
            break
          case '2':
            this.category = this.categories[2]
            break
          case '3':
            this.category = this.categories[3]
            break
          case '4':
            this.category = this.categories[4]
            break
          case '5':
            this.category = this.categories[5]
            break
          case '6':
            this.category = this.categories[6]
            break
          default:
            this.category = this.categories[0]
            break
        }
      },
      spliceProducts () {
        const products = this.$store.getters.getProductsByCategory(this.category.id)
        this.setPaginationLength(products)
        this.products = products.slice(this.page * this.productsPerPage - this.productsPerPage, this.page * this.productsPerPage)
      },
      setPaginationLength (products) {
        this.paginationLength = Math.ceil(products.length / this.productsPerPage)
      }
    },
    watch: {
      $route (to, from) {
        this.handleHash(to.query)
      },
      category: {
        handler: function (to, from) {
          this.spliceProducts()
        },
        deep: true
      },
      page () {
        this.spliceProducts()
      }
    },
    mounted () {
      this.productsPerPage = 8
    },
    components: {
      ProductsContent
    }
  }
</script>

<style lang="stylus" scoped>
  .product-categories-btn {
    width: 230px;
  }
  .w-100 {
    width: 100%;
  }
  .pagination {
    width: 100%;
    justify-content: center;
  }

  @media screen and (max-width: 960px) {
    .mx-sm-0 {
      margin-left: 0;
      margin-right: 0;
    }
  }
</style>

<style lang="stylus">
  .product-categories-btn {
    .v-input__control {
      height: 48px;
    }
    .v-input__slot {
      margin: 0;
    }
    .v-input__append-inner {
      margin: 0;
    }
    .v-text-field {
      padding: 0;
    }
    .v-select__selections {
      flex-wrap: nowrap;
    }
  }
  @media screen and (max-width: 960px) {
  }
</style>
