<template>
  <div class="goodsinfo">
    <transition @before-enter="beforeEnter" @after-enter="afterEnter" @enter="enter">
      <div class="ball" v-show="ballflag" ref="ball"></div>
    </transition>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swipersub :swipelist="swipelist" :isfull="false"></swipersub>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">{{goodslist.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            <span class="old">市场价：¥{{goodslist.market_price}}</span>
            <span class="new">销售价：¥{{goodslist.sell_price}}</span>
          </p>
          <p class="buynum">
            <span>购买数量：</span>
            <numbox @getnum="givenum" :pmax="goodslist.stock_quantity"></numbox>
          </p>
          <p class="twobutton">
            <mt-button type="primary" size="small" style="margin-right:10px">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addshop">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{goodslist.goods_no}}</p>
          <p>库存情况：{{goodslist.stock_quantity}}</p>
          <p>上架时间：{{goodslist.add_time|newstime}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <p>
          <mt-button type="primary" plain size="large" @click="godesc(id)">图文介绍</mt-button>
        </p>
        <p>
          <mt-button type="danger" plain size="large" @click="gocmt(id)">商品评论</mt-button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import swipersub from "../common/Swiper.vue";
import axios from "axios";
import { Toast } from "mint-ui";
import numbox from "../common/Numbox.vue";
export default {
  data() {
    return {
      swipelist: [],
      id: this.$route.params.id,
      goodslist: {},
      ballflag: false,
      //默认值
      selectcount: 1
    };
  },
  components: {
    swipersub,
    numbox
  },
  created() {
    this.getimginfo();
    this.getinfoapi();
  },
  methods: {
    getimginfo() {
      axios.get("/api/getthumimages/" + this.id).then(res => {
        let { message, status } = res.data;
        if (status === 0) {
          message.forEach(item => {
            item.img = item.src;
          });
          this.swipelist = message;
          //   this.imginfo = message;
        } else {
          Toast("获取图片缩略图数据失败");
        }
      });
    },
    getinfoapi() {
      axios.get("/api/goods/getinfo/" + this.id).then(res => {
        let { message, status } = res.data;
        if (status === 0) {
          this.goodslist = message[0];
          //   this.imginfo = message;
        } else {
          Toast("读取不到详情数据，臭傻逼");
        }
      });
    },
    godesc(id) {
      this.$router.push({ name: "goodsdesc", params: { id } });
    },
    gocmt(id) {
      this.$router.push({ name: "goodscmt", params: { id } });
    },
    //添加购物车动画处理
    addshop() {
      this.ballflag = true;
    },
    //动画处理函数
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      el.offsetWidth;
      const ballpostion = this.$refs.ball.getBoundingClientRect();
      const cartpostion = document
        .getElementById("cartpostion")
        .getBoundingClientRect();
      let xp = cartpostion.left - ballpostion.left;
      let yp = cartpostion.top - ballpostion.top;

      el.style.transform = `translate(${xp}px,${yp}px)`;
      el.style.transition = "all 0.3s cubic-bezier(.17,.67,.83,.67)";
      done();
    },
    afterEnter() {
      this.ballflag = !this.ballflag;
    },
    givenum(num) {
      console.log("父组件接收到了" + num);
      this.selectcount = num;
    }
  }
};
</script>

<style lang="less" scoped>
.goodsinfo {
  background: #eee;
  overflow: hidden;
  .new {
    color: red;
    font-weight: 700;
  }
  .old {
    margin-right: 10px;
    text-decoration: line-through;
  }
  .twobutton {
    margin-top: 14px;
  }
}
.mui-card-footer {
  display: block;
  button {
    margin: 10px;
  }
}
//小球样式
.ball {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  z-index: 9999;
  top: 387px;
  left: 153px;
  transform: translate("200px,300px");
}
</style>

