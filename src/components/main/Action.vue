<script >

export default {
}
</script>

<template>
    <section class="box">
        <ul>
            <li class="card">
                <div class="icon">
                    <font-awesome-icon icon="fa-solid fa-user-group" />
                </div>
                <h3>Human capital</h3>
                <p>
                    Humanizing business : Harness the power of technology to improve the way people work.
                </p>
            </li>
            <li class="card">
                <div class="icon">
                    <font-awesome-icon icon="fa-solid fa-chart-pie" />
                </div>
                <h3>Core Business</h3>
                <p>
                    It takes innovative approaches to transform, modernize, and run existing platforms.
                </p>
            </li>
            <li class="card">
                <div class="icon">
                    <font-awesome-icon icon="fa-solid fa-gauge" />
                </div>
                <h3>Performance</h3>
                <p>
                    Achieving maximum impact an value from investments in finance and supply chain.
                </p>
            </li>
        </ul>
    </section>
</template>

<style scoped lang="scss">
@use '../../assets/scss/_partials/variables.scss' as *;

.box {
    padding: 100px 0;

    .card {
        background-color: #fff;
    }

    ul {
        display: flex;
        flex-wrap: wrap;

        .icon {
            height: 50px;
            width: 50px;
            border-radius: 50%;
            font-size: 25px;
            text-align: center;
            line-height: 50px;
            color: $primary-color;
            background-color: #daeced;
        }

        p {
            color: $secondary-font-color;
            margin-bottom: 20px;
        }
    }
}
</style>