<template>
  <div class="photoinfo">
    <div class="title">{{photoinfo.title}}</div>
    <div class="span">
      <span>发表时间：{{photoinfo.add_time|newstime}}</span>
      <span>点击{{photoinfo.click}}次</span>
    </div>
    <hr>
    <!-- <vue-preview
      class="preview-img"
      :src="item.src"
      v-for="item in imginfo"
      height="100"
      @click="$preview.open(item,index)"
      :key="item.src"
    ></vue-preview> -->
    <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
    <div class="content" v-html="photoinfo.content"></div>
    <hr>
    <!-- 引入公共组件 -->
    <comment :newsid="id"></comment>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from "mint-ui";
import comment from "../common/Comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      photoinfo: {},
      imginfo: [],
      slide1: []
    };
  },
  created() {
    this.getphotoinfo();
    this.getimginfo();
  },
  components: { comment },
  methods: {
    getphotoinfo() {
      axios.get("/api/getimageInfo/" + this.id).then(res => {
        let { message, status } = res.data;
        if (status === 0) {
          this.photoinfo = message[0];
        } else {
          Toast("获取图片详情数据失败");
        }
      });
    },
    //图片缩略图信息
    getimginfo() {
      axios.get("/api/getthumimages/" + this.id).then(res => {
        let { message, status } = res.data;
        if (status === 0) {
          message.forEach(element => {
            (element.h = 400), (element.w = 400);
          });
          this.slide1 = message;
        //   this.imginfo = message;
        } else {
          Toast("获取图片缩略图数据失败");
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.photoinfo {
  padding: 2px;
  .title {
    color: skyblue;
    font-size: 15px;
    margin: 10px 0;
    text-align: center;
  }
  .span {
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    color: #ccc;
  }
  .content {
    font-size: 14px;
  }
}
</style>

