import React, { Component } from 'react'
import {Link,withRouter} from "react-router-dom"
import {Menu,Icon} from "antd"
import "./index.less"
import Img from "./../../assets/logo-ant.svg"
import MenuConfig from "./../../config/menuConfig"
const MenuItem = Menu.Item;
const {SubMenu} = Menu;
class LeftNav extends Component {

   componentWillMount(){
    const menu = this.renderMenu(MenuConfig)
    this.setState({menu})
   }  
    //获取key值
   renderMenu = (data) => {
   return data.map((item)=>{
       if(item.children){
          return   <SubMenu 
          title={
              <span>
                <Icon type={item.icon}/> 
                 {item.title}  
              </span>
           }
           key={item.key} 
          >
              {this.renderMenu(item.children)}
          </SubMenu>
       }
       return ( 
           <MenuItem title={item.title} key={item.key}>
             <Link to={item.key}>
                 <Icon type={item.icon}/> {item.title}
            </Link>
          </MenuItem>
       )
   })
   }
    //点击切换 
    handleClick = () =>{
        
    }
    render () {
        const selectKey = this.props.location.pathname;
        console.log(this.props)
        return (
            <div className="left-nav">
                <Link className="left-nav-link" to="/home">
                    <img src={Img} alt=""/>
                     <h1>后台管理系统</h1>
                </Link>
                <Menu  defaultSelectedKeys={[selectKey]} theme="dark"
                onClick={this.handleClick}
                >
                    {this.state.menu}
                </Menu>
            </div>
        )
    }
}

export default withRouter(LeftNav);