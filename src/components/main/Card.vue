<script >
import { store } from '../../store';

export default {
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div>
        <div>
            {{ icon }}
        </div>
        <h3>titolo</h3>
        <p>
            testo
        </p>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/_partials/variables.scss' as *;
</style>