<template>
  <div ref="container" class="markedEditor" v-show="!onlyShowStyle">
      <div v-if="enableHtml" v-html="result"></div>
      <pre v-else>{{ result }}</pre>
  </div>
</template>

<script>
import marked from "marked"
export default {
    props: ['markdown', 'enableHtml', 'onlyShowStyle'],
    name: 'MarkedEditor',
    computed: {
        result: function() {
            return this.enableHtml ? marked(this.markdown) : this.markdown
        }
    },
    methods: {
      goBottom: function () {
        this.$refs.container.scrollTop = 100000
      },
      goTop: function(){
        this.$refs.container.scrollTop = 0
      }
    }
}
</script>

<style>

</style>