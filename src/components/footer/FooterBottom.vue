<script >
import { store } from '../../store';

export default {
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="banner box">
            <div>
                Enjoy the low price. We are tracking any intention of piracy
            </div>
            <div>
                <font-awesome-icon icon="fa-regular fa-copyright" /> 2020 NEXGEN is Proudly Powered by <span>Codings</span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/_partials/variables.scss' as *;

.container {
    color: $primary-font-color;
    background-color: #0d0d11;

    .banner {
        font-size: 13px;
        padding: 15px 0;
        display: flex;
        justify-content: space-between;

        span {
            color: $primary-color;
        }
    }
}

/* Media queries */

@media screen and (max-width:1180px) {

    .banner.box {
        padding: 15px 20px;
    }

}

/* Media queries */
</style>