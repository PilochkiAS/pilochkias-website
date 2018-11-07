<template>
  <v-container grid-list-lg>
    <v-layout row wrap>

      <v-flex xs12 v-for="banner in banners" :key="banner.title">
        <v-card class="banner">
          <v-card-text class="px-4 d-flex">
            <h1>{{ banner.title }}</h1>
            <v-divider class="accent mb-3"/>
            <p>{{ banner.description }}</p>
            <v-btn color="primary" nuxt :to="banner.link" class="mx-0">Подробнее</v-btn>
          </v-card-text>

          <div class="banner-image">
            <v-img :src="banner.imgSrc" aspect-ratio="1.5" contain></v-img>
          </div>
        </v-card>
      </v-flex>

    </v-layout>

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
  </v-container>
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
            imgSrc: 'https://smart-pilka.ru/image/cache/catalog/product/banner1-652x405.jpg'
          },
          { title: 'ДИСК SMART',
            link: '/products#smart-disks',
            description: `Диск Smart - это инновационный, запатентованный компанией SMART инструмент,
              позволяющий за считанные минуты удалить грубую кожу с пяток, без применения кератоликов.
              Основа диск отлично поддаётся дезинфекции, а сменные файлы являются одноразовыми (один на клиента)`,
            imgSrc: 'https://smart-pilka.ru/image/cache/catalog/fullsizerender25-600x400.jpg'
          },
          { title: 'ОБУРУДОВАНИЕ',
            link: '/products#equipment',
            description: 'Аппараты, лампы и пылесосы для маникюра и педикюра',
            imgSrc: 'https://smart-pilka.ru/image/cache/catalog/img_6436-600x400.jpg'
          }
        ]
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .h-100 {
    height: 100%;
  }
  .banner {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    .v-card__text {
      flex-direction: column;
      justify-content: center;
      & > * {
        flex-grow: 0 !important;
      }
    }
    h1 {
      font-size: 2rem;
      font-weight: 100;
    }
    .v-btn {
      width: 120px;
    }

    .banner-image {
      padding: 1.5rem;

      .v-image {
        width: 350px;
      }
    }
  }
  .fab-animation {
    animation: rotate 2s ease-in 1s infinite normal forwards;

    &:before {
      position: absolute;
      width: 56px;
      height: 56px;
      background-color: #C2185B;
      animation: zoom-out 3s linear 0s infinite normal;
    }
  }

  $animation-rotate-scale = 15deg;
  @keyframes rotate {
    5%{
      transform: rotate(0deg);
    }
    10%{
      transform: rotate($animation-rotate-scale);
    }
    15%{
      transform: rotate(0deg);
    }
    20%{
      transform: rotate($animation-rotate-scale);
    }
    25%{
      transform: rotate(0deg);
    }
  }

  $animation-zoomout-scale = 1.5;
  @keyframes zoom-out {
    0%{
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
    72%{
      -webkit-transform: scale($animation-zoomout-scale);
      transform: scale($animation-zoomout-scale);
      opacity: 0;
    }
    100%{
      -webkit-transform: scale($animation-zoomout-scale);
      transform: scale($animation-zoomout-scale);
      opacity: 0;
    }
  }

  @media screen and (max-width: 960px) {
    .banner {
      display: flex;
      flex-direction: column-reverse;
      justify-content: flex-end;

      h1 {
        font-size: 1.5rem;
      }

      .banner-image {
        padding: 0;

        .v-image {
          width: 100%;
        }
      }
    }

  }
</style>
