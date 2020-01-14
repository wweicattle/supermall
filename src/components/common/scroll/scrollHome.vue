<template>
  <div class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "App",
  data() {
    return {
      BS: null
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullLoad: {
      type: Boolean,
      default: false
    }
  },

  mounted() {
    this.BS = new BScroll(".wrapper", {
      probeType: this.probeType,
      pullUpLoad: this.pullLoad,
      click: true
    });
    this.BS.on("scroll", da => {
      this.$emit("scrollbtn", da);
      

    });
    this.BS.on("pullingUp", () => {
      this.$emit("pullLoad");
      // setTimeout(() => {
      //   this.BS.finishPullUp();
      // }, 2000);
    });
  }
};
</script>
<style  scoped>
.wrapper {
  /* position: absolute;
  top: 44px;
  left: 0;
  right: 0; 
  bottom: 49px; */

  height: calc(100% - 93px);
  overflow: hidden;
}
</style>
