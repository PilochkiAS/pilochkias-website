<template >
  <v-layout>
    <v-carousel light class="carousel">
      <v-carousel-item
              v-for="banner in banners"
              :key="banner.title"
              :src="banner.imgSrc"
      >
        <v-layout fill-height align-center class="bg-darken">
          <v-flex xs8 offset-xs2 offset-sm2>
            <div>
              <h2 class="display-2 white--text">{{ banner.title }}</h2>
              <span class="headline white--text font-weight-thin">{{ banner.description }}</span>
            </div>
            <v-btn color="accent" nuxt :to="banner.link" class="mx-0">Подробнее</v-btn>
          </v-flex>
        </v-layout>
      </v-carousel-item>
    </v-carousel>
  </v-layout>
</template>
<script>
  export default {
    data () {
      return {
        banners: [
          { title: 'ПИЛКИ И ФАЙЛЫ',
            description: 'Всех размеров для маникюра и педикюра',
            link: '/products#saw-files',
            imgSrc: 'https://pilochki.com/files/12pzjm0qsiozn8kbg9xw/slider_original.jpg'
          },
          { title: 'ДИСК SMART',
            link: '/products#smart-disks',
            description: `Диск Smart - это инновационный, запатентованный компанией SMART инструмент`,
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
  @media screen and (max-width: 960px) {
    .display-2 {
      font-size: 2.2rem !important;
    }
    .headline {
      font-size: 1.5rem !important;
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
      color: #26C6DA !important;
    }
  }
</style>
