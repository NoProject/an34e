// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import signin from './components/Signin'
import signup from './components/Signup'
import header from './components/header'
import footer from './components/footer'
import aside from './components/aside'

import axios from 'axios'
// import jQuery from 'jquery'
// global.jQuery = jQuery
// global.$ = jQuery
/* eslint-disable no-new */
axios.defaults.withCredentials = true
window.$ = window.jQuery = require('jquery')
// import jquery from 'Jquery'

Vue.config.productionTip = false
// Vue.use(jquery)
Vue.component('sign-in', signin)
Vue.component('sign-up', signup)
Vue.component('logo', header)
Vue.component('rodape', footer)
Vue.component('barra-lateral', aside)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
