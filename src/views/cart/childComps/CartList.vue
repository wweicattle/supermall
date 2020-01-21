<template>
  <div class="cartlist">
      <cart-list-item v-for="(item,index) in cart" :itemInfo="item" :key="index" >
      </cart-list-item>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import CartListItem from "./CartListIem";
export default {
  name: "App",
  components: {
      CartListItem
  },
  computed: {
    ...mapGetters({
      cart: "cartlist"
    })
  },

  // methods:{
  //   clicka(){
  //     this.cart.checked=!this.cart.checked;
  //   }
  // }
};
</script>
<style  scoped>
</style>