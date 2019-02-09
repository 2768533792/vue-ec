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
import axios from 'axios'
import VueCookies from 'vue-cookies'
import Toast from '@/components/Toast/index'
import '@/components/Toast/toast.css'
import animate from 'animate.css'

import store from './store'

import footerMenu from '@/components/footerMenu/index'

Vue.use(VueAwesomeSwiper)
Vue.use(footerMenu)
Vue.use(VueCookies)
Vue.use(Toast)
Vue.use(animate)
Vue.prototype.$ajax = axios

Vue.prototype.goBack = function () {
  // window.history.go(-1) // 返回的第一种方法
  router.back() // 第二种
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
