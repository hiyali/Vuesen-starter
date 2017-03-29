<template>
  <v-ons-page class="text-center">
    <splitter-toolbar title="My orders"></splitter-toolbar>
  </v-ons-page>
</template>

<script>
  import { SplitterToolbar } from '../components'

  export default {
    name: 'order',
    components: {
      SplitterToolbar
    },
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style lang="stylus" scoped>

  @import '../assets/style/mixin'

</style>
