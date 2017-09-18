<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img v-lazy="kohinoor">
                <span class="title">Koh I Noor</span>
            </div>
            <div class="swiper-slide">
                <img v-lazy="terraVerde">
                <span class="title">Le Terra Verde</span>
            </div>
            <div class="swiper-slide">
                <img v-lazy="redline">
                <span class="title">Le Red Line</span>
            </div>
        </div>
        <!--        <div class="swiper-pagination"></div>-->
        <!-- <div class="swiper-button-prev"></div> -->
        <!-- <div class="swiper-button-next"></div> -->
        <!--        <div class="swiper-scrollbar"></div>-->
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min.js'
import kohinoor from '../assets/kohinoor.jpg'
import terraVerde from '../assets/terra_verde.jpg'
import redline from '../assets/redline.jpg'
export default {
    name: 'Slider',
    data() {
        return {
            swiper: null,
            kohinoor: kohinoor,
            terraVerde: terraVerde,
            redline: redline,
        }
    },
    created() {
        this.$nextTick(() => {
            this.swiper = new Swiper('.swiper-container', {
                direction: 'horizontal',
                autoplay: 3000,
                loop: true,
                // speed: 300,
                // spaceBetween: 0,
                // watchSlidesProgress: true,
                // nextButton: '.swiper-button-next',
                // prevButton: '.swiper-button-prev',
                // pagination: '.swiper-pagination',
                // scrollbar: '.swiper-scrollbar',
            })
        })
    },
}
</script>

<style lang="scss" scoped>
@import '../sass/components/slider'
</style>