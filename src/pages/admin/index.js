import React, { Component } from 'react'
import {Layout} from "antd"
import LeftNav from "./../../components/leftNav"
import Header from "./../../components/header/index"
const {Footer,Sider,Content} = Layout;
class Admin extends Component {
    render () {
        return (
            <Layout style={{height:"100%"}}>
                <Sider >
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Header/>
                    <Content style={{ margin: '20px'}}>
                       {this.props.children}
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