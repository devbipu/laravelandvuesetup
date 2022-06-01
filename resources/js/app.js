
require('./bootstrap');

window.Vue = require('vue').default;
import router from './router/routes'


const app = new Vue({
    el: '#App',
    router,
});
