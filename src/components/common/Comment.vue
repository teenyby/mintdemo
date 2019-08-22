<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="你他吗想说啥，快点说最多120个字" maxlength="120" cols="10" rows="5" v-model="neirong"></textarea>
    <mt-button type="primary" size="large" @click="postcmt">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,index) in commentlist" :key="item.add_time">
        <div
          class="cmt-title"
        >第{{index+1}}樓 &nbsp;用戶: &nbsp; &nbsp;{{item.user_name}}： &nbsp;发表时间：{{item.add_time|newstime}}</div>
        <div class="cmt-content">{{item.content==""?'此楼评论已消失':item.content}}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from "mint-ui";

export default {
  name: "command",
  data() {
    return {
      pageindex: 1,
      commentlist: [],
      neirong: ""
    };
  },
  props: ["newsid"],
  created() {
    this.getcomment();
  },
  methods: {
    getcomment() {
      axios
        .get("/api/getcomments/" + this.newsid + "?pageindex=" + this.pageindex)
        .then(res => {
          let { message, status } = res.data;
          if (status === 0) {
            this.commentlist = this.commentlist.concat(message);
          } else {
            Toast("获取评论数据失败");
          }
        });
    },
    getmore() {
      this.pageindex++;
      this.getcomment();
    },
    //发表评论
    postcmt() {
      if (this.neirong.trim().length === 0) {
        return Toast("评论信息不能为空");
      }
      axios
        .post("/api/postcomment/" + this.$route.params.id, {
          content: this.neirong
        })
        .then(res => {
          let { message, status } = res.data;
          if (status === 0) {
            let msg = {
              user_name: "匿名用户",
              add_time: Date.now(),
              content: this.neirong.trim()
            };
            this.commentlist.unshift(msg);
            this.neirong = "";
          } else {
            Toast("发表评论失败");
          }
        });
    }
  }
};
</script>

<style lang="less" scoped>
.cmt-container {
  h3 {
    font-size: 16px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .cmt-list {
    padding: 15px 0;
    font-size: 13px;
    .cmt-item {
      .cmt-title {
        background-color: #ccc;
        line-height: 30px;
      }
      .cmt-content {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>
