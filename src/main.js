// //引入vue
import Vue from 'Vue'
// //引入路由
import vueRouter from 'vue-router'

Vue.use(vueRouter)
import router from './router/index.js'
//引入APP根组件
import App from './App.vue'

//按需导入mintui
import {
    Header,
    Button,
    Swipe,
    SwipeItem,
    Lazyload
} from 'mint-ui';

Vue.use(Lazyload);
Vue.component(Button.name, Button);
Vue.component('mt-header', Header);
Vue.component('mt-swipe', Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)
//引入mui样式
import './lib/mui/css/mui.min.css'
//引入mui extra
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'

import './axios/index'
import moment from 'moment'
//安装图片预览插件
import VuePreview from 'vue-preview'

Vue.use(VuePreview)
//定义全局过滤器
Vue.filter('newstime', function (datastr) {
    return moment(datastr).format('YYYY-MM-DD hh:mm:ss')
})

Vue.config.productionTip = false

const vm = new Vue({
    el: "#app",
    router,
    render: c => c(App)
})