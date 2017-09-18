<template>
    <div class="header">
        <router-link to="/" exact>
            <img v-lazy="logo" class="logo pure-img">
        </router-link>
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

<style lang="scss">
@import '../sass/components/header'
</style>