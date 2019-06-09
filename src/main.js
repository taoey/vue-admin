// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


//引入iview
import  iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

//引入axios
import axios from 'axios'
Vue.prototype.$http= axios

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

//引入store
import store from '@/store/store.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

