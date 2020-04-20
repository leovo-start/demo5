const menuList = [
    {
      title: '首页', 
      key: '/home', 
      icon: 'home', 
      public: true, 
    },
    {
      title: '商品',
      key: '/products',
      icon: 'appstore',
      children: [ 
        {
          title: '品类管理',
          key: '/category',
          icon: 'bars'
        },
        {
          title: '商品管理',
          key: '/product',
          icon: 'tool'
        },
      ]
    },
    {
      title: '表格',
      key: '/table',
      icon: 'safety',
    }, 
    {
      title: '城市管理',
      key: '/city',
      icon: 'safety',
    },
    {
      title: '订单管理',
      key: '/order',
      icon: 'safety',
    },
    {
      title: '员工管理',
      key: '/user',
      icon: 'safety',
    },
    {
      title: '车辆地图',
      key: '/bikeMap',
      icon: 'safety',
    },
    {
      title: '图形图表',
      key: '/charts',
      icon: 'area-chart',
      children: [
        {
          title: '柱形图',
          key: '/charts/bar',
          icon: 'bar-chart'
        },
        {
          title: '折线图',
          key: '/charts/line',
          icon: 'line-chart'
        },
        {
          title: '饼图',
          key: '/charts/pic',
          icon: 'pie-chart'
        },
      ]
    },
    {
      title: '权限设置',
      key: '/permission',
      icon: 'safety',
    },
  ]
  
  export default menuList