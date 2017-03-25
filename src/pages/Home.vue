<template>
  <v-ons-page>
    <p style="text-align: center">
      <div>(page)</div>
      <v-ons-button modifier="large" @click="alertClick">Alert Click</v-ons-button>
      <v-ons-button modifier="cta" @click="toPage('reserve')">Goto Reserve</v-ons-button>
    </p>
    <p>
      <div class="money">{{ someVal | currency }} (filter)</div>
      <input class="input" type="text" v-model="someVal" placeholder="Just number (directive)" v-regex-input>
    </p>
  </v-ons-page>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        someVal: null
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
  .input
    border: 1px solid #ddd
    font-size: 1.5rem
    line-height: 2rem
    margin: 3px
    padding: 2px 5px
  .money
    color: green
</style>
