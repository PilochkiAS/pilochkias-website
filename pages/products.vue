<template>
  <v-layout row justify-center>
    <v-flex xs12 lg12 md12>
      <v-toolbar class="mb-4">
        <v-breadcrumbs icons class="px-0">
          <v-breadcrumbs-item
                  v-for="item in breadcrumbs"
                  :key="item.text"
                  :disabled="item.disabled"
          >
            <v-icon v-if="item.isHome">home</v-icon>
            {{ item.text }}
          </v-breadcrumbs-item>
          <v-icon slot="divider" class="px-0">chevron_right</v-icon>
        </v-breadcrumbs>
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

      <ProductsContent :isModuleList="isModuleList"/>
    </v-flex>
  </v-layout>
</template>

<script>
  import ProductsContent from '~/components/ProductsContent'

  export default {
    data () {
      return {
        breadcrumbs: [
          {
            text: '',
            isHome: true,
            disabled: false,
            href: '/'
          },
          {
            text: 'Товары',
            disabled: true,
            href: '/products'
          }
        ],
        isModuleList: true
      }
    },
    created () {
      this.handleHash(this.$route.hash)
    },
    methods: {
      handleHash (hash) {
        switch (hash) {
          case '#all':
            this.breadcrumbs[1].text = 'Вся продукция'
            this.breadcrumbs[1].link = '/products#all'
            this.breadcrumbs[1].disabled = false
            break
          case '#saw-files':
            this.breadcrumbs[1].text = 'Пилки и файлы'
            this.breadcrumbs[1].link = '/products#saw-files'
            this.breadcrumbs[1].disabled = false
            break
          case '#smart-disks':
            this.breadcrumbs[1].text = 'Диски SMart'
            this.breadcrumbs[1].link = '/products#smart-disks'
            this.breadcrumbs[1].disabled = false
            break
          case '#equipment':
            this.breadcrumbs[1].text = 'Оборудование'
            this.breadcrumbs[1].link = '/products#equipment'
            this.breadcrumbs[1].disabled = false
            break
        }
      }
    },
    watch: {
      $route (to, from) {
        this.handleHash(to.hash)
      }
    },
    components: {
      ProductsContent
    }
  }
</script>

<style lang="stylus" scoped>
  .v-breadcrumbs li:nth-child(even) {
    padding: 0 6px;
  }
  .w-100 {
    width: 100%;
  }

  @media screen and (max-width: 960px) {
    .v-breadcrumbs li:nth-child(even) {
      padding: 0 6px;
    }
    .mx-sm-0 {
      margin-left: 0;
      margin-right: 0;
    }
  }
</style>
