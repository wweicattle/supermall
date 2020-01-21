import {add_to,add_count} from "./const"

export default {
    [add_to](state, item) {
        item.checked=false;
        state.cartList.push(item);
    },
    [add_count](state, index) {
        state.cartList[index].count++;
    }
};