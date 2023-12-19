<script >

export default {
    data() {
        return {
            options: [
                {
                    "name": "home"
                },
                {
                    "name": "about"
                },
                {
                    "name": "services"
                },
                {
                    "name": "pricing"
                },
                {
                    "name": "blog"
                },
            ]
        }
    }

}
</script>

<template>
    <div class="box">
        <div>
            logo
        </div>
        <ul>
            <li v-for="option in options">
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