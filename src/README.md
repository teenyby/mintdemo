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

##8.发表评论
1.判断信息不能为空  this.message.trim().length===0
2.发表 this.commenlist.unshift(msg)


##9图片分享
1.mui 组件----tab-top-tabview  样式full-screen
#photolist 滑动组件
1.引入mui.js
2. mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
#写入mounted 否则刚进入不能滚动
* touch-action:pan-y  解决不warn
修改mui样式解决tabbar不能拨动

##10.图片数据列表
1.首个高亮类名 :class="['mui-control-item', item.id==0?'mui-active':'']"
2.unshift返回个数
#懒加载----全局样式生效
样式修改------max-length
             background-color:0 0 9px


##11.图片详情页
1.路由传参 params和路由地址配对一致
2.公共组件引入记得传递props参数
3.图片预览插件-----vue-preview

##12.手机调试 mui---click事件内部也可以用tap

###电商商品经典布局
#1两侧布局 .container----flex ---wrap  item----width:49%
#2.两边对齐   。container ----padding:x px  justify-content:space between
#3.字体对齐   .item ------display:flex  flex-direction:coloumn justify-content:space-between  


##13.轮播图组件封装
isfull---是否全屏 ------：class={full:isfull}

##14.小球动画
1.三个周期   before-enter ---设定起始位置  {el.style.transform='translate(0,0)'}
            enter------具体安排    {el.offsetwidth   el.style.transform   .transition done()}
            after-enter------this.flag=!this.flag
2.动画完美版
思路：确定小球位置  确定购物车位置    x坐标刻度=购物车。left-小球.left   y坐标=购物车。top-小球.top
      1.运用 ref   
      2.getBoundingClientRect
      3.``   ${}              