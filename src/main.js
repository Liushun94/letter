import Vue from "vue"
import App from "./App.vue"
import vueCompositionApi from "@vue/composition-api"

Vue.use(vueCompositionApi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount("#app")
