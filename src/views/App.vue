<template>
<div class="app">
    <img :src="logo" class="logo">
    <tabs></tabs>
    <router-view></router-view>
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
</style>