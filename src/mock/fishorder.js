import Mock from "mockjs"
Mock.setup({timeout:2000})
let url="https://easy-mock.com/mock/5e79a06c1c4fd747cbb0efe7/mockapi/fish_order"
Mock.mock(RegExp(url+".*"),"get",function(data){
        return Mock.mock({
        "code": 0,
        "message": "",
        "result":"Ok",
    })
})