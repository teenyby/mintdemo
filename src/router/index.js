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
import Photolist from '../components/photo/Photolist.vue'
import Photoinfo from '../components/photo/Photoinfo.vue'
import Goodslist from '../components/goods/Goodslist.vue'
import Goodsinfo from '../components/goods/Goodsinfo.vue'
import Goodsdesc from '../components/goods/Goodsdesc.vue'
import Goodscmt from '../components/goods/Goodscomment.vue'


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
        }, {
            path: '/home/photolist',
            component: Photolist
        },
        {
            path: '/home/photoinfo/:id',
            component: Photoinfo
        },
        {
            path: '/home/goodslist',
            component: Goodslist
        },
        {
            path: '/home/goodsinfo/:id',
            name:'goodsinfo',
            component: Goodsinfo
        },
        {
            path: '/home/goodsdesc/:id',
            name:'goodsdesc',
            component: Goodsdesc
        },
        {
            path: '/home/goodscomment/:id',
            name:'goodscmt',
            component: Goodscmt
        }
    ],

    linkActiveClass: 'mui-active'
})

export default router