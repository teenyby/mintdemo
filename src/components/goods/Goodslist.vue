<template>
  <div class="goodslist">
    <div class="goods-item" v-for="item in list" :key="item.id" @click='goinfo(item.id)'>
      <img :src="item.img_url" alt>
      <p>{{item.title}}</p>
      <div class="out">
        <div class="price">
          <span class="now">¥{{item.sell_price}}</span>
          <span class="old">¥{{item.market_price}}</span>
        </div>
        <div class="info">
          <span>热卖中</span>
          <span>剩余{{item.stock_quantity}}件</span>
        </div>
      </div>
    </div>
    <!-- 加载更多 -->
    <mt-button type="danger" size="large" @click="getmore">加载更多</mt-button>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      pageIndex: 1,
      list: []
    };
  },
  created() {
    this.getgoodslist();
  },
  methods: {
    getgoodslist() {
      axios.get("/api/getgoods?pageindex" + this.pageIndex).then(res => {
        let { status, message } = res.data;
        if (status === 0) {
          //   this.list = message;
          this.list=this.list.concat(message);
        } else {
          Toast("获取数据失败");
        }
      });
    },
    getmore() {
      this.pageIndex++;
      this.getgoodslist();
    },
    //跳转路由编程式导航
    goinfo(id){
        // this.$router.push('/home/goodsinfo/'+id)
        this.$router.push({name:'goodsinfo',params:{id}})

    }
  }
};
</script>

<style lang="less" scoped>
.goodslist {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;

  .goods-item {
    width: 49%;
    box-shadow: 0 0 2px #ccc;
    border: 1px solid #ccc;
    margin-bottom: 7px;
    padding: 2px;
    //每个改变flex方向
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img {
      width: 100%;
    }
    p {
      font-size: 16px;
      color: black;
      font-weight: 700;
      padding: 3px;
      margin: 0;
    }
    .out {
      background-color: #eee;
      padding-top: 5px;
      margin-top: 3px;
      .price {
        .old {
          text-decoration: line-through;
          margin-left: 10px;
          font-size: 12px;
        }
        .now {
          font-size: 16px;
          color: red;
          font-weight: 700;
        }
      }
      .info {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        span {
        }
      }
    }
  }
}
</style>

