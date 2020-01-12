<template>
  <div >
      <router-view></router-view>
      <tab-bar-main>
        <!-- <slot></slot> -->
      </tab-bar-main>
  </div>
</template>

<script>
import TabBarMain from "components/content/tabbarMain/TabBarMain"

export default {
  name: 'APP',
  components: {
    TabBarMain
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
