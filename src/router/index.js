import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'

import UserManage from '@/views/UserManage/Index.vue';
import AccountInfoView from '@/views/UserManage/AccountInfoView.vue'
import RoleManage from '@/views/UserManage/RoleManage.vue'
import AuthoManage from '@/views/UserManage/AuthoManage.vue'

import Message from '@/views/Message.vue';
import Order from '@/views/Order.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/user',
    name: 'user',
    component: UserManage,
    children:[
      {
        path: 'accountInfoView',
        name: 'userAccountInfoView',
        meta: {
          index: '/user/accountInfoView'
        },
        component: AccountInfoView,
      },
      {
        path: 'authoManage',
        name: 'userAuthoManage',
        meta: {
          index: '/user/authoManage'
        },
        component: AuthoManage
      },
      {
        path: 'roleManage',
        name: 'userRoleManage',
        meta: {
          index: '/user/roleManage'
        },
        component: RoleManage
      }
    ]
  },
  {
    path: '/message',
    name: 'message',
    component: Message
  },
  {
    path: '/order',
    name: 'order',
    component: Order
  }
]



const router = new VueRouter({
  routes
})

export default router
