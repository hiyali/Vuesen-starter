<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">Title</div>
    </v-ons-toolbar>
    <p style="text-align: center">
      <v-ons-button @click="$ons.notification.alert('Hello World!')">Click</v-ons-button>
    </p>
  </v-ons-page>
</template>

<script>
  export default {
    name: 'home'
  }
</script>

<style lang="stylus" scoped>
  v-ons-page
    color: red
</style>
