<template>
  <nav-bar>
    <div slot="left">
      <img src="~assets/img/common/back.svg" alt class="left-img" @click="leftbtn" />
    </div>
    <div slot="center" class="detail">
      <div
        class="detail-item"
        v-for="(item,index) in title"
        :key="index"
        @click="detailbtn(index)"
        :class="{active:index===currentIndex}"
      >{{item}}</div>
    </div>
    <div slot="right"></div>
  </nav-bar>
</template>
<script>
import NavBar from "components/common/navbar/Navbar";
export default {
  name: "DetailBar",
  data() {
    return {
      currentIndex: 0
    };
  },
  props: {
    title: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    NavBar
  },
  methods: {
    detailbtn(index) {
      this.currentIndex = index;
      this.$emit("barClick",index);
    },
    leftbtn(){
      this.$router.back();
    }
  },
  created(){

  }
};
</script>
<style  scoped>
.detail {
  display: flex;
  font-size: 13px;
}
.detail-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.left-img {
  margin-top: 12px;
}
</style>