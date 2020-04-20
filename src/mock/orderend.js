import Mock from "mockjs"
Mock.setup({timeout:2000})
let url="https://easy-mock.com/mock/5e79a06c1c4fd747cbb0efe7/mockapi/order_end"
Mock.mock(RegExp(url+".*"),"get",function(data){
        return Mock.mock({
        "code": 0,
        "message": "",
        "result":{
         " id":27296, 
          "bike_sn":800116116, 
          "battery":100,
          "start_time":"@datetime",
          "location":"北京市海淀区奥林匹克公园"
        },
    })
})