<script >
import { store } from '../../store';
import Banner from './Banner.vue';
import Hero from './Hero.vue'

export default {
    data() {
        return {
            store
        }
    },
    components: {
        Banner,
        Hero
    }
}
</script>

<template>
    <header>
        <Banner />
        <div class="hero">
            <Hero />
        </div>
    </header>
</template>

<style scoped lang="scss">
header {

    .hero {
        background-color: rgba($color: #000000, $alpha: 0.6);
    }

    background-image: url(../../assets/img/hero-image.png);
    background-size: cover;
    background-position: center;
}
</style>