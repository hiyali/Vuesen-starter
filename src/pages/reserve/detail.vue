<template>
  <v-ons-page>
    <toolbar :back-label="'Reserve'">Reserve Detail</toolbar>
    <p style="text-align: center">This is the second page</p>
  </v-ons-page>
</template>

<script>
  import { Toolbar } from '../../components'

  export default {
    name: 'detail',
    components: {
      Toolbar
    }
  }
</script>

<style lang="stylus" scoped>
</style>
