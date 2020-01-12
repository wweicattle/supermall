import Vue from "vue";
import vuerouter from "vue-router";
const home = () => import("views/home/Home");
const cart = () => import("views/cart/Cart");
const profile = () => import("views/profile/Profile");
const sort = () => import("views/sort/Sort");

// 安装插件
Vue.use(vuerouter);


const routes = [
    {
        path: "",
        redirect: "/home"
    },
    {
        path: "/home",
        component: home,
        meta: {
            name: "wuwei"
        }
    },
    {
        path: "/cart",
        component: cart,
    },
    {
        path: "/sort",
        component: sort,
    },
    {
        path: "/profile",
        component: profile,
    },
];

const router = new vuerouter({
    routes,
    mode:"history"


})

export default router;