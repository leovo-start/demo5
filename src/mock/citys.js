import Mock from "mockjs"
Mock.setup({timeout:2000})
let url="https://easy-mock.com/mock/5e79a06c1c4fd747cbb0efe7/mockapi/city/open"
Mock.mock(RegExp(url+".*"),"get",function(data){
     console.log("Data",data.url)
    return Mock.mock({
        "code": 0,
        "result": "开通成功",
    })
})