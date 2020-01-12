<template>
  <div class="home-View">
    <div v-for="(item,s) in recommends" :key="s" class="View-item">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style  scoped>
.home-View {
  display: flex;
  /* align-items: center */
}
.View-item {
  flex: 1 2;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}
.View-item img {
  width: 85%;
}
</style>