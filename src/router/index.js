import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../views/Home.vue'
import Engineering from '../views/Engineering.vue'
import References from '../views/References.vue'
import Teams from '../views/Teams.vue'
import Contact from '../views/Contact.vue'

export default new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        { path: '/', component: Home },
        { path: '/engineering', component: Engineering },
        { path: '/references', component: References },
        { path: '/teams', component: Teams },
        { path: '/contact', component: Contact },
    ]
})