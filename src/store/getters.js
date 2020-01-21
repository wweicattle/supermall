export default {
        achiveLength(state){
            return state.cartList.length;
        },
        cartlist(state){
            return state.cartList;
        },
        achiveChecked(state){
            return state.cartList
            .filter(val => {
              return val.checked === true;
            })
        }
}