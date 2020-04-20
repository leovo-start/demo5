import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import {Card} from "antd"
export default class Pic extends Component {

    Option = () =>{
     let option = {
        backgroundColor: '#2cc',
        title: {
            text: '用户骑行订单',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#ccc'
            }
        },
        legend:{
            orient:"vertical",
            right:10,
            top:20,
            bottom:20,
            data:["周一","周二","周三","周四","周五","周六","周日"],
            color:"#fff"
            },    
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
    
        visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series: [
            {
                name: '订单量',
                type: 'pie',
                data: [
                    {value: 335, name: '周一'},
                    {value: 310, name: '周二'},
                    {value: 274, name: '周三'},
                    {value: 235, name: '周四'},
                    {value: 300, name: '周五'},
                    {value: 400, name: '周六'},
                    {value: 450, name: '周日'}
                ].sort(function (a, b) { return a.value - b.value; }),
                roseType: 'radius',
                label: {
                    color: 'rgba(255, 255, 255, 0.3)'
                },
                labelLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                },
            }
        ]
    };
     return option;
    }

    render() {
        return (
            <div>
                <Card title="饼状图">
                    <ReactEcharts  option={this.Option()}/>
                </Card>
            </div>
        )
    }
}
