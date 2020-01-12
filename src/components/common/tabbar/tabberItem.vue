<template>
  <div class="tab-items" @click="btn">
    <div v-if="!active1">
      <slot name="img"></slot>
    </div>
    <div v-else>
      <slot name="img1"></slot>
    </div>
    <div :style="activeColor1">
      <slot name="name"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "tabbarItem",
  data() {
    return {};
  },
  props: {
    path: {
      type: String
    },
    activeColor: {
      type: String,
      default: "red"
    }
  },
  methods: {
    btn() {
      this.$router.replace(this.path);
    }
  },
  computed: {
    active1(g) {
      return this.$route.path == this.path;
    },
    activeColor1() {
      return this.active1 ? { color: this.activeColor } : {};
    }
  }
};
</script>
<style  scoped>
.tab-items {
  flex: 1 0;
  text-align: center;
  font-size: 14px;
}

.tab-items img {
  margin-top: 3px;
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.active {
  color: red;
}
</style>