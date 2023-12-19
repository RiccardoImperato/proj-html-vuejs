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
        <Hero />
    </header>
</template>

<style></style>