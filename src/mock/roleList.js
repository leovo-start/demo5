import Mock from "mockjs"
Mock.setup({timeout:2000})
let url="https://easy-mock.com/mock/5e79a06c1c4fd747cbb0efe7/mockapi/role/list"
Mock.mock(RegExp(url+".*"),"get",function(data){
        return Mock.mock({
        "code": 0,
        "result": {
          "page": 1,
          "page_size": 10,
          "total_count": 25,
          "page_count": 3,
          "item_list|10":[{
          "id|+1":1,
          "status|0-1": 0,
          "user_id|+1": 1,
          "role_name": /(管理人员)|(客服专员)|(财务专员)|(市场专员)|(人力专员)|(研发)|(测试)|(系统管理员)/,
          "authorize_time": 1521270166000,
          "create_name":"@datetime",
          "authorize_user_name":"@cname",
          "menus":["/home", "/admin/ui/buttons", "/admin/ui/modals", "/admin/ui/loading", "/admin/ui/notice", "/admin/ui/message", "/admin/ui/tabs", "/admin/ui/gallery", "/admin/ui/carousel", "/ui"]
        }]
        }
    })
})