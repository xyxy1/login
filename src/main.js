// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'    //首先引入vue
import App from './App'    //然后引入
import router from './router'   //引入路由配置
import ElementUI from 'element-ui';  //引入elementUI组件
// import VueAMap from 'vue-amap'
import 'element-ui/lib/theme-chalk/index.css'

// import '@/styles/index.scss' // global css

Vue.config.productionTip = false

Vue.use(ElementUI);
// Vue.use(VueAMap);

/* eslint-disable no-new */
// VueAMap.initAMapApiLoader({
//   key: "0ed9c05d5faf68e6166a390dc7f6b665",
//   plugins: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
//   v:'1.4.4'
// })
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
