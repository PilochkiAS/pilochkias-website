<template>
  <v-layout column class="grey--bg" fill-height>
    <v-parallax class=""
        src="https://images.pexels.com/photos/164005/pexels-photo-164005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
      <v-layout class="parallax-content" fill-height justify-center align-center>
        <h1 class="display-2">Контакты</h1>
      </v-layout>
    </v-parallax>

    <section7 />

    <section8 />
  </v-layout>
</template>
<script>
  import section7 from '~/components/sections/section7.vue'
  import section8 from '~/components/sections/section8.vue'

  export default {
    data: () => ({

    }),
    methods: {
    },
    mounted () {
    },
    components: {
      section7,
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
