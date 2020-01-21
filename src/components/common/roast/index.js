import Roast from "./Roast"
const obj = {};
obj.install = function (Vue) {
    const RoastConstructor = Vue.extend(Roast);
    const roast = new RoastConstructor();
    roast.$mount(document.createElement("div"));
    document.body.appendChild(roast.$el)
    Vue.prototype.$roast = roast;
}
export default obj;


