import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/Jry'
import Login1 from '@/views/login/Hqf'
import Login2 from '@/views/login/Ssf'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/jry',
    name:Login,
    component: Login
  },{
    path: '/hqf',
    name:Login1,
    component: Login1
  },{
    path: '/ssf',
    name:Login,
    component: Login2
  }]
})

