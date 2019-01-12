// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'    //首先引入vue
import App from './App'    //然后引入
import router from './router'   //引入路由配置
import ElementUI from 'element-ui';  //引入elementUI组件
import 'element-ui/lib/theme-chalk/index.css'
// import '@/styles/index.scss' // global css

Vue.config.productionTip = false

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
