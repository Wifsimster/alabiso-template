<template>
    <div class="container">
        <!-- <div class="wrapper"> -->
        <com-header></com-header>
        <tabs></tabs>
        <div class="content">
            <router-view></router-view>
        </div>
        <!-- </div> -->
        <com-footer></com-footer>
    </div>
</template>

<script>
import ComHeader from '../components/Header.vue'
import Tabs from '../components/Tabs.vue'
import ComFooter from '../components/Footer.vue'
export default {
    components: {
        ComHeader,
        Tabs,
        ComFooter
    },
}
</script>

<style lang="scss">
@import '../sass/global'
</style>