import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store";
import roast from "./components/common/roast";
Vue.use(roast);
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue();
new Vue({
  render: h => h(App),
  router,
  store,
  mounted(){
  }
}).$mount('#app')
