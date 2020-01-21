<template>
  <div id="detail">
    <detail-bar :title="titles" class="detailbar" @barClick="barclick" ref="navbar"></detail-bar>
    <scroll
      class="detail-scroll"
      ref="scroll"
      :probeType="3"
      @scrollbtn="scrollbtn"
      :pullLoad="true"
    >
      <detail-swiper :swiper-data="SwiperData"></detail-swiper>
      <detail-info :goods="goods"></detail-info>
      <detail-shop :shop="shop"></detail-shop>
      <detail-goods-info :detailInfo="shopInfo" @imgload="imgload"></detail-goods-info>
      <detail-params :paramInfo="goodsParams" ref="params"></detail-params>
      <detail-comment :commentInfo="commentInfo" ref="comment"></detail-comment>
      <good-list :goods="recommends" ref="goodslist"></good-list>
    </scroll>
    <BackHome @click.native="backHome" v-show="backValue" class="back"></BackHome>
    <detail-bottom-nav class="nav-bottom" @addToclick="addToclick"></detail-bottom-nav>
    <roast></roast>
  </div>
</template>
<script>
import DetailBar from "./childcomponents/Detail-bar";
import DetailSwiper from "./childcomponents/DetailSwiper";
import DetailInfo from "./childcomponents/DetailInfo";
import DetailShop from "./childcomponents/DetailShop";
import DetailGoodsInfo from "./childcomponents/DetailGoodsInfo";
import DetailParams from "./childcomponents/DetailParams";
import DetailComment from "./childcomponents/DetailComment";
// 获取商品列表组件
import GoodList from "components/content/goods/goodsList";
import DetailBottomNav from "./childcomponents/DetailBottomNav";
import BackHome from "components/content/backTop/BackHome";
import Roast from "components/common/roast/Roast"

// 获取商品详情的数据
import {
  detailData,
  Goods,
  Shop,
  GoodsParams,
  recommends
} from "network/detail";

import Scroll from "components/common/scroll/scrollHome";
import { debounce } from "common/utils";
import { itemMixin } from "common/mixin";

// 用简单方法把vuex的actions 传给实例应用
import {mapActions, mapGetters} from "vuex"
export default {
  name: "detail",
  components: {
    DetailBar,
    DetailSwiper,
    DetailInfo,
    DetailShop,
    Scroll,
    DetailGoodsInfo,
    DetailParams,
    DetailComment,
    GoodList,
    DetailBottomNav,
    BackHome,
    Roast
  },
  mixins: [itemMixin],

  data() {
    return {
      id: null,
      titles: ["商品", "参数", "评论", "推荐"],
      SwiperData: null,
      goods: {},
      shop: {},
      shopInfo: {},
      goodsParams: {},
      commentInfo: {},
      recommends: [],
      imgrefresh: null,
      barheight: [0],
      computeHeight: null,
      currentIndex: 0,
      backValue: false
    };
  },
  methods: {
  ...mapActions(["addCartList"]),
    // 进行加入购物车的方法
    addToclick() {
      const product = {};
      product.image = this.SwiperData[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.id;
      // this.$store.commit("addCartList",product);
      this.addCartList(product).then(da=>{
        this.$roast.show(da,1500);
        // alert(da);
      });
      // this.$store.dispatch("addCartList", product).then(da => {
      //   console.log(da);
      // });
    },
    backHome() {
      this.$refs.scroll.BS.scrollTo(0, 0, 500);
    },
    imgload() {
      // 已经在该子组件中已经设置图片加完载只发送一次触发imgload事件
      this.$refs.scroll.refresh();
      this.computeHeight();
    },
    barclick(index) {
      this.$refs.scroll.BS.scrollTo(0, this.barheight[index] + 44, 300);
    },

    scrollbtn(position) {
      this.demo(position);
      position.y = -position.y + 44;
      length = this.barheight.length;
      this.barheight.forEach((val, index) => {
        if (this.currentIndex !== index && position.y >= -val) {
          this.currentIndex = index;
          this.$refs.navbar.currentIndex = this.currentIndex;
        }
      });
      // for (let i = 0; i < length; i++) {
      //   if (this.currentIndex!==i&&position.y >= -this.barheight[i]) {
      //     this.currentIndex=i;
      //     this.$refs.navbar.currentIndex = this.currentIndex;
      //   }
      //   // 老师方法
      //   //  if(i<length-1&&position.y>=(-this.barheight[i])&&position.y<(-this.barheight[i+1])||
      //   //  i===length-1&&position.y>=(-this.barheight[i])){
      //   //    this.$refs.navbar.currentIndex=i;
      //   //  }
      // }
    }
  },
  created() {
    this.id = this.$route.params.id;
    detailData(this.id).then(da => {
      console.log(da);
      const data = da.result;
      this.SwiperData = data.itemInfo.topImages;
      // 2.进行商品的价格 等其他商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 3.商品店铺的信息进行添加到shop中
      this.shop = new Shop(data.shopInfo);
      // 4.商品的更多信息，更多图片展示
      this.shopInfo = data.detailInfo;

      // 5.商品的尺寸等信息
      this.goodsParams = new GoodsParams(
        data.itemParams.info,
        data.itemParams.rule
      );

      // 6.获取评论
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0];
      }

      // 7.进行获取推荐列表
      recommends().then(da => {
        this.recommends = da.data.list;
      });

      this.computeHeight = debounce(() => {
        this.barheight.push(-this.$refs.params.$el.offsetTop);
        this.barheight.push(-this.$refs.comment.$el.offsetTop);
        this.barheight.push(-this.$refs.goodslist.$el.offsetTop);
      });
    });
  },
  mounted() {
    console.log(BackHome);
    // const refresh = debounce(this.$refs.scroll.refresh, 500);
    // this.imgrefresh = () => {
    //   refresh();
    // };
    // this.$bus.$on("loadimg", this.imgrefresh);
  },
  destroyed() {
    this.$bus.$off("loadimg", this.imgrefresh);
  },
  updated() {}
};
</script>
<style  scoped>
#detail {
  background: #fff;
  height: 100vh;
}
.detailbar {
  position: relative;
  top: 0;
  background: #ffffff;
  z-index: 10;
}
.detail-scroll {
  height: calc(100% - 93px);
  overflow: hidden;
}
.nav-bottom {
  width: 100%;
  position: relative;
  bottom: 0;
  height: 49px;
  z-index: 100;
  left: 0;
  overflow: hidden;
}
</style>