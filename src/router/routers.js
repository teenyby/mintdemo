export default [{
    path: '/home',
    component: home => import('../components/tabbar/Home.vue')
}, {
    path: '/cart',
    component: cart => import('../components/tabbar/Cart.vue')
}, {
    path: '/number',
    component: number => import('../components/tabbar/Number.vue')
}, {
    path: '/search',
    component: search => import('../components/tabbar/Search.vue')
}]