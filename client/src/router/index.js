import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import dashboard from '@/components/Dashboard'
import addproject from '@/components/addProject'
import tasks from '@/components/tasks'
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
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/addproject',
      name: 'addproject',
      component: addproject
    },
    {
      path: '/project/:name',
      name: 'tasks',
      component: tasks
    }
  ]
})
