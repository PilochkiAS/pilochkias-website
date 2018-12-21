<template>
  <v-layout column>
    <v-parallax class=""
                src="https://images.pexels.com/photos/567540/pexels-photo-567540.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
      <v-layout class="parallax-content" fill-height justify-center align-center>
        <h1 class="display-2">О нас</h1>
      </v-layout>
    </v-parallax>

    <div class="white">
      <v-container grid-list-sm class="pt-5">
        <h4 class="display-1">Новинка на рынке NAIL индустрии</h4>
        <v-layout class="py-5">
          <v-flex xs6>
            <p>Металические основы-пилочки «AS» из хирургической стали с добавлением титана,
              металические основы-шлифовщики «AS» из хирургической стали для маникюра со сменными файлами,
              бафами (образивами, накладками), а так же терки для педикюра «AS» из хирургической стали со сменными файлами (образивами, накладками).</p>
          </v-flex>
          <v-flex xs6>
            <v-layout fill-height justify-center align-center>
              <v-icon class="accent--text icon-size">help</v-icon>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div class="white">
      <v-container grid-list-sm class="pt-5">
        <h4 class="display-1">Новинка на рынке NAIL индустрии</h4>
        <v-layout class="py-5">
          <v-flex xs12>
            <p>У вас есть вопросы? У нас есть ответы. Если у вас есть какие-то другие вопросы, не стесняйтесь, присылайте нам по электронной почте info@pilochki.com</p>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <v-container grid-list-sm class="pt-5">
      <v-layout class="">
        <v-flex xs6>
          <v-layout fill-height justify-center align-center>
            <v-icon class="accent--text icon-size">help</v-icon>
          </v-layout>
        </v-flex>
        <v-flex xs6>
          <h4 class="display-1 pb-5">Доставка</h4>
          <p class="mb-1">Доставка по Украине
            Способ доставки товаров по Украине Вы можете выбрать самостоятельно.

            Мы предлагаем своим клиентам воспользоваться услугами агентства <b>"Новая Почта"</b>,
            но выбор всегда остается за заказчиком.
          </p>
          <p class="mb-1">Например, общая стоимость оплаты пересылки товара стоимостью 1480 грн Новой Почтой будет следующей: 35 грн.
            (стоимость пересылки товара можно рассчитать <a href="https://novaposhta.ua/delivery" class="accent--text">здесь</a>).</p>
          <p class="mb-1">Расходы по транспортировке (в соответствии с прейскурантом выбранной Вами службы доставки) оплачиваются заказчиком.</p>
          <p class="mb-1">С подробным описанием цен Вы можете ознакомиться на сайтах "Новой Почты" или других служб, выбранных по Вашему усмотрению.</p>
          <span class="accent--text">Доставка по г.Винница - бесплатно!</span>
        </v-flex>
      </v-layout>
    </v-container>

    <section5 />

    <section8 />

    <v-snackbar
        v-model="snackbar"
        :color="snackbarColor"
        :timeout="2000"
        top
        right
    >
      {{ snackbarMessage }}
      <v-btn
          dark
          flat
          @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-layout>
</template>
<script>
  import section5 from '~/components/sections/section5.vue'
  import section8 from '~/components/sections/section8.vue'

  export default {
    data: () => ({
      snackbarMessage: '',
      snackbarColor: '',
      snackbar: false
    }),
    watch: {
    },
    computed: {
    },
    methods: {
      callSnackbar (message, color) {
        this.snackbarMessage = message
        this.snackbarColor = color
        this.snackbar = true
      }
    },
    mounted () {
    },
    components: {
      section5,
      section8
    }
  }
</script>

<style lang="stylus" scoped>
  .v-parallax {
    max-height: 40vh;

    .parallax-content {
      background-color: rgba(127, 130, 139, 0.29);
    }
  }
  .container {
    flex: 1 1 auto;
  }
  .icon-size {
    font-size: 4.5rem;
  }

  @media screen and (max-width: 960px) {
  }
</style>

<style lang="stylus">
  .v-parallax__content {
    padding: 0;
  }
  @media screen and (max-width: 960px) {
  }
</style>
