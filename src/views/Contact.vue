<template>
    <div>
        <div class="card">
            <div class="card-image waves-effect waves-block waves-light">

                <contact-map></contact-map>

                <div class="pure-u-1 address">
                    <p>Bureau d'études Thermique, Génie Climatique, Fluides (BET) <br> 48 rue Maurice Bejart, 34080 Montpellier <br>
                        <a href="mailto:contact@alabiso-ingenierie.fr">contact@alabiso-ingenierie.fr</a><br> 04 67 59 80 76
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ContactMap from '../components/ContactMap.vue'
export default {
    components: {
        ContactMap,
    },
}
</script>

<style lang="scss" scoped>
@import '../sass/views/contact'
</style>
