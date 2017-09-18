<template>
    <div>
        <div id="map"></div>
    </div>
</template>

<script>
import L from 'leaflet'
export default {
    created() {
        this.$nextTick(() => {
            let mymap = L.map('map').setView([51.505, -0.09], 13)
        })
    }
}
</script>

<style lang="scss" scoped>
#map {
    height: 450px;
}
</style>