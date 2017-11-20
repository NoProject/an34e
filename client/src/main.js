// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import signin from './components/Signin'
import signup from './components/Signup'
// import jQuery from 'jquery';
// global.jQuery = jQuery
// global.$ = jQuery
/* eslint-disable no-new */
window.$ = window.jQuery = require('jquery')
// import jquery from 'Jquery'

Vue.config.productionTip = false
// Vue.use(jquery)
Vue.component('Sign-in', signin)
Vue.component('Sign-up', signup)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
