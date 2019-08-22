<template>
  <div class="goodsdesc">
    <h3>{{descinfo.title}}</h3>
    <hr>
    <div v-html="descinfo.content" class="content"></div>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from "mint-ui";
export default {
  name: "图文介绍",
  data() {
    return {
      id: this.$route.params.id,
      descinfo: {}
    };
  },
  created() {
    this.getdesc();
  },
  methods: {
    getdesc() {
      axios.get("/api/goods/getdesc/" + this.id).then(res => {
        let { message, status } = res.data;
        if (status === 0) {
          this.descinfo = message[0];
          //   this.imginfo = message;
        } else {
          Toast("读取不到详情数据，臭傻逼");
        }
      });
    }
  }
};
</script>

<style lang="less" >
//scoped 去掉就能图片100%
.goodsdesc {
  padding: 8px;
  h3{
      font-size: 16px;
      text-align: center;
      margin:10px 0;
  }
  .content {
    img {
      width: 100%;
    }
  }
}
</style>

