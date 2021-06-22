<template>
  <div class="loading" v-show="isLoadingShow">
    <div class="ball-pulse">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Loading',
  props: {
    isLoadingShow: {
      type: Boolean
    }
  },
  data() {
    return {};
  },
  created() {
    console.log(112321);
  }
};
</script>
<style lang="stylus" scoped></style>