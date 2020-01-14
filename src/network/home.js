import { request } from "./request";
export function achiveHomeData() {
    return request({
        url: "/home/multidata",
    })
}
export function achiveTab(type,page) {
    return request({
        url: '/home/data',
        params:{
            type,page
        }
    })
}
