<template>
  <div v-show="ishow">
    <div :class="{roast:ishow}">{{message}}</div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      message: "",
      ishow: false
    };
  },
  methods: {
    show(mess, time) {
      this.message = mess;
      this.ishow = true;
      setTimeout(() => {
        this.ishow = false;
      }, time);
    }
  }
};
</script>
<style  scoped>
.roast {
  text-align: center;
  line-height: 40px;
  color: rgb(238, 192, 192);
  width: 160px;
  height: 40px;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background: rgba(0, 0, 0, 0.7);
}
</style>