<template>
  <div class="footer white py-5">
    <v-container class="py-0">
      <v-layout>
        <v-flex xs4 class="mx-3">
          <h5 class="headline accent--text pb-3">О нас</h5>
          <p v-html="about" class=""></p>
        </v-flex>

        <v-flex xs4 class="mx-3">
          <h5 class="headline accent--text pb-3">Быстрое Меню</h5>

          <v-layout column>
            <v-flex v-for="link in links"
                    :key="link.title"
                    class="link"
            >
              <v-icon>arrow_right</v-icon>
              <nuxt-link
                  :to="link.to"
                  class="primary--text no-underline my-2"
              >
                {{ link.title }}
              </nuxt-link>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs4 class="mx-3">
          <v-layout column>
            <v-flex xs6 class="">
              <h5 class="headline accent--text pb-3 no-wrap">Контактная информация</h5>

              <p class="subheading mb-0">Адресс</p>
              <p>203 Fake St. Mountain View, San Francisco, California, USA</p>

              <p class="subheading mb-0">Телефон</p>
              <a href="tel:380970710071" class="accent--text no-underline">+380970710071</a> <br/>
              <a href="tel:380963447307" class="accent--text no-underline">+380963447307</a>

              <p class="subheading mb-0 mt-3">Email Адресс</p>
              <a href="mailto:youremail@domain.com" class="accent--text no-underline">youremail@domain.com</a>
            </v-flex>
            <v-flex xs6></v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      about: 'Металические основы-пилочки «AS» из хирургической стали с добавлением титана, металические основы-шлифовщики «AS» из хирургической стали для маникюра со сменными файлами, бафами (образивами, накладками), а так же терки для педикюра «AS» из хирургической стали со сменными файлами (образивами, накладками).',
      links: [
        {
          to: '/',
          title: 'Домашняя страница'
        },
        {
          to: '/products',
          title: 'Товары'
        },
        {
          to: '/delivery',
          title: 'Доставка и оплата'
        }
      ]
    }),
    props: [],
    methods: {
    },
    mounted () {
    },
    watch: {
    },
    components: {
    }
  }
</script>

<style lang="stylus" scoped>
  .footer {
    .link {
      display: flex;
      align-items: center;

      a {
        transition: all ease-in 200ms;
      }

      &:hover {
        a {
          padding-left: .5rem;
          color: #26C6DA !important;
        }
        i {
          color: #26C6DA !important;
        }
      }
    }
  }

  .container {
    flex: 1 1 auto;
    margin: 0 auto;
  }
  @media screen and (max-width: 960px) {
    .footer {
    }
  }
</style>
<style scoped>

  @media screen and (max-width: 960px) {
  }
</style>
