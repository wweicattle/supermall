<template>
  <Swiper>
    <SwiperItem v-for="(item,v,c) in banners" :key="c">
      <a :href="item.link">
        <img :src="item.image" @load="Imgloadfinish" />
      </a>
    </SwiperItem>
  </Swiper>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "App",
  data(){
    return {
      imgload:false,
    }
  }, 
  methods:{
    Imgloadfinish(){
     if(this.imgload===false){
       this.$emit("SwiperImgfinish");
       this.imgload=true;
     }
    }
   
  },
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
  },
 
  
};
</script>
<style  scoped>
</style>