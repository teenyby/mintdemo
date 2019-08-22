<template>
  <div>
    <!-- 轮播图 -->
    <swiper :swipelist="swipelist" :isfull='true'></swiper>
    <!-- 六宫格 -->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/newslist">
            <img src="../../assets/menu1.png" alt>
            <div class="mui-media-body">你个垃圾</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/photolist">
            <img src="../../assets/menu2.png" alt>
            <div class="mui-media-body">你才垃圾</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/goodslist">
            <img src="../../assets/menu3.png" alt>
            <div class="mui-media-body">我不像你</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../../assets/menu4.png" alt>
            <div class="mui-media-body">焦点访谈</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../../assets/menu5.png" alt>
            <div class="mui-media-body">呵呵哒的</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../../assets/menu6.png" alt>
            <div class="mui-media-body">你丫真美</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from "mint-ui";
import swiper from "../common/Swiper.vue";
export default {
  data() {
    return {
      swipelist: []
    };
  },
  created() {
    this.getlunbo();
  },
  components: { swiper },
  methods: {
    getlunbo() {
      axios.get("http://www.liulongbin.top:3005/api/getlunbo").then(res => {
        if (res.data.status === 0) {
          this.swipelist = res.data.message;
          Toast("加载轮播图成功。。。");
        } else {
          Toast("加载轮播图失败。。。");
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
//消除六宫格上方15px margin
.mui-content > .mui-table-view:first-child {
  margin-top: 0;
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  .mui-table-view-cell {
    border: 0;
    img {
      width: 60px;
      height: 60px;
    }
    .mui-media-body {
      font-size: 13px;
    }
  }
}
</style>
