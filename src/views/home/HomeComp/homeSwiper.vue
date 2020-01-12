<template>
  <Swiper>
    <SwiperItem v-for="(item,v,c) in banners" :key="c">
      <a :href="item.link">
        <img :src="item.image" alt />
      </a>
    </SwiperItem>
  </Swiper>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "App",
  components: {
    Swiper,
    SwiperItem
  },
  props:{
      banners:{
          type:Array,
          default(){
            return [];
          }
      }
  }
};
</script>
<style  scoped>
</style>