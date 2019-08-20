import Vue from "vue"

import vueRouter from 'vue-router'
Vue.use(vueRouter)
//引入路由规则
// import routes from './routers.js'
import home from '../components/tabbar/Home.vue'
import member from '../components/tabbar/Member.vue'
import cart from '../components/tabbar/Cart.vue'
import search from '../components/tabbar/Search.vue'
import News from '../components/home/Newslist.vue'
import Newsinfo from '../components/home/Newsinfo.vue'


const router = new vueRouter({
    routes: [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        component: home
    }, {
        path: '/cart',
        component: cart
    }, {
        path: '/member',
        component: member
    }, {
        path: '/search',
        component: search
    }, {
        path: '/home/newslist',
        component: News
    }, {
        path: '/home/newsinfo/:id',
        component: Newsinfo
    }],

    linkActiveClass: 'mui-active'
})

export default router