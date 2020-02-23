import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SysConst from "../consts/SysConst";

Vue.use(VueRouter)

/**
 * 如果某个路由时不用登录就能访问的，那么需要在该路由对象上
 * 添加 meta { noLoginRequired : true } 即可标识该
 * 路由无需登录即可访问
 */
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
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
        name: 'login',
        meta: {
            noLoginRequired: true,
        },
        component: () => import('../views/Login')
    },
    // TODO 测试路由
    {
        path: '/vfor',
        name: 'vfor-test',
        meta: {
            noLoginRequired: true,
        },
        component: () => import('../components/VFor.vue')
    },
    {
        path: '/enlargeText',
        name: 'enlargeText',
        meta: {
            noLoginRequired: true,
        },
        component: () => import('../components/blog-post')
    }
]

const router = new VueRouter({
    routes
});
/**
 * 路由前置守卫，在用户访问某个页面时判断是否登陆过
 */
router.beforeEach((to, from, next) => {
    let noLoginRequired = to.meta.noLoginRequired;
    if (typeof noLoginRequired === 'undefined') {
        console.log(to.name + '需要登录');
        // 从 sessionStorage 域中获取用户登录凭证，如果为空就证明未登录
        // TODO 后期可加上 jwt 格式验证
        let loginCredential = sessionStorage.getItem(SysConst.LOGIN_CREDENTIAL);
        if (loginCredential && loginCredential.length > 0) {
            next();
        } else {
          next('/login');
        }
        return;
    }
    if (noLoginRequired === true) {
        console.log(to.name + '不需要登录');
        next();
    }
})
export default router
