<script>
import List from './List.vue';

export default {
    components: {
        List
    }
}
</script>

<template>
    <section class="container">
        <div class="box-small">
            <h4 class="small-title">Monthly plans</h4>
            <h2><span>Pricing</span> Table</h2>
            <p>
                We can help you deliver and execute your future, whenever you compete, using the lastest technologies, from
                strategy development to implementation.
            </p>
        </div>
        <div class="box">
            <ul>
                <li class="card">
                    <div class="title">
                        <span><font-awesome-icon icon="fa-solid fa-rocket" /></span>
                        <h3>Standard</h3>
                        <div class="price">$ <span>490</span> / mo</div>
                    </div>
                    <div class="feat">
                        <List />
                        <ul class="icon">
                            <li>
                                <font-awesome-icon icon="fa-solid fa-check" />
                            </li>
                            <li>
                                <font-awesome-icon icon="fa-solid fa-check" />
                            </li>
                            <li>
                                <font-awesome-icon icon="fa-solid fa-xmark" />
                            </li>
                            <li>
                                <font-awesome-icon icon="fa-solid fa-xmark" />
                            </li>
                            <li>
                                <font-awesome-icon icon="fa-solid fa-xmark" />
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="card">
                    <div class="pop">
                        <span>Most Popular</span>
                    </div>
                    <div class="title">
                        <span><font-awesome-icon icon="fa-solid fa-briefcase" /></span>
                        <h3>Professional</h3>
                        <div class="price">$ <span>890</span> / mo</div>
                    </div>
                    <div class="feat">
                        <List />
                        <ul class="icon">
                            <li>
                                <font-awesome-icon icon="fa-solid fa-check" />
                            </li>
                            <li>
                                <font-awesome-icon icon="fa-solid fa-check" />
                            </li>
                            <li>
                                <font-awesome-icon icon="fa-solid fa-check" />
                            </li>
                            <li>
                                <font-awesome-icon icon="fa-solid fa-xmark" />
                            </li>
                            <li>
                                <font-awesome-icon icon="fa-solid fa-xmark" />
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="card">
                    <div class="title">
                        <span><font-awesome-icon icon="fa-solid fa-gem" /></span>
                        <h3>Ultimate</h3>
                        <div class="price">$ <span>1.390</span> / mo</div>
                    </div>
                    <div class="feat">
                        <List />
                        <ul class="icon">
                            <li>
                                <font-awesome-icon icon="fa-solid fa-check" />
                            </li>
                            <li>
                                <font-awesome-icon icon="fa-solid fa-check" />
                            </li>
                            <li>
                                <font-awesome-icon icon="fa-solid fa-check" />
                            </li>
                            <li>
                                <font-awesome-icon icon="fa-solid fa-check" />
                            </li>
                            <li>
                                <font-awesome-icon icon="fa-solid fa-check" />
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../../assets/scss/_partials/variables.scss' as *;

.container {
    padding: 100px 0;
    background-color: $primary-bg;

    .box-small {

        h2 {
            margin: 35px 0;
            color: $card-font-color;

            span {
                padding: 0 10px;
                color: $primary-color;
                background-color: $title-bg-color ;
            }
        }

        p {
            margin-bottom: 50px;
            color: $secondary-font-color;
        }
    }

    .box {
        .card {
            background-color: #fff;
            position: relative;

            .pop {
                max-width: 60px;
                position: absolute;
                left: 0;
                top: 10px;
                color: #fff;
                padding: 12px 5px;
                font-size: 13px;
                background-color: $primary-color;
                border-top-right-radius: 50%;
                border-bottom-right-radius: 50%;
            }

            .icon {
                color: $primary-color;
            }

            .title {
                text-align: center;
                margin-bottom: 30px;

                span {
                    font-size: 40px;
                    color: $primary-color;
                }

                h3 {
                    font-size: 30px;
                }
            }

            .price {
                color: $primary-color;

                span {
                    font-size: 40px;
                    font-weight: bold;
                }
            }

            ul {
                display: block;

                li {
                    color: $primary-color;
                    margin: 15px 0;
                }
            }

            .feat {
                display: flex;
                justify-content: space-between;
            }
        }
    }
}

/* Media queries */

@media screen and (max-width:1180px) {

    .pop {
        color: #fff;
        padding: 12px 8px;
        font-size: 14px;
        background-color: $primary-color;

    }
}


@media screen and (max-width:768px) {

    ul {
        flex-direction: column;

        .card {
            width: 100%;
        }
    }
}

/* Media queries */
</style>