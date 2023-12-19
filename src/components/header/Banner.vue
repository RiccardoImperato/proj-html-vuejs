<script >

export default {

}
</script>

<template>
    <div class="container">
        <div class="banner box">
            <div>
                <font-awesome-icon icon="fa-solid fa-clock" /> Open Hours: Mon - Sat - 9:00 - 18:00
            </div>
            <ul>
                <li>
                    <font-awesome-icon icon="fa-solid fa-phone" /> +1 (305) 1234-5678
                </li>
                <li>
                    <font-awesome-icon icon="fa-solid fa-envelope" /> hello@example.com
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
    color: $font-color;
    background-color: #24333d;

    .banner {
        padding: 15px 0;
        display: flex;
        justify-content: space-between;

        ul {
            list-style-type: none;
            display: flex;
            align-items: center;
            gap: 30px;
        }
    }
}
</style>