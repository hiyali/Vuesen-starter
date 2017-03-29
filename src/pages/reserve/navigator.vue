<template>
  <v-ons-navigator :page-stack="pageStack">
    <component :is="page" v-for="(page, index) in pageStack" :key="index" :page-stack="pageStack"></component>
  </v-ons-navigator>
</template>

<script>
  import Home from './home.vue'

  export default {
    name: 'reserve-navigation',
    props: ['toggleMenu'],
    components: {
      Home
    },
    data () {
      return {
        pageStack: [Home]
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>
