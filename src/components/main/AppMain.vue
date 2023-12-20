<script >
import { store } from '../../store';
import Action from './Action.vue';
import Company from './Company.vue';
import Services from './Services.vue';
import Prices from './Prices.vue';

export default {
    components: {
        Action,
        Company,
        Services,
        Prices
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <main>
        <Action />
        <Company />
        <Services />
        <Prices />
    </main>
</template>

<style scoped lang="scss">
@use '../../assets/scss/_partials/variables.scss' as *;

main {
    background-color: $primary-bg;
}
</style>