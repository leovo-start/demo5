import React, { Component } from 'react'
import {Card} from "antd"
import ReactEcharts from "echarts-for-react"
import echarts from "echarts"
export default class Bar extends Component {

    Option = () =>{
     let option = {
            title: {
                text: '单车数量'
            },
            tooltip: {
           // trigger:"axis"    
            },
            legend: {
                data:['销量',"膜拜"]
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {
                type:"value"
            },
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            },
            {
                name: '膜拜',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }
        ]
        };
        return option;
    }

    render() {
        return (
           <div>
            <Card title="柱形图表之一">
               <ReactEcharts  option={this.Option()} style={{height:500}}/>
             </Card>
           </div>
        )
    }
}
