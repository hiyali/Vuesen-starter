<template>
  <div class="some">
    haha
    {{ pages }}
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'login',
    data () {
      return {
        pages: [
          { name: 'reserve', text: 'Reserve Page' },
          { name: 'order', text: 'My orders' }
        ]
      }
    },
    computed: {
      ...mapState('app', {
        splitterOpen: 'splitterOpen'
      })
    },
    methods: {
      sideItemClick (page) {
        this.$router.push({ name: page })
        this.setSplitterOpen(false)
      },
      ...mapMutations('app', {
        setSplitterOpen: 'setSplitterOpen'
      })
    }
  }
</script>

<style lang="stylus" scoped>

  @import '../assets/style/mixin'

</style>
