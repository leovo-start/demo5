import Mock from "mockjs"
Mock.setup({timeout:2000})
let url="https://easy-mock.com/mock/5e79a06c1c4fd747cbb0efe7/mockapi/open_city"
Mock.mock(RegExp(url+".*"),"get",function(data){
        return Mock.mock({
        "code": 0,
        "message": "",
        "result":{
          "page|1-9":1,
          "page_size":10,
          "total_count":85,
          "page_count":9,
         "item_list|10": [{
          "id|+1": 1,
          "order_sn": /T180[0-9]{6}/,
          "bike_sn":800116090, 
          "user_name": "@cname",
          "mobile": /1[0-9]{10}/,
          "distance": 2000,
          "total_time":4000,
          "status|1-2":1,
          "start_time":"@datetime",
          "end_time":"@datetime",
          "total_fee": 1000,
          "user_pay":300,
        }],
        },
    })
})