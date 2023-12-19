<script >
import { store } from '../../store';

export default {
    data() {
        return {
            store,
        }
    }

}
</script>

<template>
    <div class="box">
        <div class="logo">
            <img src="https://nextindustry.net/wp-content/uploads/2018/01/Logo_TV_2015.png" alt="Logo">
        </div>
        <ul>
            <li v-for="option in store.options">
                {{ option.name }}
            </li>
            <li>
                <button class="btn-primary">get in touch</button>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.box {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
        height: 70px;
        width: 70px;
    }

    img {
        width: 100%;
        display: block;
    }

    ul {
        display: flex;
        align-items: center;
        gap: 35px;

        li {
            color: #f5f5f5;
            text-transform: uppercase;
        }
    }
}
</style>