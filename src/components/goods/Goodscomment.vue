<template>
  <div>
    <comment :newsid="id"></comment>
  </div>
</template>

<script>
import comment from "../common/Comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  components: { comment }
};
</script>

<style>
</style>
