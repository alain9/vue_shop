import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap';
import  jQuery from'jquery';
window.$ = window.jQuery =jQuery;
import 'popper.js';
import './assets/app.scss';


Vue.config.productionTip = false;
Vue.component('Navbar', require('./components/Navbar.vue').default);
//Vue.component('Admin', require('./components/Admin.vue'));

new Vue({
  router,
  render: h => h(App)

}).$mount("#app");
