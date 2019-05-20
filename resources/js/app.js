/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.Vue = require('vue');

//Moment JS
import moment from 'moment';

//Filter Vuejs
import {filter} from './filter.js'

//Router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import {routes} from './routes.js'

//V-Form
import { Form, HasError, AlertError } from 'vform'
window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)


//Sweet Alert
import Swal from 'sweetalert2';
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});
window.Toast = Toast;
window.Swal = Swal;



//VueX
import Vuex from 'vuex'
Vue.use(Vuex)
import state from './store/index.js'
const store = new Vuex.Store(
  state
)

//Mardown Editor -> Vuejs Example
import 'v-markdown-editor/dist/index.css';
import Editor from 'v-markdown-editor'
// global register
Vue.use(Editor);




/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-main', require('./components/admin/AdminMaster.vue').default);





const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: 'hash', //bo dau # phia sau dg dan
})


const app = new Vue({
    el: '#app',
    router,
    store,
});
