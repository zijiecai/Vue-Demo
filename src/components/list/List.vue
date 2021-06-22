<template>
  <div
    class="list"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="busy"
    infinite-scroll-distance="100"
  >
    <a
      v-for="data in datas"
      :href="data.url"
      :key="data.url"
      target="view_window"
    >
      <Card :data="data"></Card>
    </a>
  </div>
</template>
<script>
import Card from '../card/Card';
import { getBlogData } from '../../network/blog';

export default {
  name: 'List',
  props: {
    type: {
      type: String
    }
  },
  data() {
    return {
      datas: [],
      page: 1,
      busy: false
    };
  },
  methods: {
    // 加载更多
    loadMore() {
      this.busy = true;
      this.loadTop();
      this.page++;
    },
    // 加载博文数据
    loadTop() {
      this.$store.commit('update_loadingShow', true);
      getBlogData(this.type, this.page).then((res) => {
        console.log(res);
        this.datas = this.datas.concat(res.results);
        this.busy = false;
        this.$nextTick(() => {
          this.$store.commit('update_loadingShow', false);
        });
      });
    }
  },
  components: {
    Card
  }
};
</script>
<style lang="stylus" scoped>
.list
  padding 15px
</style>