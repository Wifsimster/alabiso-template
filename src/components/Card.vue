<template>
<div class="card">
    <div class="card-image" @click="toggle">
        <slot name="image"></slot>
    </div>
    <div class="card-content">
        <div class="card-title" @click="toggle">
            <slot name="title"></slot>
            <a><i class="material-icons">more_vert</i></a></div>
        <div class="card-description">            
            <slot name="description"></slot>
    </div>
    </div>
    <transition name="reveal">
        <div class="card-reveal" v-show="reveal">
            <div class="card-title" @click="toggle">
                <slot name="reveal-title"></slot>
                <a><i class="material-icons">close</i></a></div>
            <div class="card-description">
                <slot name="reveal-description"></slot>
    </div>
    </div>
    </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                reveal: false,
            }
        },
        methods: {
            toggle() {
                this.reveal = !this.reveal
            },
        },
    }
</script>

<style lang="sass" scoped>
@import '../sass/components/card'
</style>