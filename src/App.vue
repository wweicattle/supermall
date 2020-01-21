<template>
  <div>
    <!--  <div>{{name+"na33me"|show}}</div> -->
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <tab-bar-main></tab-bar-main>
  </div>
</template>

<script>
import TabBarMain from "components/content/tabbarMain/TabBarMain";

export default {
  name: "APP",
  components: {
    TabBarMain
  },
  data() {
    return { name: "Wu" };
  },

  //  filters: {
  //     show(value) {
  //       return value+"wuwei"
  //     }
  //   },
  mounted() {
    this.name += "wwwwww";
  }
};
</script>

<style>
@import "assets/css/base.css";
</style>
