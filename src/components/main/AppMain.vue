<script >
import { store } from '../../store';
import Action from './Action.vue';
import Company from './Company.vue';
import Services from './Services.vue';
import Prices from './Prices.vue';
import News from './News.vue';
import Newsletter from './Newsletter.vue';
import Message from './Message.vue';

export default {
    components: {
        Action,
        Company,
        Services,
        Prices,
        News,
        Newsletter,
        Message
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
        <News />
        <Newsletter />
        <Message />
    </main>
</template>

<style scoped lang="scss">
@use '../../assets/scss/_partials/variables.scss' as *;

main {
    background-color: $primary-bg;
}
</style>