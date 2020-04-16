import ajax from "./ajax"

const BASE = "";
//拦截器
export function reqLogin(username,password){
    ajax({
    method:"post",
    url: BASE + "/login",
    data:{
    username,
    password,
    }
    })
}
const name = "admin";
const pwd = "admin";
reqLogin(name,pwd)