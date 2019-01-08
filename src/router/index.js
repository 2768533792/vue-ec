import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import category from '@/pages/category'
import list from '@/pages/list'
import detail from '@/pages/detail'
import cart from '@/pages/cart'
import member from '@/pages/member'
import memberIndex from '@/pages/member/index'
import order from '@/pages/member/order'
import info from '@/pages/member/info'
import address from '@/pages/member/address'
import addressEdit from '@/pages/member/addressEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/category',
      name: 'category',
      component: category
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/member',
      component: member,
      children: [
        {
          path: '/',
          name: 'member',
          component: memberIndex
        },
        {
          path: 'order',
          name: 'order',
          component: order
        },
        {
          path: 'info',
          name: 'info',
          component: info
        },
        {
          path: 'address',
          name: 'address',
          component: address
        },
        {
          path: 'address/edit/:addressId',
          name: 'addressEdit',
          component: addressEdit,
          props: true
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
