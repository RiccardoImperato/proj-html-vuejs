<script >
import { store } from '../../store';


export default {

    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <section class="container">
        <div class="box">
            <h4 class="small-title">Our business areas</h4>
            <h2>Exellence in <span>Services</span></h2>
            <div class="info">
                <p>
                    We are leaders in providing consultancy services whit a set of cutting-edge technologies and a team of
                    experienced and renowned professionals. These are some options that you can hire.
                </p>
                <button class="btn btn-secondary">See all</button>
            </div>
            <ul>
                <li class="card">
                    <span><font-awesome-icon icon="fa-solid fa-network-wired" /></span>
                    <h3>Audit & Assurance</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <button class="btn btn-secondary">Read more</button>
                </li>
                <li class="card">
                    <span><font-awesome-icon icon="fa-solid fa-briefcase" /></span>
                    <h3>Finicial Advisory</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <button class="btn btn-secondary">Read more</button>
                </li>
                <li class="card">
                    <span><font-awesome-icon icon="fa-solid fa-chart-simple" /></span>
                    <h3>Analytics and M&A</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <button class="btn btn-secondary">Read more</button>
                </li>
                <li class="card">
                    <span><font-awesome-icon icon="fa-solid fa-plane" /></span>
                    <h3>Middle Marketing</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <button class="btn btn-secondary">Read more</button>
                </li>
                <li class="card">
                    <span><font-awesome-icon icon="fa-solid fa-earth-europe" /></span>
                    <h3>Legal Consoulting</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <button class="btn btn-secondary">Read more</button>
                </li>
                <li class="card">
                    <span><font-awesome-icon icon="fa-solid fa-inbox" /></span>
                    <h3>Regulatory Risk</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <button class="btn btn-secondary">Read more</button>
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../../assets/scss/_partials/variables.scss' as *;

.container {
    color: #fff;
    background-color: $secondary-bg;

    .box {
        padding: 130px 0;

        h2 {
            margin: 30px 0;

            span {
                padding: 0 10px;
                background-color: $title-bg-color;
            }
        }

        .info {
            display: flex;
            align-items: center;

            p {
                color: $primary-font-color;
            }

            button {
                flex-shrink: 0;
            }
        }

        ul {
            margin-top: 40px;
            flex-wrap: wrap;
            gap: 20px;

            .card {
                background-color: #19191f;

                &:hover span {
                    color: #fff;
                }

                span {
                    font-size: 25px;
                    color: $primary-color;
                }

                h3 {
                    color: #fff;
                }

                p {
                    color: $primary-font-color;
                    margin-bottom: 30px;
                }
            }
        }

    }
}
</style>