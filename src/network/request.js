import axios from "axios";
export function request(confi) {
    const instance = axios.create({
        baseURL: "http://123.207.32.32:8000/api/hy",
        timeout: 2000
    });
    instance.interceptors.response.use(config=>{
        return config.data;
    },err=>{
        console.log("sd");
    })

    return  instance(confi);

}