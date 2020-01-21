<template>
  <div id="cart">
    <nav-bar>
      <div slot="center" class="center">购物车({{length}})</div>
    </nav-bar>
    <Scroll class="scroll" ref="scroll">
      <cart-list></cart-list>
    </Scroll>
    <cart-bottom-nav class="bottom-nav">
      
    </cart-bottom-nav>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/Navbar";
import { mapGetters } from "vuex";
import CartList from "./childComps/CartList";
import Scroll from "components/common/scroll/scrollHome";
import CartBottomNav from "./childComps/CartBottomNav"
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    Scroll,
    CartBottomNav
  },
  computed: {
    ...mapGetters({
      length: "achiveLength"
    })
  },
  activated() {
    this.$refs.scroll.refresh();
  }
};
</script>
<style  scoped>
#cart {
  height: 100vh;
}
.center {
  height: 44px;
  line-height: 44px;
  color: #fff;
  text-align: center;
  background: var(--color-high-text);
}
.scroll {
  height: calc(100% - 133px);
  overflow: hidden;
}
.bottom-nav{
  height: 40px;
  background: rgb(247, 229, 229);
}
</style>