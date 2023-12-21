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
            <img src="../../assets/img/logo_48.png" alt="Logo">
        </div>
        <ul>
            <li v-for="option in store.options">
                <a href="#">{{ option.name }}</a>
            </li>
            <li>
                <button class="btn btn-primary">get in touch</button>
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
        height: 50px;
        width: 50px;
    }

    img {
        width: 100%;
        display: block;
    }

    ul {
        flex-wrap: wrap;
        align-items: center;
        gap: 35px;

        li {
            color: #f5f5f5;
            text-transform: uppercase;
        }
    }
}
</style>