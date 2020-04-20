import axios from "axios"
import qs from "qs"
import {message} from "antd"
axios.interceptors.request.use((config)=>{
   const {method,data} = config;
   //处理post请求  例如 a=1&b=2
    if(method.toLowerCase() === "post" && typeof data ==="object"){
      config.data = qs.stringify(data);
    }

    return  config;
})
axios.interceptors.response.use((response)=>{
  
    return response.data;
},(error)=>{
  message.error("请求出错" +error.message)
  
  return new Promise(()=>{})
})

export default axios;