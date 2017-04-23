import Vue from 'vue';

Vue.directive('lightbox', {

    bind(el, binding) {
        el.addEventListener('click', function () {
            open(el.getAttribute('href'));
        })
    }

});