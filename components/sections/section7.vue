<template>
  <v-container class="py-5">
    <v-layout fill-heignt class="py-5">
      <v-flex xs7 class="mr-4 white py-3 px-4">
        <v-form v-model="valid" color="white">
          <v-text-field
              v-model="name"
              :rules="nameRules"
              :counter="true"
              label="Полное имя"
              required
          ></v-text-field>
          <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Электронная почта"
              required
          ></v-text-field>
          <v-text-field
              v-model="phoneNumber"
              :rules="phoneNumberRules"
              prefix="8"
              mask="phone"
              label="Номер телефона"
              required
          ></v-text-field>
          <v-textarea
              label="Сообщение"
              :rules="messageRules"
              :counter="true"
              required
          ></v-textarea>
          <v-btn color="accent">
            Отправить сообщение
          </v-btn>
        </v-form>
      </v-flex>
      <v-flex xs5>
        <v-layout column fill-height>
          <v-flex xs6 class="white py-3 px-4">
            <h5 class="headline font-weight-light">Контактная информация</h5>

            <p class="subheading mb-0">Адресс</p>
            <p>203 Fake St. Mountain View, San Francisco, California, USA</p>

            <p class="subheading mb-0">Телефон</p>
            <a href="tel:380970710071" class="accent--text no-underline">+380970710071</a> <br/>
            <a href="tel:380963447307" class="accent--text no-underline">+380963447307</a>

            <p class="subheading mb-0 mt-3">Email Адресс</p>
            <a href="mailto:youremail@domain.com" class="accent--text no-underline">youremail@domain.com</a>
          </v-flex>
          <v-flex xs6 class="white mt-4 py-3 px-4">
            <h5 class="headline font-weight-light mb-3">График работы</h5>

            <p>ПН - ВС: <b class="accent--text">8:00 - 22:00</b></p>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Имя обязательно',
        v => v.length >= 6 || 'Имя должно быть больше 6 символов'
      ],
      email: '',
      emailRules: [
        v => !!v || 'Электронная почта обязательна',
        v => /.+@.+/.test(v) || 'Электронная почта должна быть валидной'
      ],
      phoneNumber: '',
      phoneNumberRules: [
        v => !!v || 'Номер телефона обязателен',
        v => v.length === 10 || 'Номер телефона должен быть валидным',
        v => v[0] === '0' || 'Номер телефона должен быть валидным'
      ],
      message: '',
      messageRules: [
        v => !!v || 'Сообщение не может быть пустым'
      ]
    }),
    props: [],
    methods: {
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
  .container {
    flex: 1 1 auto;
  }

  @media screen and (max-width: 960px) {
  }
</style>
<style scoped>

  @media screen and (max-width: 960px) {
  }
</style>
