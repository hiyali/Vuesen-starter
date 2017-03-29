<template>
  <v-ons-splitter>
    <v-ons-splitter-side
      swipeable width="100%" collapse="" side="left"
      :open="splitterOpen"
      @update="setSplitterOpen($event)"
      >
      <v-ons-page>
        <v-ons-list>
          <v-ons-list-item v-for="page in pages"
            tappable :modifier="$route.name === page.name ? 'chevron' : ''"
            key="page"
            @click="sideItemClick(page.name)"
            >
            <div class="center">{{ page.text }}</div>
          </v-ons-list-item>
        </v-ons-list>
      </v-ons-page>
    </v-ons-splitter-side>

    <v-ons-splitter-content>
      <component :is="$route.name"></component>
    </v-ons-splitter-content>
  </v-ons-splitter>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import reserve from './reserve'
  import order from './order'

  export default {
    name: 'siplitter',
    data () {
      return {
        pages: [
          { name: 'reserve', text: 'Reserve Page' },
          { name: 'order', text: 'My orders' }
        ]
      }
    },
    components: {
      reserve,
      order
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
