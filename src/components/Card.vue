<template>
<div class="card">
    <div class="card-image"><img v-lazy="kohinoor"></div>
    <div class="card-content">
        <div class="card-title">Koh I Noor 
        <a @click="reveal = true">x</a></div>
        <div class="card-description">
            <p>49 Logements à Port Marianne, Rive Gauche à Montpellier.<br><strong>1er Prix Pyramide d'Argent</strong></p>
    </div>
    </div>
    <div class="card-reveal" v-show="reveal">
        <div class="card-title">Reveal - Koh I Noor</div>
        <div class="card-description">
            <p>49 Logements à Port Marianne, Rive Gauche à Montpellier.<br><strong>1er Prix Pyramide d'Argent</strong></p>
    </div>
    </div>
    </div>
</template>

<script>
    import kohinoor from '../assets/kohinoor.jpg'
    export default {
        data() {
            return {
                kohinoor: kohinoor,
                reveal: false,
            }
        },
    }
</script>

<style lang="sass" scoped>
@import '../sass/components/card'
</style>