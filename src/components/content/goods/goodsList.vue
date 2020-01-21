<template>
  <div class="goods">
    <goods-item v-for="(item,index) in goods" :key="index" :goodsItem="item"></goods-item>
  </div>
</template>
<script>
import goodsItem from "./goodsItem";
export default {
  name: "goodlist",
  components: {
    goodsItem
  },

  methods: {
    
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  mounted() {
  },
  

}
</script>
<style  scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>