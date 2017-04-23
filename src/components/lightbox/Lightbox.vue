<template>

    <div class="lightbox" v-if="image" @click="close">

        <lightbox-image :image="image"></lightbox-image>
        <div class="lightbox_close" @click="close"></div>

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