<template>
    <div id="app">
        <a href="http://lorempicsum.com/futurama/800/600/1" v-lightbox>
            <img src="http://lorempicsum.com/futurama/150/150/1" alt="">
        </a>
        <lightbox></lightbox>
    </div>
</template>

<script>

    import Lightbox from './components/lightbox/Lightbox.vue'

    export default {

        name: 'app',

        components: {
            Lightbox
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
</style>
