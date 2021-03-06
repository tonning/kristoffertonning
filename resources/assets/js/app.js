
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

require('./components')
require('./filters')

import VueSvgIcon from 'vue-svgicon'
Vue.use(VueSvgIcon)

import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo)

import VueHighlightJS from 'vue-highlight.js';
Vue.use(VueHighlightJS);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    data: {
        showNavbar: false,
    },

    el: '#app',
});
