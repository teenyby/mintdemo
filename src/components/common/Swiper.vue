<template>
  <div>
    <mt-swipe :auto="4000">
      <!-- 使用此组件需要传递swipelist数组 -->
      <mt-swipe-item v-for="item in swipelist" :key="item.img">
        <img :src="item.img" alt :class="{'full':isfull}">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
//isfull决定是否宽度自适应，接收值为true或者false
export default {
  props: ["swipelist", "isfull"],
  data() {
    return {};
  }
};
</script>

<style lang="less" >
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    text-align: center;
    background-color: #fff;
    // &:nth-child(1) {
    //   background-color: red;
    // }
    // &:nth-child(2) {
    //   background-color: blue;
    // }
    // &:nth-child(3) {
    //   background-color: gray;
    // }
    img {
      // width: 100%;
      height: 100%;
    }
  }
}
.full {
  width: 100%;
}
</style>

