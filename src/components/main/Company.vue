<script >

export default {
}
</script>

<template>
    <section class="container">
        <div class="left">
            <div class="title">
                <h4 class="small-title">About the company</h4>
                <h2><span>The</span> Company</h2>
                <p>
                    For 12 years we have been providing audit and warranty, financial advice, risk advice, taxes and related
                    services to select client.
                </p>
            </div>
            <div class="values">
                <ul>
                    <li>
                        <span>
                            <font-awesome-icon icon="fa-solid fa-award" />
                        </span>
                        <h3>Tradition</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
                    </li>
                    <li>
                        <span>
                            <font-awesome-icon icon="fa-solid fa-lock" />
                        </span>
                        <h3>Security</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
                    </li>
                    <li>
                        <span>
                            <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                        </span>
                        <h3>Certificate</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
                    </li>
                    <li>
                        <span>
                            <font-awesome-icon icon="fa-solid fa-graduation-cap" />
                        </span>
                        <h3>Expertise</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="right">
            <img src="../../assets/img/about-3.jpg" alt="">
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../../assets/scss/_partials/variables.scss' as *;

.container {
    display: flex;
    background-color: #fff;

    .left {
        width: 50%;
        padding-right: 40px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        .title {
            width: 50%;
            margin-top: 100px;
            margin-bottom: 75px;

            h2 {
                margin: 25px 0;
                color: $card-font-color;

                span {
                    padding: 0 10px;
                    color: $primary-color;
                    background-color: $title-bg-color;
                }
            }

            p {
                color: $secondary-font-color;
            }
        }

        .values {
            width: 50%;

            ul {
                flex-wrap: wrap;

                li {
                    margin-bottom: 50px;
                    width: calc((100% - 40px) / 2);

                    span {
                        font-size: 20px;
                        color: $primary-color;
                    }

                    h3 {
                        color: $card-font-color;
                        margin-bottom: 25px;
                        margin-left: 12px;
                        display: inline-block;
                    }

                    p {
                        color: $secondary-font-color;
                    }
                }
            }
        }
    }

    .right {
        width: 50%;

        img {
            height: 800px;
            width: 100%;
            display: block;
            object-fit: cover;
        }
    }
}

/* Media queries */

@media screen and (max-width:1180px) {

    .container {
        flex-direction: column;
        padding: 0;

        .left,
        .right {
            width: 100%;
        }

        .left {
            align-items: center;
            padding: 0;
        }
    }

}

/* Media queries */
</style>