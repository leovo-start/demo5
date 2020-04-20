import Mock from "mockjs"
Mock.setup({timeout:2000})
let url="https://easy-mock.com/mock/5e79a06c1c4fd747cbb0efe7/mockapi/table/list";
Mock.mock(RegExp(url+".*"),"get",function(data){
    return Mock.mock({
        "code": 0,
        "message": "",
        "result":{
         "list|20": [{
          "id|+1": 1,
          "userName": "@cname",
          "age|10-40":1, 
          "sex|1-2": 1,
          "state|1-2": 1,
          "interest|1-8": 1,
          "birthday": "2020-01-01",
          "address": "北京市海定区奥林匹克公园",
          "remove":"删除",
          "time": "09:00"
        }],
        page: 1,
        page_size: 10,
        total_count: 30
        },
    })
})