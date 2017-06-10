<template>
<div class="app">
    <img :src="logo">
    <router-view></router-view>
    </div>
</template>

<script>
    import logo from '../assets/logo.jpg'
    export default {
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