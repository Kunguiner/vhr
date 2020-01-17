import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
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
  // TODO 测试路由
  {
    path : '/vfor',
    name : 'vfor-test',
    component : () => import('../components/VFor.vue')
  },
  {
    path : '/enlargeText',
    name : 'enlargeText',
    component : () => import('../components/blog-post')
  }
]

const router = new VueRouter({
  routes
})

export default router
