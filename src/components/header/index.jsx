import React, { Component } from 'react'
import {withRouter } from 'react-router-dom'
import {TButton} from "./../Button"
import {Modal} from "antd"
import "./index.less"
import { Time }  from "./../../utils"
import {reqWeather} from "./../../axios"
import menuList from "./../../config/menuConfig"
class Header extends Component {

     state = {
         userName : "李俊鹏",
         time:Time(Date.now()),
         dayPictureUrl:'',
         weather:"",
     }
     componentDidMount(){
     this.sid = setInterval(()=>{
     this.setState({
      time:Time(Date.now())
     })
     },1000)
     this.getWeather();
     }
     componentWillUnmount(){
      clearInterval(this.sid)
     }
      //获取天气信息

      getWeather = async () =>{
       const {dayPictureUrl,weather} = await reqWeather("北京"); 
        this.setState({dayPictureUrl,weather})
      }
     logout = () =>{
      Modal.confirm({
       title:"确认退出吗?",
       onOk(){
        console.log("ok") 
       },
       onCancel(){
       console.log("onCancel")
       }
      })
     }
     //根据路径请求
       getPath = () =>{
       let title = "";
       const path = this.props.location.pathname;
       menuList.forEach((item)=>{
         if(item.key === path){
            title = item.title;
         }else if(item.children){
         const Item = item.children.find(Item => path.indexOf(Item.key) === 0)  
         if (Item) {
            title = Item.title
          }
        }
       })
         return title;
       }
    render() {
        const title = this.getPath();
        const {time,dayPictureUrl,weather} = this.state;
        return (
            <div className="header">
                <div className="header-top">
                  欢迎,{this.state.userName}
                  <TButton onClick={this.logout}>退出</TButton>
                </div>
                <div className="header-bottom">
                   <div className="header-bottom-left">
                        {title}
                   </div>
                   <div className="header-bottom-right">
                        <span>{time}</span>
                        <img src={dayPictureUrl} alt=""/>
                        <span>{weather}</span>
                   </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Header)