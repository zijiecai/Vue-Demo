<template>
  <div class="day bounceInRight" rel="dom">
    <h1>{{ data.title }}</h1>
    <div v-html="data.content"></div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'Day',
  props: {
    data: {
      type: Object
    }
  },
  data() {
    return {
      content: false
    };
  },
  created() {
    this.clearStyle();
  },
  methods: {
    clearStyle() {
      this.$nextTick(() => {
        let tags = this.$el.getElementsByTagName('img');
        for (let i = 0; i < tags.length; i++) {
          tags[i].removeAttribute('style');
        }
      });
    }
  }
};
</script>
<style lang="stylus">
@import './Day'

.day ul img, .day h2, .day p:nth-last-child(2), .day p:nth-last-child(1), .day [target=_blank] img, .day embed
  display none
</style>