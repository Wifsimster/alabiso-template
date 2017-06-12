<template>
<div class="app">
    <div class="content">
        <img v-lazy="logo" class="logo pure-img">
        <tabs></tabs>
        <router-view></router-view>
    </div>
    </div>
</template>

<script>
    import logo from '../assets/logo.jpg'
    import Tabs from '../components/Tabs.vue'
    export default {
        components: { Tabs },
        data() {
            return {
                logo: logo,
            }
        }
    }
</script>

<style lang="sass">
@import '../sass/global';
@import '../sass/components/card';
</style>