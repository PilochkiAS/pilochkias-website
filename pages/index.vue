<template>
  <v-layout column justify-center align-center>

    <v-flex xs12 :class="index === 0 ? 'banner':'banner mt-4'" v-for="(banner, index) in banners" :key="index">
      <v-card>
        <v-layout>
          <v-flex xs7 class="pa-5">
            <v-layout column justify-center fill-height>
              <div class="display-3 font-weight-thin">{{ banner.title }}</div>
              <v-divider light class="divider-width primary"/>

              <div class="mt-3">{{ banner.description }}</div>
              <v-btn color="primary" nuxt :to="banner.link" class="ml-0 btn-width">ПОДРОБНЕЕ</v-btn>
            </v-layout>
          </v-flex>
          <v-flex xs5>
            <v-img
                    :src="banner.imgSrc"
                    height="325px"
                    contain
            ></v-img>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>

    <v-bottom-sheet v-model="sheet" full-width>
      <v-btn
              slot="activator"
              color="accent"
              fixed
              dark
              fab
              bottom
              right
              class="fab-animation"
      >
        <v-icon> phone </v-icon>
      </v-btn>

      <v-list>
        <v-subheader>Позвонить</v-subheader>
        <v-list-tile
                v-for="phone in phones"
                :key="phone.title"
                @click="sheet = false"
        >
          <v-list-tile-avatar>
            <v-icon> phone </v-icon>
          </v-list-tile-avatar>
          <v-list-tile-title>
            <a :href="phone.tel">{{ phone.title }}</a>
          </v-list-tile-title>
        </v-list-tile>
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
          { title: '+380960000000', tel: 'tel:380960000000' },
          { title: '+380960000000 (опт)', tel: 'tel:380960000000' }
        ],
        banners: [
          { title: 'ПИЛКИ И ФАЙЛЫ',
            description: 'ВСЕХ РАЗМЕРОВ ДЛЯ МАНИКЮРА И ПЕДИКЮРА',
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
  .h-100{
    height: 100%;
  }
  .banner{
    width: 100%;
  }
  .btn-width{
    width: 120px;
  }
  .divider-width{
    width: 30%;
  }
  .fab-animation{
    animation: rotate 2s ease-in 1s infinite normal forwards;

    &:before{
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
</style>
