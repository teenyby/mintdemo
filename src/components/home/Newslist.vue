<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        <router-link :to="'/home/newsinfo/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span>时间：{{item.add_time|newstime}}</span>
              <span>评论：{{item.click}}</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      newslist: null
    };
  },
  created() {
    this.getlist();
  },
  methods: {
    getlist() {
      axios.get("api/getnewslist").then(res => {
        let { status, message } = res.data;
        if (status === 0) {
          this.newslist = message;
        } else {
          Toast("获取数据失败");
        }
      });
    }
  }
};
</script>

<style lang='less' scoped>
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
