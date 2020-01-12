<template>
  <div id="home">
    <nav-bar class="bgColor">
      <div slot="left"></div>
      <div slot="center">购物街</div>
      <div slot="right"></div>
    </nav-bar>
   <home-swiper :banners="banners"/>
   <home-view :recommends="recommends"/>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/Navbar";
import { achiveHomeData } from "network/home";
import HomeSwiper from "./HomeComp/homeSwiper";
import HomeView from "./HomeComp/homeView"
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeView
  },
  data() {
    return {
      banners: null,
      recommends:null
    };
  },
  methods: {
    btn() {
      console.log(this.$route);
    }
  },
  created() {
    achiveHomeData().then(data => {
      this.banners = data.data.banner.list;
      this.recommends = data.data.recommend.list;

    });
  }
};
</script>
<style  scoped>
.bgColor {
  background-color: var(--color-tint);
}
</style>