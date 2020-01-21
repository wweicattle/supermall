import Vuex from "vuex";
import Vue from "vue";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import modules from "./module";
import {add_to,add_count} from "./const"
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        cartList: [],
    },
    mutations,
    actions,
    getters

    

})


export default store;
