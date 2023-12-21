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
                <font-awesome-icon icon="fa-solid fa-clock" /> <span>Open Hours: Mon - Sat - 9:00 - 18:00</span>
            </div>
            <ul>
                <li>
                    <font-awesome-icon icon="fa-solid fa-phone" /> <span>{{ store.contatcs.tel }}</span>
                </li>
                <li>
                    <font-awesome-icon icon="fa-solid fa-envelope" /> <span>{{ store.contatcs.email }}</span>
                </li>
                <li>
                    <ul class="socials">
                        <li>
                            <font-awesome-icon icon="fa-brands fa-facebook" />
                        </li>
                        <li>
                            <font-awesome-icon icon="fa-brands fa-twitter" />
                        </li>
                        <li>
                            <font-awesome-icon icon="fa-brands fa-linkedin" />
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/_partials/variables.scss' as *;

.container {
    color: $primary-font-color;
    background-color: #24333d;

    .banner {
        padding: 15px 0;
        display: flex;
        justify-content: space-between;

        span {
            margin-left: 10px;
        }

        ul {
            flex-wrap: wrap;
            align-items: center;
            gap: 30px;
        }
    }
}

/* Media queries */

@media screen and (max-width:1180px) {

    .banner.box {
        padding: 15px 20px;
    }

}

/*/ Media queries */
</style>