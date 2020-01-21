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
  methods: {
    refresh() {
      this.BS && this.BS.refresh && this.BS.refresh();
    },
    finishPullup() {
      this.BS && this.BS.finishPullup && this.BS.finishPullUp();
    }
    // getSCrollHeight(){
    //   return this.BS?this.BS.y:0;
    // }
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
    });
  }
};
</script>
<style  scoped>
</style>
