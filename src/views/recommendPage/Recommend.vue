<template>
  <Swiper :options="swiperOption">
    <Swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <Day :data="slide"></Day>
    </Swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </Swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import { getRecommendData } from '../../network/recommend';
import Day from '../../components/day/Day';

export default {
  name: 'Recommend',
  data() {
    return {
      swiperSlides: [],
      playPageShow: false,
      blurBgShow: false,
      rankshow: true,
      routerViewAnimation: 'page-slide',
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true
      }
    };
  },
  created() {
    this.$store.commit('update_loadingShow', true);
    // 发送网络请求
    getRecommendData().then((res) => {
      console.log(res);
      this.swiperSlides = res.results;
      this.$nextTick(() => {
        this.$store.commit('update_loadingShow', false);
      });
    });
  },
  components: {
    Swiper,
    SwiperSlide,
    Day
  }
};
</script>
<style lang="stylus" scoped></style>