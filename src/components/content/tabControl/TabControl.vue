<template>
  <div class="tab-control">
    <div v-for="(item,index) in title" :key="index" class="tab-control-item" @click="btn(index)" >
      <span :class="{active:currentIndex===index}">{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data(){
      return{
          currentIndex:0,
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
  methods:{
      btn(index){
          this.currentIndex=index;
          this.$emit("tabclick",index)
      }
  }
};
</script>
<style  scoped>
.tab-control {
  display: flex;
}
.tab-control-item {
  flex: 1;
  text-align: center;
  height: 40px;
  line-height: 40px;
}
.tab-control-item span{
    padding-bottom: 3px;
}
.active {
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-tint);
}
</style>