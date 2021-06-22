<template>
  <div id="app">
    <Loading :isLoadingShow="getLoadingShow"></Loading>
    <router-view />
  </div>
</template>

<script>
import Home from './views/homePage/Home.vue';
import Loading from './components/loading/Loading.vue';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['getLoadingShow'])
  },
  components: { Home, Loading }
};
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  width 100%
  padding-top 56px
#app .show
  transform translateX(250px)
</style>
