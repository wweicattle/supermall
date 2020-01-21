import { debounce } from "./utils"
export const itemMixin = {
    methods: {
        demo(position) {
            this.backValue = !(position.y > -700);
            this.scrollY = position.y;
            if (Math.abs(position.y) + 40 > this.swiperHeight) {
                this.isshow = true;
            } else {
                this.isshow = false;
            }
        }
    },
    mounted() {
        // 进行防抖设置
        const refresh = debounce(this.$refs.scroll.refresh, 500);
        this.imgrefresh = () => {
            refresh();
        };
        this.$bus.$on("loadimg", this.imgrefresh);
        console.log(333);

    }

}