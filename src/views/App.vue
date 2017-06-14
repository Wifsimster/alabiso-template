<template>
<div class="app">
    <div class="wrapper">        
        <img v-lazy="logo" class="logo pure-img">
        <tabs></tabs>
        <div class="content">
            <router-view></router-view>
    </div>
    </div>
    <com-footer></com-footer>
    </div>
</template>

<script>
    import logo from '../assets/logo.jpg'
    import Tabs from '../components/Tabs.vue'
    import ComFooter from '../components/Footer.vue'
    export default {
        components: { Tabs, ComFooter },
        data() {
            return {
                logo: logo,
            }
        }
    }
</script>

<style lang="sass">
@import '../sass/global'
</style>