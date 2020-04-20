import ajax from "./ajax"
import jsonp from "jsonp"
import {message} from "antd"
// //拦截器

export const reqLogin = (username,password) => {
    ajax.post('/api/login.json', {username, password})
}
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

//获取分类列表


export const reqCategorys = () => ajax.get('/api/category.json')


export const reqAddCategory = (categporyName) => ajax.post('/api/addcategory.json',{
   categporyName 
})