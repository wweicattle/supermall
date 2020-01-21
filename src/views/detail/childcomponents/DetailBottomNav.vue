<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomNav",
  methods:{
    addToCart(){
      this.$emit("addToclick")
    }
  }
};
</script>
<style  scoped>
.bottom-bar {
  display: flex;
}
.bar-item {
  display: flex;
  flex: 1 1;
  justify-content: space-around;
  font-size: 12px;
}

.icon {
  background-image: url("~assets/img/detail/detail_bottom.png");
  background-size: 26px;
  display: block;
  height: 30px;
  width: 40px;
  background-repeat: no-repeat;
}
.service {
  background-position: 0 -62px;
}
.shop {
  background-position: 0px -115px;
}
.select {
  background-position: 0px 0;
}
.bar-left{
    align-items: flex-end;
}
.bar-right {
  font-size: 15.5px;
  text-align: center;
  color: #fff;
}
.bar-right .cart{
    line-height: 49px;
    background: yellow;
    flex: 1;
    color:#000;
}
.bar-right .buy{
    line-height: 49px;
    background: var(--color-high-text);
    flex: 1;
}

</style>