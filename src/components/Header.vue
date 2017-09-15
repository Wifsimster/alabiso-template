<template>
    <div class="header">
        <img v-lazy="logo" class="logo pure-img">
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