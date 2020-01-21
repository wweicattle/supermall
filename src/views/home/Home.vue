<template>
  <div id="home">
    <nav-bar class="bgColor">
      <div slot="left"></div>
      <div slot="center" style="color:#fff">购物街</div>
      <div slot="right"></div>
    </nav-bar>
    <tab-control
      :title="title"
      class="control"
      @tabclick="tabclick"
      v-show="isshow"
      ref="tabcontrol1"
    ></tab-control>

    <scroll-home
      ref="scroll"
      :probeType="3"
      @scrollbtn="scrollbtn"
      :pullLoad="true"
      @pullLoad="pullLoad"
      class="home-scroll"
    >
      <home-swiper :banners="banners" @SwiperImgfinish="Imgloadfinish" />
      <home-view :recommends="recommends" />
      <home-feature></home-feature>
      <tab-control :title="title" @tabclick="tabclick" ref="tabcontrol"></tab-control>
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

// 导入公共组件
import { debounce } from "common/utils";

import { itemMixin } from "common/mixin";
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
  mixins: [itemMixin],
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
      backValue: false,
      swiperHeight: 0,
      isshow: false,
      scrollY: 0,
      imgrefresh: null
    };
  },
  methods: {
    // 轮播图片已经加载成功
    Imgloadfinish() {
      this.swiperHeight = this.$refs.tabcontrol.$el.offsetTop;
      console.log(this.swiperHeight);
    },
    // 上拉下载更多
    pullLoad() {
      this.achiveHomeData1(this.currentValue);
    },
    // 获取scroll的偏移量，X-Y
    scrollbtn(position) {
      this.demo(position);
    },
    // 点击返回最上层
    backHome() {
      this.$refs.scroll.BS.scrollTo(0, 0, 500);
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
        this.$refs.scroll.finishPullup();
      });
    },
    tabclick(index) {
      let title = ["pop", "new", "sell"];
      let num = title[index];
      this.currentValue = num;
      this.$refs.tabcontrol1.currentIndex = index;
      this.$refs.tabcontrol.currentIndex = index;
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
  },
  mounted() {},
  activated() {
    this.$refs.scroll.BS.scrollTo(0, this.scrollY);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    // 进行离开则记录其浏览时的商品的offsetTop
    // this.scrollY=this.$refs.back.getSCrollHeight();
    // console.log(this.scrollY);
    this.$bus.$off("loadimg", this.imgrefresh);
  }
};
</script>
<style  scoped>
#home {
  height: 100vh;
}
.home-scroll {
  /* position: absolute;
  top: 44px;
  left: 0;
  right: 0; 
  bottom: 49px; */
  height: calc(100% - 93px);
  overflow: hidden;
}
.bgColor {
  background-color: var(--color-tint);
  /* position: sticky;
  top: 0px;
  z-index: 9;
  left: 0; */
}
.control {
  width: 100%;
  position: fixed;
  top: 44px;
  background: #fff;
  z-index: 2;
}
</style>