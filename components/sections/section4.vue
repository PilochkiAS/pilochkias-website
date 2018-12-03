<template>
  <div class="gradient">
    <v-container class="pa-5 hidden-sm-and-down">
      <v-layout fill-height
                column
                align-start
                class="banner white--text px-5 hidden-sm-and-down"
      >
        <h3 class="font-weight-light font-italic display-2 mt-5">При заказе на <span class="font-weight-bold">700грн</span></h3>

        <div class="item mt-4">
          <v-icon color="white">room</v-icon>
          <h5 class="mb-0 ml-2 font-weight-light headline">бесплатная доставка</h5>
        </div>

        <div class="item">
          <v-icon color="white">format_paint</v-icon>
          <h5 class="mb-0 ml-2 font-weight-light headline">нанесение логотипа в подарок</h5>
        </div>

        <v-btn outline nuxt to="/products" color="white" class="ml-auto mt-5">
          Перейти к покупкам
        </v-btn>
      </v-layout>
    </v-container>

    <v-container class="pa-3 hidden-md-and-up">
      <v-layout fill-height
                column
                align-start
                class="banner white--text px-4 pb-3"
      >
        <h5 class="font-weight-light font-italic headline mt-5 text-no-wrap">При заказе на <span class="font-weight-bold">700грн</span></h5>

        <div class="item mt-4">
          <v-icon color="white">room</v-icon>
          <h6 class="mb-0 ml-2 font-weight-light title">бесплатная доставка</h6>
        </div>

        <div class="item mt-3">
          <v-icon color="white">format_paint</v-icon>
          <h6 class="mb-0 ml-2 font-weight-light title">нанесение логотипа в подарок</h6>
        </div>

        <v-btn outline nuxt to="/products" color="white" class="mt-5 w-100">
          Перейти к покупкам
        </v-btn>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    props: [],
    methods: {
      async someMethod () {
      }
    },
    async mounted () {
    },
    watch: {
    },
    components: {
    }
  }
</script>

<style lang="stylus" scoped>
  .banner {
    height: 300px;
    width: 100%;
    border: 3px solid white;
    border-radius: 10px;
    box-shadow: 0 0 20px 2px rgba(255,255,255,0.7);

    .item {
      display: flex;
      justify-self: center;
    }

    &:hover {
      box-shadow: 0 0 10px 2px rgba(255,255,255,0.9);
    }
  }
  @media screen and (max-width: 960px) {
  }
</style>
<style scoped>
  .gradient {
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#c2185b+0,26c6da+69,1976d2+100 */
    background: #c2185b; /* Old browsers */
    background: -moz-linear-gradient(left, #c2185b 0%, #26c6da 69%, #1976d2 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left, #c2185b 0%,#26c6da 69%,#1976d2 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right, #c2185b 0%,#26c6da 69%,#1976d2 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#c2185b', endColorstr='#1976d2',GradientType=1 ); /* IE6-9 */
  }

  .ml-auto {
    margin-left: auto !important;
  }

  .w-100 {
    width: 100%;
  }

  @media screen and (max-width: 960px) {
    .gradient {
      /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#c2185b+0,26c6da+98 */
      background: #c2185b; /* Old browsers */
      background: -moz-linear-gradient(left, #c2185b 0%, #26c6da 98%); /* FF3.6-15 */
      background: -webkit-linear-gradient(left, #c2185b 0%,#26c6da 98%); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(to right, #c2185b 0%,#26c6da 98%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#c2185b', endColorstr='#26c6da',GradientType=1 ); /* IE6-9 */
    }
  }
</style>
