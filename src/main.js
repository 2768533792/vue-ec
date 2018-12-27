// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/styles/reset.css'
import 'swiper/dist/css/swiper.css'
import '@/assets/styles/common.scss'
import '@/assets/iconfont/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import {result} from '@/assets/js/es6'
import axios from 'axios'

Vue.use(VueAwesomeSwiper)
Vue.prototype.$ajax = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  created () {
    console.log(result)
  },
  components: { App },
  template: '<App/>'
})
