<template>
  <v-card flat tile hover class="product-card">
    <v-layout :column="isModuleList" class="custom-cards">
      <no-ssr>
        <v-flex xs5 class="py-0 product-images">
          <span class="white--text primary discount-label pa-1" v-if="item.discount > 0">{{ discountPercent }}</span>

          <v-img
                  :src="getImageUrl(item.mainImage)"
                  height="150px"
                  class="main-image"
          ></v-img>
          <v-img
                  :src="getImageUrl(item.secondImage)"
                  height="150px"
                  class="second-image"
          ></v-img>
        </v-flex>
      </no-ssr>

      <v-flex xs7>
        <v-card-title primary-title class="py-0 card-title__height">
          <div>
            <div class="subheading">{{ item.title }}</div>
          </div>
        </v-card-title>
      </v-flex>
    </v-layout>

    <v-divider light inner></v-divider>

    <v-card-actions>
      <div :class="item.discount > 0 ? 'grey--text discount mr-1' : 'accent--text font-weight-bold'" >{{ item.price }} грн</div>
      <div class="accent--text" v-if="item.discount > 0">{{ item.discount }} грн</div>
      <v-spacer></v-spacer>
      <v-btn icon :class="isModuleList ? 'action-btn hidden-sm-and-down':'action-btn'">
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-btn icon :class="isModuleList ? 'action-btn hidden-sm-and-down':'action-btn'">
        <v-icon>share</v-icon>
      </v-btn>
      <v-btn icon
             class="action-btn"
             @click="event => addToCart(event, item)"
      >
        <v-icon>add_shopping_cart</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    created () {

    },
    computed: {
      discountPercent () {
        let percent = parseInt(100 - (this.item.discount * 100 / this.item.price))
        return percent > 0 ? 'SALE ' + percent + '%' : 'SALE'
      }
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
      addToCart (event, item) {
        event.stopPropagation()
        this.$store.commit('addToCart', item)
      }
    },
    props: ['isModuleList', 'item']
  }
</script>

<style lang="stylus" scoped>
  .v-btn.action-btn:hover .v-btn__content .v-icon {
    color: #26C6DA;
  }
  .discount {
    text-decoration: line-through;
  }
  .product-card {
    .main-image {
      transition: all ease-in 300ms;
      height: 150px !important;
    }
    .second-image {
      transition: all ease-in 300ms;
      height: 0 !important;
    }

    &:hover {
      .main-image {
        height: 0 !important;
      }
      .second-image {
        height: 150px !important;
      }
    }
  }
  .product-images {
    position: relative;
  }
  .discount-label {
    height: 2rem;
    position: absolute;
    top: 0;
    z-index: 2;
  }
  .card-title__height {
    height: 48px;
    overflow: hidden;
  }

  @media screen and (max-width: 960px) {
  }
</style>
<style lang="stylus">


  @media screen and (max-width: 960px) {
  }
</style>
