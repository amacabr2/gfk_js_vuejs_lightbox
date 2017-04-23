<template>

    <div id="app">

        <div class="ui tabular menu">
            <div class="item" @click="title='rio'" :class="{active: title == 'rio'}">RIO</div>
            <div class="item" @click="title='futurama'" :class="{active: title == 'futurama'}">FUTURAMA</div>
        </div>

        <br>

        <div class="row">

            <div class="ui grid" v-if="title === 'futurama'">
                <a :href="'http://lorempicsum.com/futurama/800/600/' + n" v-lightbox v-for="n in 9">
                    <div class="four wide column">
                        <img :src="'http://lorempicsum.com/futurama/150/150/' + n" alt="">
                    </div>
                </a>
                <lightbox></lightbox>
            </div>

            <section>
                <div class="ui grid" v-if="title === 'rio'">
                    <a :href="'http://lorempicsum.com/rio/800/600/' + n" v-lightbox v-for="n in 9">
                        <img :src="'http://lorempicsum.com/rio/150/150/' + n" alt="">
                    </a>
                    <lightbox></lightbox>
                </div>
            </section>

        </div>

    </div>

</template>

<script>

    import Lightbox from './components/lightbox/Lightbox.vue'

    export default {

        name: 'app',

        components: {
            Lightbox
        },

        data() {
            return {
                title: 'futurama',
            }
        }

    }

</script>

<style>

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .item {
        cursor: pointer;
    }

</style>
