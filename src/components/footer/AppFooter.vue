<script >
import FooterTop from './FooterTop.vue';

export default {
    components: {
        FooterTop
    }
}
</script>

<template>
    <footer>
        <FooterTop />
    </footer>
</template>

<style scoped lang="scss">
@use '../../assets/scss/_partials/variables.scss' as *;

footer {
    background-color: $secondary-bg;
}
</style>