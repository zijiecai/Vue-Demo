<template>
  <div
    class="welfare-wrapper"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="busy"
    infinite-scroll-distance="10"
  >
    <div class="welfare-center">
      <figure
        v-show="leftData.length > 0"
        v-for="(data, index) in leftData"
        :key="index"
        @click="selectDetail"
      >
        <LazyloadImg :imgUrl="data.url"></LazyloadImg>
      </figure>
    </div>
    <div class="welfare-center">
      <figure
        v-show="rightData.length > 0"
        v-for="(data, index) in rightData"
        :key="index"
        @click="selectDetail"
      >
        <LazyloadImg :imgUrl="data.url"></LazyloadImg>
      </figure>
    </div>
    <Detail ref="detail" :detailData="detailData"></Detail>
  </div>
</template>
<script>
import LazyloadImg from '../../components/lazyloadImg/LazyloadImg.vue';
import Detail from '../../components/detail/Detail';
import { getWelfareData, getDetailData } from '../../network/welfare';

export default {
  name: 'Welfare',
  data() {
    return {
      leftData: [],
      rightData: [],
      busy: false,
      page: 1,
      detailData: {},
      time: ''
    };
  },
  components: {
    LazyloadImg,
    Detail
  },
  methods: {
    // 加载更多
    loadMore() {
      this.busy = true;
      this.loadTop();
      this.page++;
    },
    // 加载数据
    loadTop() {
      this.$store.commit('update_loadingShow', true);
      this.page = 4;
      getWelfareData(this.page).then((res) => {
        console.log(res);
        let left = res.results.filter((data, i) => {
          return (i + 1) % 2 === 1;
        });
        let right = res.results.filter((data, i) => {
          return (i + 1) % 2 !== 1;
        });
        this.leftData = this.leftData.concat(left);
        this.rightData = this.rightData.concat(right);
        this.busy = false;
        this.$nextTick(() => {
          this.$store.commit('update_loadingShow', false);
        });
      });
    },
    // 获取图片对应的详情数据
    selectDetail() {
      this.$store.commit('update_loadingShow', true);
      getDetailData().then((res) => {
        console.log(res);
        this.detailData = res.results[0];
        this.$refs.detail.show();
        this.$nextTick(() => {
          this.$store.commit('update_loadingShow', false);
        });
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
@import './Welfare'
</style>