<template>
  <div class="newsinfo">
    <div class="newinfo-title">{{newsinfolist.title}}</div>
    <div class="span">
      <span>时间：{{newsinfolist.add_time|newstime}}</span>
      <span>点击{{newsinfolist.click}}次</span>
    </div>
    <hr>
    <div class="newinfo-content" v-html="newsinfolist.content"></div>
    <comment :newsid="this.id"></comment>
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
      newsinfolist: {}
    };
  },
  created() {
    this.getnewspic();
  },
  components: {
    comment
  },
  methods: {
    getnewspic() {
      axios.get("/api/getnew/" + this.id).then(res => {
        console.log(res);
        let { message, status } = res.data;
        if (status === 0) {
          this.newsinfolist = message[0];
        } else {
          Toast("获取数据失败");
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.newsinfo {
  padding: 0 5px;
  .newinfo-title {
    color: red;
    font-size: 15px;
    text-align: center;
    margin: 4px 0;
  }
  .span {
    font-size: 12px;
    color: skyblue;
    display: flex;
    justify-content: space-between;
  }
  .newinfo-content {
    font-size: 10px;
  }
}
</style>
