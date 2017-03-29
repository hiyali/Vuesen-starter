<template>
  <v-ons-page>
    <splitter-toolbar title="reserve"></splitter-toolbar>
    <p style="text-align: center">
      <v-ons-button modifier="large" @click="$ons.notification.alert('Hello World!')">Click</v-ons-button>
      <v-ons-button modifier="cta" @click="push">Push</v-ons-button>
      <v-ons-button modifier="danger" @click="back">Back</v-ons-button>
    </p>
  </v-ons-page>
</template>

<script>
  import { SplitterToolbar } from '../../components'
  import Detail from './detail'

  export default {
    name: 'reserve',
    props: ['pageStack'],
    components: {
      SplitterToolbar
    },
    methods: {
      back () {
        this.$router.back()
      },
      push () {
        this.pageStack.push(Detail)
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>
