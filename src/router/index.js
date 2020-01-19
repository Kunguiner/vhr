import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta : {
      needLogin: true,
    },
  },
  {
    path: '/about',
    name: 'about',
    meta : {
      needLogin: true,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path : '/login',
    name : 'login',
    component : () => import('../views/Login')
  },
  // TODO 测试路由
  {
    path : '/vfor',
    name : 'vfor-test',
    meta : {
      needLogin: false,
    },
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
router.beforeEach((to, from, next) => {
  // ...
  console.log('路由守卫',to);
  let meta = to.meta;
  if(meta.needLogin){
    alert('需要登录才能访问');
    next('/login')
  }else {
    next();
  }
})
export default router
