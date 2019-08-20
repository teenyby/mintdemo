#这是一个移动端的demo项目

##因为是我写的所以很牛逼

#1.tabbar设置
1.routerlink改造 -----linkActiveClass:'mui-active'
2.切换路由 -----创建组件

#2.home组件轮播图
1.mintui-----swipe
.mint-swipe设置高度
.mint-swipe-item设置图片背景
发送请求 判断是赋值swipelist
遍历v-for swipelist  img :src=item.img   宽高自适应100%

##3.六宫格图片
mui---grid default  里面包裹img
#修改样式
index.html ------body:bgc #ccc
ul-----bgc:#ccc border:none   li:border:0
图片二倍图 width height 尺寸

##4.路由组件切换
#动画效果
1.设置overflow-x:hidden
2.v-enter与v-leave-to分别设置
3.postion:absolute

##5.newslist组件
#路由改造 
1.配置路由组件
#样式改造
1.mui-----mui-media
###全局过滤器修改时间
vue.filter('名称',function(datastr,pattern:'YYYY-MM-DD hh:mm:ss'){
    return moment(datastr).format(pattern)
})

##6.newsinfo组件详情页
#路由改造
to='/api/list/'+'item.id'
path:'home/newsinfo/:id'
###路由传参 this.$route.params.id
#渲染 善于应用v-html


##7.评论公共组件
#注意路径
#父子组件传递 this.父组件props名称
#pageindex++  
#加载更多 this.comment=this.comment.concat(message)