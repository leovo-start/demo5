import React, { Component } from 'react'
import {Card,Icon,Table,message,Button,Modal} from "antd"
import { reqCategorys,reqAddCategory } from '../../axios';
import {TButton} from "./../../components/Button"
import AddUpdateForm from "./../../components/TableForm"
export default class Catepory extends Component {

    state = {
        category:[],
        loading:false,
        showStatus:0,  //0不显示  1显示添加 2显示修改
    }

    initalColumns = () =>{
         this.columns = [
            {
              title: '分类名称',
              dataIndex: 'name',
              key: 'name',
            },  
            {
              title: '操作',
              width:300,
              render: (category) => <TButton onClick={() => {
              this.category = category // 保存当前分类, 其它地方都可以读取到
              this.setState({ showStatus: 2})
        }}>修改分类</TButton>
            },
          ];
    }
            getCategory = async () => {
            this.setState({ loading: true })
            const result = await reqCategorys();
            this.setState({ loading: false })   
            console.log(result)
           // if(result.status === 0){
            const category = result.data;
            this.setState({category})
            //}else{
            //message.error('获取分类列表失败了');
           // }
            }
         //添加
         handleOk = () =>{
         this.form.validateFields(async(err,value)=>{
            if(!err){
             const  {categoryName} = value;
             const result = await reqAddCategory(categoryName);  
                if(result.status === 0){
                    this.getCategory()
                }else{
                    message.error("添加失败")
                }
            }
         })
         }
        //关闭
        handleCancel = () =>{
        this.setState({ showStatus: 0})    
        } 
          
    componentWillMount(){
     this.initalColumns();  
    }
    componentDidMount(){
    this.getCategory();
    }
    render() {

        const extra = (
            <Button type="primary" onClick={()=>this.setState({showStatus:1})}>
             <Icon type="plus"/>添加  
            </Button>
           
        )
        let { category,loading,showStatus} = this.state;


        return (
            <div>
                <Card extra={extra}>
                    <Table 
                     bordered={true}
                     loading={loading}
                     columns={this.columns}
                     dataSource={category}
                     pagination={{ defaultPageSize: 6, showQuickJumper: true}}
                    />
                    <Modal
                    title={showStatus ===1?"添加分类":"修改分类"}
                    visible={showStatus!==0}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    >
                    <AddUpdateForm setForm={form => this.form =form} />
                    </Modal>
                </Card>
            </div>
        )
    }
}
