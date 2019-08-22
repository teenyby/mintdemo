<template>
  <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="max">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input class="mui-input-numbox" type="number" value="1" ref="numbox" @change="change">
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";
export default {
  data() {
    return {
      max: null
    };
  },
  props: ["pmax"],
  mounted() {
    mui(".mui-numbox").numbox();
    console.log("测试" + this.max);
  },
  methods: {
    change() {
      console.log(this.$refs.numbox.value);
      this.$emit("getnum", parseInt(this.$refs.numbox.value));
    }
  },
  watch: {
    pmax: function(newvalue, oldvalue) {
      mui(".mui-numbox")
        .numbox()
        .setOption("max", newvalue);
    }
  }
};
</script>
<style lang="less" scoped>
</style>

