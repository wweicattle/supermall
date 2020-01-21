<template>
  <div>
    <div class="check-all">
      <div class="all-icon">
        <check-button @click.native="allclick" :value="isAllchoose"></check-button>
        <span class="all">全选</span>
      </div>
      <div class="total">合计：￥{{totalPrice}}</div>
      <div class="computed">
        <span>去支付({{pricenum}})</span>
      </div>
    </div>
  </div>
</template>
<script>
import CheckButton from "components/content/CheckButton/CheckButton";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    CheckButton
  },
  data(){return {
  store:this.$store.getters,
  sd:null,
  }},
  methods: {
    allclick() {
      // 利用一个变量接受是否全选，若你直接修改全选 会因为动态修改的全选值而弄得乱七八糟
      this.sd=this.isAllchoose;
      // if(this.isAllchoose){
      //   this.store.cartlist.forEach(element => {
      //     element.checked=false;
      //   });
      // }else{
      //   this.store.cartlist.forEach(element => {
      //     element.checked=true;
      //   });
      // }
       this.store.cartlist.forEach(element => {
         element.checked=!this.sd;
         });
    }
  },

  computed: {
    ...mapGetters(["achiveChecked", "achiveLength","cartlist"]),
    totalPrice() {
      return (this.achiveChecked.reduce((acc, item) => {
        return acc + item.price * item.count;
      }, 0)).toFixed(2);
    },
    pricenum() {
      return this.achiveChecked.length;
    },
    isAllchoose() {
      if (this.achiveLength === 0) {
        return false;
      } else {
        return this.achiveChecked.length === this.achiveLength;
      }
    }
  },
  mounted() {}
};
</script>
<style  scoped>
.check-all {
  color: #000;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}
.all-icon {
  padding-left: 10px;
  width: 70px;
  display: flex;
  justify-content: space-around;
}
.total {
}
.computed {
  background: #ff5777;
  width: 80px;
  height: 100%;
  line-height: 40px;
  text-align: center;
}
</style>