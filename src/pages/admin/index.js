import React, { Component } from 'react'
import {Layout} from "antd"
import {Redirect, Switch, Route } from "react-router-dom"
import LeftNav from "./../../components/leftNav"
import Header from "./../../components/header/index"
import Home from '../home'
import Category from '../category'
import Product from '../order'
import User from '../user'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pic from '../charts/pic'
import Tabled from "../table"
import Bike from "../bike"
import Order from "../order"
import City from "../city"
import Role from "../role"
import LocalStorage from "./../../utils"
const {Footer,Sider,Content} = Layout;
class Admin extends Component {
    render () {
        let user = LocalStorage.getUser();
        if (!user._id) {
          return <Redirect to="/login"/> 
        }  
        return (
            <Layout style={{height:"100%"}}>
                <Sider >
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Header/>
                    <Content style={{ margin: '20px'}}>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path='/category' component={Category} />
                <Route path='/product' component={Product} />
                <Route path='/table' component={Tabled} />
                <Route path='/role' component={Role} />
                <Route path='/user' component={User} />
                <Route path='/order' component={Order} />
                <Route path='/bikeMap' component={Bike} />
                <Route path='/city' component={City} />
                <Route path='/charts/bar' component={Bar} />
                <Route path='/charts/line' component={Line} />
                <Route path='/charts/pie' component={Pic} />
                <Redirect to="/home"/>
            </Switch>
                    </Content>
                    <Footer style={{textAlign:"center"}}>
                        推荐使用React来构建页面,可以获得更佳操作体验
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}

export default Admin