<template>
<div>
    <gmap-map :center="center"
              :zoom="7"
              style="width: 500px; height: 300px">
    </gmap-map>
    </div>
</template>

<script>

    //    load({key: 'AIzaSyBMJguOJhxaNLbsLAwB57fhWHKaIKR-KW4', v: '3.26'})
    //    43.6171734,3.822794,17z

    export default {
        data () {
            return {
                center: { lat: 48.8538302, lng: 2.2982161 },
            }
        }
    }
</script>

<style lang="sass" scoped>
@import '../sass/components/map.scss'
</style>