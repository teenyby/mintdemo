//引入vue
import Vue from 'Vue'

//引入APP根组件
import App from './App.vue'

//按需导入mintui
import {
    Header
} from 'mint-ui';

Vue.component('mt-header', Header);

//引入mui样式
import './lib/mui/css/mui.min.css'
 

const vm = new Vue({
    el: "#app",
    render: c => c(App)
})