<template>
  <div id="home">
    <nav-bar class="bgColor">
      <div slot="left"></div>
      <div slot="center">购物街</div>
      <div slot="right"></div>
    </nav-bar>

    <scroll-home ref="back" :probeType="3" @scrollbtn="scrollbtn" :pullLoad="true" @pullLoad="pullLoad">
      <home-swiper :banners="banners" />
      <home-view :recommends="recommends" />
      <home-feature></home-feature>
      <tab-control :title="title" class="tab-control" @tabclick="tabclick"></tab-control>
      <good-list :goods="showgoods"></good-list>
    </scroll-home>
    <BackHome @click.native="backHome" v-show="backValue"></BackHome>
  </div>
</template>
<script>
// 导入方法
import { achiveHomeData, achiveTab } from "network/home";

// 子组件
import HomeSwiper from "./HomeComp/homeSwiper";
import HomeView from "./HomeComp/homeView";
import HomeFeature from "./HomeComp/homeFeature";

// 公共方法
import NavBar from "components/common/navbar/Navbar";
import TabControl from "components/content/tabControl/TabControl";
import goodList from "components/content/goods/goodsList";
import scrollHome from "components/common/scroll/scrollHome";
import BackHome from "components/content/backTop/BackHome";
// import backHome from "components/content/backTop/BackHome";
export default {
  name: "Home",
  components: {
    HomeSwiper,
    HomeView,
    HomeFeature,
    NavBar,
    TabControl,
    goodList,
    scrollHome,
    BackHome
  },
  data() {
    return {
      banners: null,
      recommends: null,
      title: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentValue: "pop",
      backValue: false
    };
  },
  methods: {
    // 上拉下载更多
    pullLoad() {
      this.achiveHomeData1(this.currentValue);
      this.$refs.back.BS.finishPullUp();
      this.$refs.back.BS.refresh();

    },

    // 获取scroll的偏移量，X-Y
    scrollbtn(da) {
      this.backValue = !(da.y > -700);
    },
    // 点击返回最上层
    backHome() {
      this.$refs.back.BS.scrollTo(0, 0, 500);
    },
    achiveHomeData() {
      // 获取轮播图的数据
      achiveHomeData().then(data => {
        this.banners = data.data.banner.list;
        this.recommends = data.data.recommend.list;
      });
    },

    // 获取 新款，流行的商品数据
    achiveHomeData1(type) {
      let page = this.goods[type].page + 1;
      return achiveTab(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
    tabclick(index) {
      let title = ["pop", "new", "sell"];
      let num = title[index];
      this.currentValue = num;
    }
  },
  computed: {
    showgoods() {
      return this.goods[this.currentValue].list;
    }
  },
  created() {
    this.achiveHomeData();
    this.achiveHomeData1("new");
    this.achiveHomeData1("sell");
    this.achiveHomeData1("pop");
  }
};
</script>
<style  scoped>
#home {
  height: 100vh;
}
.bgColor {
  background-color: var(--color-tint);
  position: sticky;
  top: 0px;
  z-index: 9;
  left: 0;
}
.tab-control {
  position: sticky;
  top: 44px;
  background: #fff;
  z-index: 2;
}
</style>