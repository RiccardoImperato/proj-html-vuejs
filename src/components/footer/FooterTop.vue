<script >
import { store } from '../../store';

export default {
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section class="container">
        <div class="box">
            <div class="info">
                <img src="../../assets/img/logo_48.png" alt="Logo">
                <p>
                    A Function HTML Template for Corporate and Business.
                </p>
                <ul>
                    <li>
                        <div class="icon">
                            <font-awesome-icon icon="fa-solid fa-phone" />
                        </div>
                        <span>{{ store.contatcs.tel }}</span>
                    </li>
                    <li>
                        <div class="icon">
                            <font-awesome-icon icon="fa-solid fa-envelope" />
                        </div>
                        <span>{{ store.contatcs.email }}</span>
                    </li>
                    <li>
                        <div class="icon">
                            <font-awesome-icon icon="fa-solid fa-location-dot" />
                        </div>
                        <span>{{ store.contatcs.address }}</span>
                    </li>
                </ul>
                <button class="btn btn-secondary">View map</button>
            </div>
            <div class="feat">
                <ul>
                    <li class="card">
                        <h3>About</h3>
                        <ul>
                            <li v-for="element in store.about">
                                <font-awesome-icon icon="fa-solid fa-chevron-right" />
                                <a href="#">{{ element.name }}</a>
                            </li>
                        </ul>
                    </li>
                    <li class="card">
                        <h3>Services</h3>
                        <ul>
                            <li v-for="element in store.about">
                                <font-awesome-icon icon="fa-solid fa-chevron-right" />
                                <a href="#">{{ element.name }}</a>
                            </li>
                        </ul>
                    </li>
                    <li class="card">
                        <h3>Support</h3>
                        <ul>
                            <li v-for="element in store.about">
                                <font-awesome-icon icon="fa-solid fa-chevron-right" />
                                <a href="#">{{ element.name }}</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../../assets/scss/_partials/variables.scss' as *;

.box {
    display: flex;
    color: $primary-font-color;
    padding: 130px 0;

    .info {
        width: 20%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding-right: 40px;

        img {
            height: 50px;
            width: 50px;
        }

        ul {
            flex-direction: column;

            li {

                .icon {
                    display: inline-block;
                    margin-right: 10px;
                    font-size: 20px;
                    text-align: center;
                    line-height: 40px;
                }
            }
        }

        button {
            width: 100px;
            margin-top: auto;
            text-align: center;
        }
    }

    .feat {
        width: 80%;

        .card {
            color: $primary-font-color;
            background-color: #19191f;

            h3 {
                font-size: 24px;
                margin-bottom: 30px;
            }

            ul {
                display: block;

                li {
                    margin: 10px 0;

                    a {
                        margin-left: 10px;
                    }
                }
            }
        }
    }
}
</style>