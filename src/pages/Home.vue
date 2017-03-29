<template>
  <v-ons-page class="text-center">
    <div class="title">Vuesen starter</div>

    <div class="footer">
      <v-ons-button @click="toPage('reserve')" class="btn">Loves you</v-ons-button>
      <div class="info">
        <p>By signing up, you agree to our </p>
        <p @click="alertClick"><u>Terms of use</u> and <u>Privacy Policy</u></p>
      </div>
    </div>
  </v-ons-page>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
      }
    },
    methods: {
      toPage (name) {
        this.$router.push({ name })
      },
      alertClick () {
        this.$ons.notification.alert('Hello World!')
      }
    }
  }
</script>

<style lang="stylus" scoped>

  @import '../assets/style/mixin'

  .title
    margin: r(50) 0 0
    font-size: r(50)

  .footer
    position: absolute
    bottom: 0
    right: 0
    left: 0
    .info
      font-size: r(14)
      margin: 0 0 r(50)
    .btn
      font-size: r(20)
      margin: 0 0 r(30)

</style>
