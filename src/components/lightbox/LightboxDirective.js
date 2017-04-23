import Vue from 'vue';
import store from './LightboxStore';

Vue.directive('lightbox', {

    bind(el, binding) {
        el.addEventListener('click', function () {
            store.state.image = el.getAttribute('href');
        })
    }

});