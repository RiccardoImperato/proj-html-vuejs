<script >
import Navbar from './Navbar.vue';

export default {

    components: {
        Navbar
    }
}
</script>

<template>
    <Navbar />
    <div class="box-small">
        <h1>Lead ~ <span>Customers</span></h1>
        <p>
            Successfull strategies require data analysis, creativity and customer focus, taking advantage of the lastest
            technologies to offer excellent services.
        </p>
        <button class="btn btn-primary">Get in touch</button>
        <button class="btn btn-secondary">Read more</button>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/_partials/variables.scss' as *;

.box-small {
    text-align: center;
    padding-top: 150px;
    padding-bottom: 200px;

    h1 {
        font-weight: 800;
        font-size: 54px;
        color: #fff;

        span {
            padding: 0 10px;
            background-color: $title-bg-color;
        }
    }

    p {
        padding: 40px 0;
        color: $primary-font-color;
    }

    button {
        margin: 0 20px;
    }
}
</style>