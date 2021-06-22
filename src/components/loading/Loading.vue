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
  }
};
</script>
<style lang="stylus" scoped></style>