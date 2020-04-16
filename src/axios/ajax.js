import axios from "axios"
import qs from "qs"
axios.interceptors.request.use((data)=>{
   const {method,data} = data;

   //处理post请求  例如 a=1&b=2
    if(method.toLowerCase() === "post" && typeof data ==="object"){
      data.data = qs.stringify(data);
    }

    return  data;
})

export default axios;