<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-toolbar class="mb-4">
        <v-breadcrumbs icons class="px-0">
          <v-breadcrumbs-item
                  v-for="item in items"
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
            <v-icon v-if="isModuleList" @click="isModuleList = !isModuleList">view_module</v-icon>
            <v-icon v-else @click="isModuleList = !isModuleList">view_list</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-card>
        <v-card-title class="headline">Welcome to the Vuetify + Nuxt.js template</v-card-title>
        <v-card-text>
          <p>Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.</p>
          <p>For more information on Vuetify, check out the <a href="https://vuetifyjs.com" target="_blank">documentation</a>.</p>
          <p>If you have questions, please join the official <a href="https://chat.vuetifyjs.com/" target="_blank" title="chat">discord</a>.</p>
          <p>Find a bug? Report it on the github <a href="https://github.com/vuetifyjs/vuetify/issues" target="_blank" title="contribute">issue board</a>.</p>
          <p>Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.</p>
          <div class="text-xs-right">
            <em><small>&mdash; John Leider</small></em>
          </div>
          <hr class="my-3">
          <a href="https://nuxtjs.org/" target="_blank">Nuxt Documentation</a>
          <br>
          <a href="https://github.com/nuxt/nuxt.js" target="_blank">Nuxt GitHub</a>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat nuxt to="/inspire">Continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        items: [
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
            this.items[1].text = 'Вся продукция'
            this.items[1].link = '/products#all'
            this.items[1].disabled = false
            break
          case '#saw-files':
            this.items[1].text = 'Пилки и файлы'
            this.items[1].link = '/products#saw-files'
            this.items[1].disabled = false
            break
          case '#smart-disks':
            this.items[1].text = 'Диски SMart'
            this.items[1].link = '/products#smart-disks'
            this.items[1].disabled = false
            break
          case '#equipment':
            this.items[1].text = 'Оборудование'
            this.items[1].link = '/products#equipment'
            this.items[1].disabled = false
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
    }
  }
</script>

<style lang="stylus" scoped>
  .v-breadcrumbs li:nth-child(even) {
    padding: 0 6px;
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
