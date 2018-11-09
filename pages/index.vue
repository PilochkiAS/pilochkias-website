<template >
  <v-layout>
    <v-carousel light class="carousel">
      <v-carousel-item
              v-for="banner in banners"
              :key="banner.title"
              :src="banner.imgSrc"
      >
        <v-layout fill-height align-center class="bg-darken">
          <v-flex xs12 sm8 offset-sm2>
            <div>
              <h2 class="display-2 white--text">{{ banner.title }}</h2>
              <span class="headline white--text font-weight-thin">{{ banner.description }}</span>
            </div>
            <v-btn color="accent" nuxt :to="banner.link" class="mx-0">Подробнее</v-btn>
          </v-flex>
        </v-layout>
      </v-carousel-item>
    </v-carousel>

    <v-bottom-sheet v-model="sheet" full-width>
      <v-btn slot="activator" color="accent" fixed
             dark fab bottom right class="fab-animation"
      >
        <v-icon> phone </v-icon>
      </v-btn>

      <v-list>
        <v-subheader>
          Позвонить
        </v-subheader>
        <template v-for="(item, index) in phones">
          <v-list-tile
                  :key="item.title"
                  avatar
                  @click=""
          >
            <v-list-tile-content>
              <v-list-tile-title v-html="item.link"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-bottom-sheet>
  </v-layout>
</template>
<script>
  export default {
    data () {
      return {
        sheet: false,
        phones: [
          { title: '+380960000000', link: `<a href="tel:380960000000">+380960000000</a>` },
          { title: '+380960000000 (опт)', link: `<a href="tel:380960000000">+380960000000 (опт)</a>` }
        ],
        banners: [
          { title: 'ПИЛКИ И ФАЙЛЫ',
            description: 'Всех размеров для маникюра и педикюра',
            link: '/products#saw-files',
            imgSrc: 'https://pilochki.com/files/12pzjm0qsiozn8kbg9xw/slider_original.jpg'
          },
          { title: 'ДИСК SMART',
            link: '/products#smart-disks',
            description: `Диск Smart - это инновационный, запатентованный компанией SMART инструмент,
              позволяющий за считанные минуты удалить грубую кожу с пяток, без применения кератоликов.`,
            imgSrc: 'https://pilochki.com/files/12pzjm0qsiozn8kbg9xw/slider_original.jpg'
          },
          { title: 'ОБОРУДОВАНИЕ',
            link: '/products#equipment',
            description: 'Аппараты, лампы и пылесосы для маникюра и педикюра',
            imgSrc: 'https://pilochki.com/files/12pzjm0qsiozn8kbg9xw/slider_original.jpg'
          }
        ]
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .bg-darken {
    background-color: rgba(71, 73, 78, 0.25);
  }
  @media screen and (max-width: 960px) {
  }
</style>

<style lang="stylus">
  .carousel {
    .v-carousel__controls {
      background: none;
    }
    .v-btn--active:before, .v-btn:hover:before, .v-btn:focus:before {
      background: none;
    }
    .v-btn i{
      color: white !important;
      opacity: 1;
    }
    .v-btn--active i{
      color: #536DFE !important;
    }
  }
</style>
