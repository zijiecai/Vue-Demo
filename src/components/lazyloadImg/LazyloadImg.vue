<template>
  <img v-lazy="imgObj" lazy="loading" class="bg-box" alt="图片懒加载" />
</template>

<script>
export default {
  name: 'LazyloadImg',
  props: {
    imgUrl: {
      type: String
    }
  },
  computed: {
    imgObj() {
      return `${this.imgUrl}?imageView2/0/w/200`;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import './LazyloadImg'
</style>