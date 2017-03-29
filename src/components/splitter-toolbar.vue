<template>
  <v-ons-toolbar>
    <div class="left">
      <v-ons-toolbar-button @click="toggleSplitterOpen">
        <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
      </v-ons-toolbar-button>
    </div>
    <div class="center">{{ title }}</div>
  </v-ons-toolbar>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: 'splitter-toolbar',
    props: ['title'],
    methods: {
      ...mapMutations('app', {
        toggleSplitterOpen: 'toggleSplitterOpen'
      })
    }
  }
</script>

<style lang="stylus" scoped>
</style>
