import Vue from 'vue'
import App from './views/App.vue'
import router from './router'
import VueMoment from 'vue-moment'

Vue.use(VueMoment)

new Vue({
    el: "#app",
    router,
    render: h => h(App)
})