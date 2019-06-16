
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap.js';
import Vue from 'vue';

import Clipboard from 'clipboard';
window.Clipboard = Clipboard;

///////////////
// Speech stuff
///////////////
import speak from 'speech-synthesis';
window.speak = speak;

window.speechListener = require('annyang');


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('speedcoder', require('./components/Speedcoder.vue').default);
Vue.component('dashboard', require('./components/Dashboard.vue').default);
Vue.component('cryptoboard', require('./components/Cryptoboard.vue').default);
Vue.component('checklists', require('./components/Checklists.vue').default);

Vue.filter('toCurrency', function (value) {
    if (typeof value !== "number") {
        value = parseFloat(value);
    }
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    });
    return formatter.format(value);
});

Vue.use(require('vue-long-press-directive'), {duration:1500});


///////////////
// For Passport
///////////////
Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue').default
);

Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue').default
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue').default
);


// Main Vue instance
const app = new Vue({
    el: '#app'
});


///////////
// Misc
///////////
for (let toast of ['#errorMessageToast', '#messageToast']) {
    $(toast).delay(500).fadeIn(250).delay(2000).fadeOut(2000);
}

/**
 * @param msg
 * @returns {boolean}
 * @constructor
 */
window.ConfirmDelete = function(msg) {
    return confirm("Are you sure you want to delete " + msg + " ?");
};

// Samples a random element from arrays
Array.prototype.randomElement = function() {
    return this[Math.floor(Math.random() * this.length)];
};
