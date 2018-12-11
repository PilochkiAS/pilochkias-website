<template>
  <v-dialog :value="value" @input="handleDialogChange" max-width="500" transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="$emit('input', false)">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>{{ product.title }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn icon
                   class="action-btn"
                   @click="$store.commit('addToCart', product)"
            >
              <v-icon>add_shopping_cart</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-layout column fill-height class="dialog-content pb-5">
          <div class="discount-label pa-2" v-if="product.discount > 0">
            <v-img src="/sale.png" height="40" width="40"/>
          </div>
          <v-img
              :src="getImageUrl(product.mainImage)"
              height="200px"
              class="main-image"
          ></v-img>
          <span class="price-label accent primary--text py-1 px-4 font-weight-bold">{{ product.discount ? product.discount : product.price }}грн</span>
          <v-layout column class="px-4 pt-4">
            <h6 class="title text-xs-center">{{ product.title }}</h6>
            <p class="subheading mt-3">{{ product.description }}</p>
          </v-layout>

        </v-layout>


      </v-card>
    </v-dialog>
</template>

<script>
  export default {
    data () {
      return {
        isSmallScreen: false
      }
    },
    props: ['value', 'product'],
    created () {

    },
    mounted () {
      this.onResize()
      window.addEventListener('resize', this.onResize)
    },
    methods: {
      getImageUrl (id) {
        if (process.env.NODE_ENV === 'development') {
          return id ? 'http://localhost/api/image/' + id : ''
        } else if (process.env.NODE_ENV === 'production' && process.env.herokuBaseURL === 'true') {
          console.log('==> process.env.herokuBaseURL:', process.env.herokuBaseURL)
          return id ? 'https://pilochki-cms.herokuapp.com/api/image/' + id : ''
        } else if (process.env.NODE_ENV === 'production') {
          return id ? 'https://pilochki-cms.herokuapp.com/api/image/' + id : ''
        }
      },
      onResize () {
        clearTimeout(this.resizeTimeout)

        if (document.body.clientWidth < 960) {
          this.resizeTimeout = setTimeout(() => {
            this.isSmallScreen = true
          }, 300)
        }
        if (document.body.clientWidth > 960) {
          this.resizeTimeout = setTimeout(() => {
            this.isSmallScreen = false
          }, 300)
        }
      },
      handleDialogChange () {
        this.$emit('input', false)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .dialog-content {
    position: relative;
  }
  .price-label {
    position: absolute;
    width: auto;
    right: 0;
    top: 185px;
  }
  .discount-label {
    height: 2rem;
    position: absolute;
    top: 0;
    letf: 0;
    z-index: 2;
  }
  @media screen and (max-width: 960px) {
  }
</style>
<style lang="stylus">

  @media screen and (max-width: 960px) {
  }
</style>
