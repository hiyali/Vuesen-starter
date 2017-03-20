<template>
  <v-ons-page>
    <toolbar>Page 1</toolbar>
    <p style="text-align: center">
      <v-ons-button modifier="large" @click="$ons.notification.alert('Hello World!')">Click</v-ons-button>
      <v-ons-button modifier="cta" @click="push">Push</v-ons-button>
    </p>
  </v-ons-page>
</template>

<script>
  import { Toolbar } from '../directive'
  import Detail from './detail'

  export default {
    name: 'home',
    props: ['pageStack'],
    components: {
      Toolbar
    },
    methods: {
      push () {
        this.pageStack.push(Detail)
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>
