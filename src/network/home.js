import {request} from "./request";
export function achiveHomeData(){
    return request({
    url:"/home/multidata",
})
}
