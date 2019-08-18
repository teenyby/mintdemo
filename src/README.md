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