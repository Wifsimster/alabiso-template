<template>
<div class="pure-g">
    <div class="pure-u-1">
        <div class="flex-container">
            <div class="item">
                <card>
                    <div slot="image"><img v-lazy="kohinoor"></div>
                    <span slot="title">Koh I Noor</span>
                    <span slot="description">49 Logements à Port Marianne, Rive Gauche à Montpellier. 
                        1er Prix Pyramide d'Argent</span>
                    <span slot="reveal-title">Koh I Noor</span>
                    <span slot="reveal-description">
                        <strong>Maître d'Ouvrage:</strong>
                        <p>Kalelithos - SCI Belle Pierre</p>
                        <strong>Architecte:</strong>
                        <p>Bernard BUHLER ARCHITECTE</p>
                        <strong>Mission:</strong>
                        <p>Chauffage - Ventilation - Plomberie - ECS - Electricité</p>
                        <strong>Montant des travaux:</strong>
                        <p>5M € HT</p>
                        <strong>Année:</strong>
                        <p>En cours</p></span></card>
    </div>
            <div class="item">
                <card>
                    <div slot="image"><img v-lazy="terraVerde"></div>
                    <span slot="title">Le Terra Verde</span>
                    <span slot="description">Bureaux 4000m², Park Eurêka à Montpellier. 
                        Label BREEAM</span>
                    <span slot="reveal-title">Le Red Line</span>
                    <span slot="reveal-description">
                        <strong>Maître d'Ouvrage:</strong>
                        <p>Groupe DENUX – SM SERVICE</p>
                        <strong>Architecte:</strong>
                        <p>Gilles CHRETIEN </p>
                        <strong>Mission:</strong>
                        <p>Chauffage - Climatisation - Ventilation - Plomberie - ECS - Electricité - Commissionning</p>
                        <strong>Montant des travaux:</strong>
                        <p>6.5M € HT</p>
                        <strong>Année:</strong>
                        <p>En cours</p></span></card>
    </div>
            <div class="item">
                <card>
                    <div slot="image"><img v-lazy="redline"></div>
                    <span slot="title">Le Red Line</span>
                    <span slot="description">Bureaux de 2200m² à Castelnau le Lez.</span>
                    <span slot="reveal-title">Le Red Line</span>
                    <span slot="reveal-description">
                        <strong>Maître d'Ouvrage:</strong>
                        <p>Angelotti & SCCV Red Line</p>
                        <strong>Architecte:</strong>
                        <p>Philippe RUBIO Architectes</p>
                        <strong>Mission:</strong>
                        <p>Chauffage - Climatisation - Ventilation - Plomberie - ECS - Electricité</p>
                        <strong>Montant des travaux:</strong>
                        <p>-</p>
                        <strong>Année:</strong>
                        <p>2012</p></span></card>
    </div>
    </div>
    </div>
    </div>
</template>

<script>
    import Card from '../components/Card.vue'
    import kohinoor from '../assets/kohinoor.jpg'
    import terraVerde from '../assets/terra_verde.jpg'
    import redline from '../assets/redline.jpg'
    export default {
        components: { Card },
        data() {
            return {
                kohinoor: kohinoor,
                terraVerde: terraVerde,
                redline: redline,
            }
        }
    }
</script>

<style lang="sass" scoped>
</style>