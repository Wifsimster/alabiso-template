import Vue from 'vue'
import App from './views/App.vue'
import router from './router'
import VueMoment from 'vue-moment'
import VueLazyload from 'vue-lazyload'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueMoment)
Vue.use(VueLazyload)
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyBMJguOJhxaNLbsLAwB57fhWHKaIKR-KW4',
    }
})

new Vue({
    el: "#app",
    router,
    render: h => h(App)
})