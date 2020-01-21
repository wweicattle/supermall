import {add_to,add_count} from "./const"

let actions = {
    addCartList(context, item) {
        return new Promise((res,rej)=>{
            let index = context.state.cartList.findIndex((val) => {
                return item.iid === val.iid;
            })
            if (index === -1) {
                item.count = 1;
                context.commit(add_to, item)
                res("添加商品成功！")
            } else {
                context.commit(add_count, index);
                res("商品数量加1成功！");
            }
        })
    }
};


export default actions;