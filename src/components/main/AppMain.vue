<script >
import { store } from '../../store';
import Action from './Action.vue';

export default {
    components: {
        Action
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
    </main>
</template>

<style scoped lang="scss">
@use '../../assets/scss/_partials/variables.scss' as *;

main {
    background-color: $primary-bg;
}
</style>