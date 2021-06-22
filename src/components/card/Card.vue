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
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="stylus" scoped>
.card
  position relative
  width 100%
  max-height 200px
  overflow hidden
  margin-bottom 10px
  border-radius 4px
  box-shadow 0 1px 2px rgba(34, 25, 25, 0.4)
  .card-img
    width 100%
    padding-bottom 100%
  .card-content
    position absolute
    width 90%
    height auto
    left 0
    right 0
    bottom 0
    background-color rgba(0, 0, 0, 0.5)
    color #fff
    padding 10px 5%
    .desc
      position relative
      width 100%
      text-align left
      height auto
      font-size 16px
      line-height 16px
      word-wrap break-word
    .content-bottom
      width 100%
      display flex
      font-size 14px
      line-height 28px
      .name
        flex 1
        text-align left
      .time
        flex 1
        text-align right
</style>