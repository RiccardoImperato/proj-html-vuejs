<script >

export default {

}
</script>

<template>
    <div class="container">
        <div class="banner box">
            <div>
                i - Open Hours: Mon - Sat - 9:00 - 18:00
            </div>
            <ul>
                <li>tel</li>
                <li>e-mail</li>
                <li>
                    <ul class="socials">
                        <li>i</li>
                        <li>i</li>
                        <li>i</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container {
    color: #fff;
    background-color: #24333d;

    .banner {
        padding: 20px 0;
        display: flex;
        justify-content: space-between;

        ul {
            list-style-type: none;
            display: flex;
            gap: 35px;
        }
    }
}
</style>