<template>
<div class="map" id="map"></div>

<!-- AIzaSyBMJguOJhxaNLbsLAwB57fhWHKaIKR-KW4 -->

<!--43.6171734,3.822794,17z-->

</template>

<script>
    export default {
        created() {
            this.$nextTick(() => {
                new GMaps({
                    div: '#map',
                    lat: -12.043333,
                    lng: -77.028333
                });
            })
        },
    }
</script>

<style lang="sass" scoped>
@import '../sass/components/map.scss'
</style>