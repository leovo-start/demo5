import jsonp from "jsonp"
import {message,Modal} from "antd"
import axios from "axios"
export const reqWeather = (city) =>{
     
    return new Promise((resolve,reject)=>{
        //成功resolve 失败reject
        const url =`http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
        jsonp(url,(error,data)=>{
           if(!error && data.error === 0 ){
            //成功的
            const {dayPictureUrl, weather} = data.results[0].weather_data[0]
            //resolve 只能传一个参数 可以使用解构 {dayPictureUrl, weather}
            resolve({dayPictureUrl, weather})
           }else{
            message.error("获取天气失败")
           } 
        })
    })
}
export default class Axios {
    static ajax(options){
        // let loading;
        // if(options.data && options.data.isShowLoading!==false){
        // loading=document.getElementById("ajaxLoading");
        // loading.style.display="block";
        // }
        let baseApi="https://easy-mock.com/mock/5e79a06c1c4fd747cbb0efe7/mockapi"
        return new Promise((resolve,reject)=>{
        axios({
        url:options.url,
        method:"get",
        baseURL:baseApi,
        timeout:'1000ms',
        params:(options.data && options.data.params)||""
        }).then((response)=>{
        // if(options.data && options.data.isShowLoading !==false){
        // loading=document.getElementById("ajaxLoading");
        // loading.style.display="none";
        // }  
        if(response.status === 200){
           let res=response.data;
           if(res.code === 0){
            resolve(res);
           }else{
            Modal.info({
            title:"提示",
            content:res.msg
            })
           }
        }else{
        reject(response.data);
        }
        })
        })
        }  
}
