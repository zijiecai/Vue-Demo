<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/welfare">Welfare</router-link>
    </div> -->
    <div>
      <router-view />
    </div>
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

<style lang="stylus"></style>
