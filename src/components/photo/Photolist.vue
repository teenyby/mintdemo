<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item', item.id==0?'mui-active':'']"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
            v-for="item in photolist"
            :key="item.id"
            @click="getphotolist(item.id)"
          >{{item.title}}</a>
        </div>
      </div>
    </div>
    <!-- 图片 -->
    <ul class="photostyle">
      <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
        <img v-lazy="item.img_url">
        <div class="info">
          <div class="info-title">{{item.title}}</div>
          <div class="info-body">{{item.zhaiyao}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min";
import axios from "axios";
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      photolist: [],
      list: []
    };
  },
  created() {
    this.getphotocate();
    this.getphotolist(0);
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getphotocate() {
      axios.get("/api/getimgcategory").then(res => {
        let { message, status } = res.data;
        if (status === 0) {
          message.unshift({ title: "全部", id: 0 });
          this.photolist = message;
        } else {
          Toast("获取图片列表数据失败");
        }
      });
    },
    getphotolist(id) {
      axios.get("/api/getimages/" + id).then(res => {
        let { message, status } = res.data;
        if (status === 0) {
          this.list = message;
        } else {
          Toast("获取图片列表失败");
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
* {
  touch-action: pan-y;
}
.photostyle {
  // background-color: #ccc;
  list-style: none;
  padding: 0 10px;
  margin-bottom: 0; //最后一个图片底部为0
  li {
    margin-bottom: 5px;
    padding: 8px;
    text-align: center;
    box-shadow: 0 0 6px;
    position: relative;
    img {
      width: 100%;
      vertical-align: middle;
    }
    .info {
      position: absolute;
      bottom: 14px;
      padding: 3px;
      color: #fff;
      text-align: left;
      background-color: rgba(0, 0, 0, 0.2);
      max-height: 84px;
      .info-title {
        font-size: 14px;
      }
      .info-body {
        font-size: 12px;
      }
    }
  }
}
img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>
