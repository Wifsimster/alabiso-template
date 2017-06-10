<template>
<div>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
    </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-scrollbar"></div>
    </div>
    </div>
</template>

<script>
    import 'swiper/dist/js/swiper.min.js'
    import 'swiper/dist/css/swiper.min.css'
    export default {
        name: 'Slider',
        methods: {},
        created() {
            const mySwiper = new Swiper ('.swiper-container', {
                autoplay: 2000,
                speed: 400,
                spaceBetween: 100,
                watchSlidesProgress: true,
                direction: 'vertical',
                loop: true,
                pagination: '.swiper-pagination',
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                scrollbar: '.swiper-scrollbar',
            })   
            },
    }
</script>

<style lang="sass" scoped>
@import '../sass/slider'
</style>