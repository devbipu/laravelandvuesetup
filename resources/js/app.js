
require('./bootstrap');

window.Vue = require('vue').default;
import router from './router/routes';


import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import {faAddressBook, faHouseChimney, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faAddressBook,faHouseChimney,faPenToSquare)








import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false





Vue.component('mainapp', require('./mainapp.vue').default);

const app = new Vue({
    el: '#App',
    router,
});
