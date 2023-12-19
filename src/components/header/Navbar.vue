<script >

export default {

}
</script>

<template>
    <div class="box">
        <div>
            logo
        </div>
        <ul>
            <li>
                menu
            </li>
            <li>
                menu
            </li>
            <li>
                menu
            </li>
            <li>
                menu
            </li>
            <li>
                menu
            </li>
            <li>
                <button class="btn-primary">get in touch</button>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.box {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
        list-style-type: none;
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