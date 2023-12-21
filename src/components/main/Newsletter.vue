<script>
export default {}
</script>

<template>
    <section class="container">
        <div class="box">
            <div class="left">
                <h4 class="small-title">Newsletter</h4>
                <h2><span>Know</span> First</h2>
                <p>
                    Follow closely and receive content about our company and the news of the current market.
                </p>
            </div>
            <div class="right">
                <input class="input" name="name" type="text" placeholder="Name">
                <input class="input" name="email" type="email" placeholder="Email">
                <button class="btn btn-primary" type="button">Subscribe</button>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../../assets/scss/_partials/variables.scss' as *;

.container {
    background-image: url(../../assets/img/bg-1.jpg);
    background-size: cover;
    background-position: center;

    .box {
        display: flex;
        gap: 50px;
        padding: 130px 100px;

        .left {
            width: 50%;

            h2 {
                color: #fff;
                margin: 30px 0;

                span {
                    padding: 0 10px;
                    background-color: $title-bg-color ;
                }
            }

            p {
                color: $primary-font-color;
            }

        }

        .right {
            width: 50%;
            display: flex;
            flex-direction: column;
            gap: 20px;

            .input {
                background-color: rgba($color: #ffffff, $alpha: 0.6);
            }

            button {
                text-align: center;
                width: 100px;
            }
        }
    }
}
</style>