<template>
  <div>
    <swiper class="swiper1">
      <swiper-item v-for="(item,index) in SwiperData" :key="index" class="swiper-itrm">
          <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    SwiperData: {
      type: Array,
      default(){
          return [];
      }
    }
  },
  mounted() {}
};
</script>
<style  scoped>
.swiper1{
    height: 300px;
}
.swiper-item{
    overflow: hidden;
}
</style>