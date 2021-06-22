<template>
  <div class="card">
    <img
      v-lazy="data.images ? data.images[0] + '?imageView2/0/w/200' : null"
      alt="博文封面图"
      class="card-img"
    />
    <div class="card-content">
      <div class="desc">{{ data.desc }}</div>
      <div class="content-bottom">
        <div class="name">{{ data.who }}</div>
        <div class="time">2021-6-20</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    data: {
      type: Object
    }
  }
};
</script>
<style lang="stylus" scoped>
@import './Card'
</style>