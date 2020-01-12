<template>
  <div>
    <TabBar>
      <TabBarItem path="/home" >
        <img slot="img" src="~assets/img/tabbar/home.svg" alt />
        <img slot="img1" src="~assets/img/tabbar/home_active.svg" alt />
        <div slot="name">首页</div>
      </TabBarItem>
      <TabBarItem path="/sort" >
        <img slot="img" src="~assets/img/tabbar/category.svg" alt />
        <img slot="img1" src="~assets/img/tabbar/category_active.svg" alt />
        <div slot="name">分类</div>
      </TabBarItem>
      <TabBarItem path="/cart">
        <img slot="img" src="~assets/img/tabbar/shopcart.svg" alt />
        <img slot="img1" src="~assets/img/tabbar/shopcart_active.svg" alt />
        <div slot="name">购物车</div>
      </TabBarItem>
      <TabBarItem path="/profile">
        <img slot="img" src="~assets/img/tabbar/profile.svg" alt />
        <img slot="img1" src="~assets/img/tabbar/profile_active.svg" alt />
        <div slot="name">我的</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>
<script>
import TabBar from "components/common/tabbar/tabbar";
import TabBarItem from "components/common/tabbar/tabberItem";
                                                                         
export default {
  name: "tabbarMain",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>
<style  scoped>

</style>