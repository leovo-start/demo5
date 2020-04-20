import React, { Component } from 'react'
import {Table,Card,Button,Modal} from "antd"
import "../../mock/basic"
import axios from "./../../axios"
export default class Tabled extends Component {
    
    state ={
    dataSource : [],
    loading:false,
    showStatus:0,  //0 不显示 1添加 2修改
    }
    params={
        page:1
    }
    componentDidMount(){
    this.requestList();
    }
    requestList = () =>{
      this.setState({loading:true})   
      axios.ajax({
        url:"/table/list",
        data:{
            page:this.params.page,
        }
      }).then((res)=>{
        this.setState({loading:false})
         if(res.code === 0){
         res.result.list.map((item,index)=>{
            return   item.key = index;
           })  
        this.setState({dataSource:res.result.list})           
         } 
      })  
    }   
    

    handleOk = () =>{
    
    }
    render() {
    
     const columns = [
     {
     title:"id",
     dataIndex:"id",
     },
     {
     title:"用户名",
     dataIndex:"userName",
     },
     {
     title:"性别",
     dataIndex:"sex",
     render(item){
     return item===1?"男":"女"
     }
     },
    {
     title:"状态",
     dataIndex:"state",
     render(state){
     return state===1?"工作中":"休息中"
     }
     },
     {
     title:"地址",
     dataIndex:"address",
     },
    {
     title:"删除",
     dataIndex:"remove",
     }
     ]
     const extra = [
        <Button style={{marginRight:10}} key="1"
         onClick={()=>this.setState({ showStatus: 1 })}
        >添加</Button>,
        <Button  key="2">查找</Button>
     ]
        let {dataSource,loading,showStatus} = this.state;
        return (
            <div>
               <Card title="表格" extra={extra} style={{cursor:"pointer"}}>
                    <Table
                      bordered = {true}
                      loading= {loading}
                      columns ={columns}
                      dataSource ={dataSource}
                    />
               </Card>
               <Modal
               title={showStatus === 1?"添加":"修改"}
               visible={showStatus!== 0}
               onOk={this.handleOk}
               onCancel={()=>this.setState({showStatus:0})}
               > 
               </Modal>
            </div>
        )
    }
}
