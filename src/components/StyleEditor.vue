<template>
  <div ref="container" class="styleEditor"  v-show="!onlyShowMarkdown">
      <div v-html="codeInStyleTag"></div>
      <pre v-html="highlightedCode"></pre>
  </div>
</template>

<script>
import Prism from "prismjs"

export default {
    name: 'Editor',
    props: ['code', 'onlyShowMarkdown'],
    computed: {
        codeInStyleTag(){
            return `<style>${this.code}</style>`
        },
        highlightedCode(){
            return Prism.highlight(this.code, Prism.languages.css)
        }
    },
    methods: {
      goBottom() {
        this.$refs.container.scrollTop = 100000
      }
    }
}
</script>

<style>
/* .hideStyleEditor{
    display: none;
} */
</style>