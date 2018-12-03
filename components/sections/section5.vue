<template>
  <v-container grid-list-md class="pt-5">
    <h4 class="display-1">Отзывы</h4>

    <v-carousel light class="carousel-reviews-section-5 show-overflow" height="350">
        <v-carousel-item
                v-for="(review, index) in sortedReviews"
                :key="index"
        >

          <v-layout justify-center fill-height>
            <v-item-group>
              <v-container grid-list-md class="pt-5">
                <v-layout wrap>
                  <v-flex
                          v-for="item in review"
                          :key="item.message"
                          xs12
                          md4
                          class=""
                  >
                    <v-item>
                      <v-card
                              slot-scope="{ active, toggle }"
                              :color="active ? 'primary' : ''"
                              class=""
                              height="230"
                              @click="toggle"
                      >
                        <v-card-title class="px-3 py-2 d-flex">
                          <h5 class="headline" v-text="item.name"></h5>
                          <v-spacer></v-spacer>
                          <p class="ma-0 grey--text" v-text="item.date" style="flex-basis: 0% !important;"></p>
                        </v-card-title>

                        <v-responsive>
                          <v-layout column fill-height class="ma-0 px-3 py-0">
                            <v-flex class="text-xs-left py-0">
                              <v-rating
                                      small
                                      readonly
                                      v-model="item.rating"
                                      color="accent"
                                      class="reviews-rating-section-5"
                              ></v-rating>
                            </v-flex>
                            <v-flex xs10 class="text-xs-left">
                              <p class="ma-0" v-text="item.message"></p>
                            </v-flex>
                          </v-layout>
                        </v-responsive>
                      </v-card>
                    </v-item>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-item-group>
          </v-layout>
        </v-carousel-item>
      </v-carousel>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        reviews: [
          {
            name: 'Анастасия',
            date: '22.05.2018',
            message: 'заказываю уже второй раз, все на высшем уровне',
            rating: 5
          },
          {
            name: 'Вероника',
            date: '22.05.2018',
            message: 'Полностью перешла на Ваши сменные файлики. Они не крошатся, отлично фиксируются на основе. Работать с таким инструментом приятно и комфортно.',
            rating: 5
          },
          {
            name: 'Лора',
            date: '22.05.2018',
            message: 'Благодарю за высокий сервис и хороший ассортимент. Пользуюсь пилками с удовольствием. Основа упругая, тонкая, что позволяет пилить в самых неудобных местах.',
            rating: 5
          },
          {
            name: 'Алина',
            date: '22.05.2018',
            message: 'Раз попробовала и решила полностью отказаться от других пилочек. Обрабатывает ноготь отлично, бережно спиливает пластину. Качество файлов великолепное.',
            rating: 5
          },
          {
            name: 'Анастасия',
            date: '22.05.2018',
            message: 'заказываю уже второй раз, все на высшем уровне',
            rating: 5
          },
          {
            name: 'Вероника',
            date: '22.05.2018',
            message: 'Полностью перешла на Ваши сменные файлики. Они не крошатся, отлично фиксируются на основе. Работать с таким инструментом приятно и комфортно.',
            rating: 5
          },
          {
            name: 'Лора',
            date: '22.05.2018',
            message: 'Благодарю за высокий сервис и хороший ассортимент. Пользуюсь пилками с удовольствием. Основа упругая, тонкая, что позволяет пилить в самых неудобных местах.',
            rating: 5
          },
          {
            name: 'Алина',
            date: '22.05.2018',
            message: 'Раз попробовала и решила полностью отказаться от других пилочек. Обрабатывает ноготь отлично, бережно спиливает пластину. Качество файлов великолепное.',
            rating: 5
          },
          {
            name: 'Анастасия',
            date: '22.05.2018',
            message: 'заказываю уже второй раз, все на высшем уровне',
            rating: 5
          },
          {
            name: 'Вероника',
            date: '22.05.2018',
            message: 'Полностью перешла на Ваши сменные файлики. Они не крошатся, отлично фиксируются на основе. Работать с таким инструментом приятно и комфортно.',
            rating: 5
          },
          {
            name: 'Лора',
            date: '22.05.2018',
            message: 'Благодарю за высокий сервис и хороший ассортимент. Пользуюсь пилками с удовольствием. Основа упругая, тонкая, что позволяет пилить в самых неудобных местах.',
            rating: 5
          },
          {
            name: 'Алина',
            date: '22.05.2018',
            message: 'Раз попробовала и решила полностью отказаться от других пилочек. Обрабатывает ноготь отлично, бережно спиливает пластину. Качество файлов великолепное.',
            rating: 5
          }
        ]
      }
    },
    props: [],
    computed: {
      sortedReviews () {
        const sortedReviews = []
        let tempReviews = []

        this.reviews.forEach(review => {
          if (tempReviews.length < 2) {
            tempReviews.push(review)
          } else if (tempReviews.length === 2) {
            tempReviews.push(review)
            sortedReviews.push(tempReviews)
            tempReviews = []
          }
        })

        return sortedReviews
      }
    },
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
  @media screen and (max-width: 960px) {
  }
</style>
<style lang="stylus">
  .reviews-rating-section-5 {
    .v-icon {
      padding: 2px;
    }
  }
  .carousel-reviews-section-5 {
    .v-carousel__controls {
      background: none;
    }
    .v-btn--active:before, .v-btn:hover:before, .v-btn:focus:before {
      background: none;
    }
    .v-btn--active i{
      color: #26C6DA !important;
    }
    .v-carousel__next {
      right: -2rem;
    }
    .v-carousel__prev {
      left: -2rem;
    }
  }

  @media screen and (max-width: 960px) {
  }
</style>
