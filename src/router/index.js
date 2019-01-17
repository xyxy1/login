import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/Login'
import Welcome from '@/views/welcome/Welcome'
import Layout from '@/views/layout/Layout'
import Student from '@/views/student/Student'
import MapTest from '@/views/mapTest/MapTest'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/login',
    name:Login,
    component: Login
  }, {
    path: '/',
    component: Layout,
    // beforEnter: guardRoute,
    name: Layout,
    meta: {
      type:'login',
      requiresAuth: true
    },
    children: [{
      path: 'welcome',
      component: Welcome,
      name: Welcome,
    }, {
      path: 'student',
      component: Student,
      name: Student,
    }, {
      path: 'mapTest',
      component: MapTest,
      name: MapTest,
    }]
  }]
})

// function guardRoute(to, from, next) {
//   if (to.matched.some(record=>record.meta.requiresAuth)) {
//     if (!localStorage.token) {
//       next({
//         path:'/login',
//         query:{redirect:to.fullPath}
//       })
//     }else{
//       next()
//     }
//   }else{
//     next()
//   }
// }
