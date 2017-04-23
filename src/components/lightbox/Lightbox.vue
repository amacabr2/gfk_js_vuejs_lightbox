<template>

    <div class="lightbox" v-if="image" @click="close">

        <transition name="lightbox-enter">
            <lightbox-image :image="image" :key="image"></lightbox-image>
        </transition>

        <div class="lightbox_close" @click="close"></div>
        <div class="lightbox_btn lightbox_next" @click.stop.prevent="next"></div>
        <div class="lightbox_btn lightbox_prev" @click.stop.prevent="prev"></div>


    </div>

</template>

<script>

    import './LightboxDirective'
    import LightboxImage from './LightboxImage.vue'
    import store from './LightboxStore'

    export default {

        components: {
            LightboxImage
        },

        data() {
            return {
                state: store.state
            }
        },

        methods: {

            close() {
                store.close();
            },

            next() {
                store.next();
            },

            prev() {
                store.prev();
            }

        },

        computed: {

            image() {
                if (this.state.index !== false) {
                    return this.state.images[this.state.index];
                }
            }

        }

    }

</script>

<style src="./lightbox.scss" lang="scss"></style>