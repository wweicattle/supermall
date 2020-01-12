<template>
  <div class="tabbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "navBar"
};
</script>
<style  scoped>
.tabbar{
    display: flex;
    line-height: 44px;
    text-align: center;
    box-shadow: 0px 1px 1px rgba(100,100,100,.1);
    color: #fff;
}
.left .right{
    width: 60px;
    height:44px;
}
.center{
    flex: 1;

}
</style>