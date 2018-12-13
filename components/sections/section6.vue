<template>
  <v-layout fill-height
            row
            align-start
            class="banner primary--text"
  >
    <v-flex class="doted--bg_primary">

    </v-flex>
    <v-flex class="doted--bg_accent">

    </v-flex>

    <v-layout class="banner-content white--text hidden-sm-and-down"
              align-start>
      <v-layout justify-start align-start column fill-height class="banner-left py-5 px-5">
        <h4 class="font-weight-light font-italic text-xs-center display-1">При заказе на <span class="font-weight-bold">700грн</span></h4>

        <div class="item mt-4">
          <v-icon color="accent">room</v-icon>
          <h5 class="mb-0 ml-2 font-weight-light headline">бесплатная доставка</h5>
        </div>

        <div class="item">
          <v-icon color="accent">format_paint</v-icon>
          <h5 class="mb-0 ml-2 font-weight-light headline">нанесение логотипа в подарок</h5>
        </div>
      </v-layout>
      <v-layout justify-center align-center fill-height class="banner-right">
        <v-btn outline nuxt to="/products" color="white" class="">
          Перейти к покупкам
        </v-btn>
      </v-layout>
    </v-layout>

    <v-layout column class="banner-content white--text hidden-md-and-up">
      <v-layout column justify-start align-center fill-height class="w-100 ma-0 py-0 px-3">
        <h4 class="font-weight-light font-italic text-xs-center display-1 pt-3">При заказе на <span class="font-weight-bold">700грн</span></h4>

        <div class="item mt-4 ml-3 w-100">
          <v-icon color="accent">room</v-icon>
          <p class="mb-0 ml-2 font-weight-light subheading">бесплатная доставка</p>
        </div>
        <div class="item ml-3 w-100">
          <v-icon color="accent">format_paint</v-icon>
          <p class="mb-0 ml-2 font-weight-light subheading">нанесение логотипа в подарок</p>
        </div>

        <v-btn outline nuxt to="/products" color="white" class="mt-5 mb-5">
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
  $bg-color = #152C41;
  $dot-color = #26C6DA;
  $dot-size-primary = 2px;
  $dot-space-primary = 22px;
  $dot-size-accent = 1px;
  $dot-space-accent = 7px;

  .banner {
    height: 400px;
    width: 100%;
    box-shadow: 1px 2px 20px 1px rgba(21, 44, 65, 0.54);
    position: relative;
    background: linear-gradient(90deg, #26c6da 20px, transparent 1%) center, linear-gradient(#26c6da 20px, transparent 1%) center, #152c41;
    background-size: 22px 22px;
    overflow: hidden;

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
      //background-color: rgba(245, 245, 245, 0.47);
      background-color: rgba(0,0,0,0.54);
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


  .doted--bg_accent {
    background:
        linear-gradient(90deg, $dot-color ($dot-space-primary - $dot-size-primary), transparent 1%) center,
        linear-gradient($dot-color ($dot-space-primary - $dot-size-primary), transparent 1%) center,
        $bg-color;
    background-size: $dot-space-primary $dot-space-primary;
    flex: 1 1 20px;
    height: 100%;
  }
  .doted--bg_primary {
    transform: translateX(10%) rotate(25deg);
    background: linear-gradient(90deg, #26c6da -1px, transparent 1%) center, linear-gradient(#26C6DA 20px, transparent 1%) center, #152c41;
    background-size: 22px 22px;
    flex: 1 1 20px;
    height: 100%;
  }
  @media screen and (max-width: 960px) {
    .banner {
      .banner-content {
        height: auto;

        .v-btn {
          /*flex: 1 1 20px;*/
        }
      }
    }
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
