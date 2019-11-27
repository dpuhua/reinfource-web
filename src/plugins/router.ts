/**
 * author: dph
 * date: 2019/11/27
 * description: 路由配置
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history', // 去除路由中的#
  routes: [
    {
      path: '/login',
      name: '登录',
      component: () => import(/* webpackChunkName: "login" */ '../views/login/login.vue')
    },
    {
      path: '/register',
      name: '注册',
      component: () => import(/* webpackChunkName: "login" */ '../views/login/register.vue')
    },
    {
      path: '/forget',
      name: '忘记密码',
      component: () => import(/* webpackChunkName: "login" */ '../views/login/forget.vue')
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'user',
          name: '用户'
        },
        {
          path: 'customer',
          name: '自定义',
          component: () => import(/* webpackChunkName: "login" */ '../views/customer/index.vue'),
          children: [
            {
              path: ':id',
              name: '页面',
              component: () => import(/* webpackChunkName: "login" */ '../views/login/register.vue')
            },
            {
              path: 'create',
              name: '创建'
            }
          ]
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = Vue.Cache.getToken()
  const widthPath = /^\/(login|register|forget)/
  if (!widthPath.test(to.path) && !token) {
    next('/login')
  } else {
    next()
  }
})

export default router
