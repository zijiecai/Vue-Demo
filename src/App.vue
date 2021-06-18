<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Home from './views/homePage/Home.vue';

export default {
  data() {
    return {};
  },
  components: { Home }
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
