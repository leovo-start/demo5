import React, { Component } from 'react'
import ReactEcharts from "echarts-for-react"
import echarts from "echarts"
import {Card} from "antd"
class Line extends Component {

     Option = () =>{
      let option = {
        title:{
        text:"骑行订单",
        },
        tooltip:{
            trigger:"axis",
        },
        legend:{
            data:["OFO订单量","摩拜订单量"]
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            name:"OFO订单量",
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
        },
        {
            name:"摩拜订单量",
            data: [850, 1500, 5000, 3000, 1200, 1221, 421],
            type: 'line',
        }
    ]
    };
    return option;
    }
    render () {
        return (
            <div>
                <Card title="折线图">
                    <ReactEcharts option={this.Option()}/>
                </Card>
            </div>
        )
    }
}

export default Line