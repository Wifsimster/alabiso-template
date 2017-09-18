import Vue from "vue"
import App from "./views/App.vue"
import router from "./router"
import VueMoment from "vue-moment"
import VueLazyload from "vue-lazyload"

Vue.use(VueMoment)
Vue.use(VueLazyload)

new Vue({
  el: "#app",
  router,
  render: h => h(App)
})
