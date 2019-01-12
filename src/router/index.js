import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/Login'
import Welcome from '@/views/welcome/Welcome'
import Layout from '@/views/layout/Layout'
import Student from '@/views/student/Student'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/login',
    component: Login
  }, {
    path: '/',
    component: Layout,
    name: Layout,
    children: [{
      path: 'welcome',
      component: Welcome,
      name: Welcome,
    },{
      path:'student',
      component:Student,
      name:Student,
    }]
  }]
})
