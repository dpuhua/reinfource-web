import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history', // 去除路由中的#
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/login',
      name: '登录',
      component: () => import(/* webpackChunkName: "login" */ '../views/login/login.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = Vue.cookies.get('rein-token')
  const widthPath = /^\/(login|register)/
  if (!widthPath.test(to.path) && !token) {
    next('/login')
  } else {
    next()
  }
})

export default router
