<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" alt />
    <div class="item-context">
      <p class="overflow">{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="sfav">
        {{goodsItem.cfav}}
        <i class="iconfont icon-xingzhuangaaa"></i>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "goodsItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style  scoped>
@import url("http://at.alicdn.com/t/font_1610044_6brez0wgzoj.css");
.goods-item {
  width: 47%;
  font-size: 12px;
  text-align: center;
}
.goods-item img {
  border-radius: 6px;

  width: 100%;
  height: 225px;
}
.item-context{
  padding: 10px 0;
}
.item-context p {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding-bottom: 3px;

}
.item-context .price {
  color: var(--color-high-text);
}

.item-context .sfav {
  position: relative;
  padding-left: 10px;
  margin-left: 6px;
}
.item-context .sfav > i {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 10px !important;
}
</style>