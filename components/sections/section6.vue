<template>
  <v-layout fill-height
            row
            align-start
            class="banner primary--text hidden-sm-and-down"
  >
    <v-flex class="primary">

    </v-flex>
    <v-flex class="accent">

    </v-flex>
    <v-layout class="banner-content primary--text"
              align-start>
      <v-layout justify-start align-start column fill-height class="banner-left py-5 px-3">
        <h4 class="font-weight-light font-italic primary--text text-xs-center display-1">При заказе на <span class="font-weight-bold">700грн</span></h4>

        <div class="item mt-4">
          <v-icon color="primary">room</v-icon>
          <h5 class="mb-0 ml-2 font-weight-light headline">бесплатная доставка</h5>
        </div>

        <div class="item">
          <v-icon color="primary">format_paint</v-icon>
          <h5 class="mb-0 ml-2 font-weight-light headline">нанесение логотипа в подарок</h5>
        </div>
      </v-layout>
      <v-layout justify-center align-center fill-height class="banner-right">
        <v-btn outline nuxt to="/products" color="primary" class="">
          Перейти к покупкам
        </v-btn>
      </v-layout>
    </v-layout>
  </v-layout>
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
    height: 400px;
    width: 100%;
    box-shadow: 1px 2px 20px 1px rgba(21, 44, 65, 0.54);
    background: none !important;
    position: relative;

    .primary {
      flex: 1 1 20px;
      height: 100%;
    }
    .accent {
      flex: 1 1 20px;
      height: 100%;
    }

    .banner-content {
      position: absolute;
      height: 300px;
      width: 80%;
      top: 50%;
      margin-top: -150px;
      left:0;
      right:0;
      margin-left: auto;
      margin-right: auto;
      background-color: rgba(245, 245, 245, 0.47);
      box-shadow: 1px 2px 20px 1px rgba(21, 44, 65, 0.54);

      .item {
        display: flex;
        justify-self: center;
      }

      .banner-left {
        flex: 1 1 20px;
      }
      .banner-right {
        flex: 1 1 20px;
      }
    }

  }
  @media screen and (max-width: 960px) {
  }
</style>
<style scoped>


  .ml-auto {
    margin-left: auto !important;
  }

  .w-100 {
    width: 100%;
  }

  @media screen and (max-width: 960px) {

  }
</style>
