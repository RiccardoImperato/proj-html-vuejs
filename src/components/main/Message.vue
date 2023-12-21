<script>
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
            <div class="left">
                <div class="title">
                    <h4 class="small-title">Send a message</h4>
                    <h2>Get in <span>Touch</span></h2>
                    <p>
                        We will respond to your message as soon as possible.
                    </p>
                </div>
                <div class="message">
                    <input class="input" type="text" name="name" placeholder="Name">
                    <input class="input" type="email" name="email" placeholder="Email">
                    <input class="input" type="tel" name="tel" placeholder="Phone">
                    <select name="info">
                        <option>More info</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select>
                    <textarea name="message-text" placeholder="Message"></textarea>
                    <button class="btn btn-primary" type="button">Subscribe</button>
                </div>
            </div>
            <div class="right">
                <h3>Example inc.</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p>
                    Praesent diam lacus, dapibus sed imperdiet consectetur.
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
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../../assets/scss/_partials/variables.scss' as *;

.container {
    background-color: #fff;

    .box {
        display: flex;
        padding: 130px 0;

        .left {
            width: 70%;
            padding-right: 40px;

            .title {
                margin-bottom: 50px;

                h2 {
                    margin: 30px 0;
                    color: $card-font-color;
                }

                span {
                    padding: 0 10px;
                    color: $primary-color;
                    background-color: $title-bg-color ;
                }

                p {
                    color: $secondary-font-color;
                }
            }

            .message {
                display: flex;
                flex-wrap: wrap;
                gap: 20px;

                .input {
                    width: calc((100% / 2) - 30px);
                    height: 50px;
                    padding: 0 10px;
                    border-radius: 5px;
                    background-color: #ececec;
                }

                select {
                    color: #757575;
                    font-size: 16px;
                    width: calc((100% / 2) - 10px);
                    padding: 0 10px;
                    border-radius: 5px;
                    border: 0;
                    background-color: #ececec;
                }

                textarea {
                    all: unset;
                    height: 150px;
                    width: 100%;
                    padding: 10px;
                    border-radius: 5px;
                    background-color: #ececec;
                }
            }
        }

        .right {
            width: 30%;
            display: flex;
            flex-direction: column;
            gap: 30px;
            overflow: hidden;

            h3 {
                font-size: 25px;
                color: $card-font-color;
            }

            p {
                color: $secondary-font-color;
            }

            ul {
                flex-direction: column;

                li {
                    color: $primary-color;

                    .icon {
                        display: inline-block;
                        margin-right: 10px;
                        height: 40px;
                        width: 40px;
                        border-radius: 50%;
                        font-size: 20px;
                        text-align: center;
                        line-height: 40px;
                        color: $primary-color;
                        background-color: #daeced;
                    }
                }
            }

            button {
                color: $primary-color;
                max-width: 80px;
                text-align: center;

                &:hover {
                    color: #fff;
                }
            }
        }
    }
}

/* Media queries */

@media screen and (max-width:768px) {

    .container {
        .box {
            padding: 100px 0;
            flex-direction: column;

            .left {
                width: 100%;
                padding-right: 0;
                margin-bottom: 40px;
            }

            .right {
                width: 100%;
            }
        }
    }
}

/*/ Media queries */
</style>