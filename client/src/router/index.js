import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import dashboard from '@/components/Dashboard'
import addproject from '@/components/addProject'
// import don from '@/components/doanything'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: dashboard
    },
    {
      path: '/addproject',
      name: 'addproject',
      component: addproject
    }
  ]
})
