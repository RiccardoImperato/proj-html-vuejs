<script >

export default {
}
</script>

<template>
    <section class="container">
        <div class="box">
            <h4 class="small-title">Our editorial content</h4>
            <h2>Latest <span>News</span></h2>
            <div class="info">
                <p>
                    Every week we publish content about what is the best in th business world.
                </p>
                <button class="btn btn-primary">See all</button>
            </div>
            <ul>
                <li class="card">
                    <img src="../../assets/img/news-1.jpg" alt="">
                    <div class="layover">
                        <div class="hover">
                            <div>
                                <font-awesome-icon icon="fa-solid fa-user" /> Andrea Miller
                            </div>
                            <div>
                                <font-awesome-icon icon="fa-solid fa-clock" /> 2 days ago
                            </div>
                        </div>
                        <div class="title">
                            <h3>Increasing creativity is possible for everyone</h3>
                            <p class="hover">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </li>
                <li class="card">
                    <img src="../../assets/img/news-2.jpg" alt="">
                    <div class="layover">
                        <div class="hover">
                            <div>
                                <font-awesome-icon icon="fa-solid fa-user" /> Andrea Miller
                            </div>
                            <div>
                                <font-awesome-icon icon="fa-solid fa-clock" /> 2 days ago
                            </div>
                        </div>
                        <div class="title">
                            <h3>Because the market research is part of the business plan</h3>
                            <p class="hover">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </li>
                <li class="card">
                    <img src="../../assets/img/news-3.jpg" alt="">
                    <div class="layover">
                        <div class="hover">
                            <div>
                                <font-awesome-icon icon="fa-solid fa-user" /> Andrea Miller
                            </div>
                            <div>
                                <font-awesome-icon icon="fa-solid fa-clock" /> 2 days ago
                            </div>
                        </div>
                        <div class="title">
                            <h3>Working from home is now a trend</h3>
                            <p class="hover">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

    </section>
</template>

<style scoped lang="scss">
@use '../../assets/scss/_partials/variables.scss' as *;

.container {
    background-color: #fff;

    .box {
        padding: 130px 0;
    }

    h2 {
        margin: 30px 0;
        color: $card-font-color;

        span {
            padding: 0 10px;
            color: $primary-color;
            background-color: $title-bg-color ;
        }
    }

    .info {
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
            color: $secondary-font-color;
        }

        button {
            flex-shrink: 0;
        }
    }

    ul {
        margin-top: 30px;

        .card {
            padding: 0;
            height: 365px;
            overflow: hidden;
            position: relative;

            img {
                width: 100%;
                display: block;
            }

            &:hover img {
                filter: blur(2px);
            }

            .layover {
                position: absolute;
                top: 0;
                right: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                color: #fff;
                text-align: center;
                padding: 30px;
                background-color: rgba($color: #000000, $alpha: 0.6);

                h3 {
                    margin: 15px 0;
                }

                .hover {
                    margin: 10px 0;
                    display: flex;
                    align-items: center;
                    justify-content: space-evenly;
                    font-size: 14px;
                    opacity: 0;
                    transition: all 0.5s;
                }

                &:hover .hover {
                    opacity: 1;
                }

                .title {
                    margin-top: auto;

                    h3 {
                        font-size: 25px;
                    }
                }

            }
        }
    }

}
</style>