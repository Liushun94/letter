<template>
  <div id="app">
    <StyleEditor ref="styleEditor" :code="currentStyle" :onlyShowMarkdown="onlyShowMarkdown"></StyleEditor>
    <MarkedEditor ref="markedEditor" :markdown="currentMarkdown" :enableHtml="enableHtml" :onlyShowStyle="onlyShowStyle"></MarkedEditor>
  </div>
</template>

<script>
import "./assets/css/reset.css"
import StyleEditor from "./components/StyleEditor"
import MarkedEditor from "./components/MarkedEditor"
import fullStyle from "./assets/js/fullStyle"
import fullMarkdown from "./assets/js/fullMarkdown"

export default {
  name: "app",
  components: {
    StyleEditor,
    MarkedEditor
  },
  data(){
    return {
      currentStyle: '',
      enableHtml: false,
      fullStyle,
      currentMarkdown: '',
      fullMarkdown,
      onlyShowMarkdown: false,
      onlyShowStyle: false
    }
  },
  created(){
    this.makeResume()
  },
  methods: {
    async makeResume(){
      await this.progressivelyShowStyle(0)
      await this.progressivelyShowMarkdown()
      await this.progressivelyShowStyle(1)
      await this.showHtml()
      await this.progressivelyShowStyle(2)
    },
    progressivelyShowStyle(n){
      return new Promise((res) => {
        let showStyle = (async function(){
          let style = this.fullStyle[n]
          if(!style) {return}
          let length = this.fullStyle.filter((_,i) => i<=n).map(item => item.length).reduce((p,c) => p+c)
          let prefixLength = length - style.length
          if(this.currentStyle.length < length) {
            let l = this.currentStyle.length - prefixLength
            let char = style.substring(l, l + 1) || ' '
            this.currentStyle += char
            if (style.substring(l - 1, l) === '\n' && this.$refs.styleEditor) {
              this.$nextTick(() => {
                this.$refs.styleEditor.goBottom()
              })
            }
            setTimeout(showStyle, 15)
          }else{
            if(n === this.fullStyle.length - 1){
              this.onlyShowMarkdown = true
            }
            res()
          }
        }).bind(this)
        showStyle()
      })
    },
    progressivelyShowMarkdown() {
      return new Promise(res => {
        let length = this.fullMarkdown.length
        let showMarkdown = () => {
          if(this.currentMarkdown.length < length){
            this.currentMarkdown = this.fullMarkdown.substring(0, this.currentMarkdown.length + 1)
            // let lastChar = this.currentMarkdown[this.currentMarkdown.length - 1]
            let prevChart = this.currentMarkdown[this.currentMarkdown.length - 2]
            if(prevChart === '\n' && this.$refs.markedEditor){
              this.$nextTick(() => this.$refs.markedEditor.goBottom())
            }
            setTimeout(showMarkdown, 5)
          } else {
            res()
          }
        }
        showMarkdown()
      })
    },
    showHtml: function () {
        return new Promise((resolve) => {
          this.enableHtml = true
          resolve()
        })
    },
  }
}
</script>

<style></style>
