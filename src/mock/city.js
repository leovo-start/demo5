import Mock from "mockjs"
Mock.setup({timeout:2000})
let url="https://easy-mock.com/mock/5e79a06c1c4fd747cbb0efe7/mockapi/index_city"
Mock.mock(RegExp(url+".*"),"get",function(data){
        return Mock.mock({
        "code": 0,
        "message": "",
        "result":{
          "page":1,
          "page_size":10,
          "total_count":6,
         "item_list|10": [{
          "id|+1": 1,
          "name": "@city",
          "mode|1-2":1, 
          "op_mode|1-2": 1,
          "franchisee_id": 77,
          "franchisee_name": "松果自营",
          "city_admins|1-2":[{
           "user_name":"@cname",
           "user_id|+1":10001 
          }],
          "open_time": "@datetime",
          "sys_user_name":"@cname",
          "update_time": 1520476737000,
        }],
        },
    })
})