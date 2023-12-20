<script>
import List from './List.vue';

export default {
    components: {
        List
    }
}
</script>

<template>
    <section>
        <div class="box-small">
            <h4 class="small-title">Monthly plans</h4>
            <h2><span>Pricing</span> Table</h2>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit autem magni ducimus deleniti, dicta
                mollitia ea assumenda culpa inventore nobis distinctio dolores ex earum totam, tenetur dolorum beatae
                repellendus aliquid!
            </p>
        </div>
        <div class="box">
            <ul>
                <li class="card">
                    <div class="title">
                        <span><font-awesome-icon icon="fa-solid fa-rocket" /></span>
                        <h3>Standard</h3>
                        <div class="price">$ <span>490</span>/ mo</div>
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
                        Most Popular
                    </div>
                    <div class="title">
                        <span><font-awesome-icon icon="fa-solid fa-briefcase" /></span>
                        <h3>Professional</h3>
                        <div class="price">$ <span>890</span>/ mo</div>
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
                        <div class="price">$ <span>1.390</span>/ mo</div>
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

section {
    padding: 130px 0;
    background-color: $primary-bg;

    .box-small {

        h2 {
            margin: 35px 0;

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
                width: 70px;
                position: absolute;
                left: 0;
                top: 10px;
                color: #fff;
                padding: 10px 5px;
                font-size: 14px;
                background-color: $primary-color;
                border-top-right-radius: 50%;
                border-bottom-right-radius: 50%;
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
</style>