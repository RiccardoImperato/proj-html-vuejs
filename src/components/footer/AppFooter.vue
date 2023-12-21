<script >
import FooterTop from './FooterTop.vue';
import FooterBottom from './FooterBottom.vue';

export default {
    components: {
        FooterTop,
        FooterBottom
    }
}
</script>

<template>
    <footer>
        <FooterTop />
        <FooterBottom />
    </footer>
</template>

<style scoped lang="scss">
@use '../../assets/scss/_partials/variables.scss' as *;

footer {
    background-color: $secondary-bg;
}
</style>