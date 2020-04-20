import React, { Component } from 'react'
import Img from "./../../assets/logo-ant.svg"
import {Input,Icon,Form,Button,message} from "antd"
import {Redirect } from "react-router-dom"
import "./login.less"
import axios from "./../../axios"
import LocalStorage from "./../../utils"
const FormItem = Form.Item;
class Login extends Component {

    handleSubmit = e =>{
    e.preventDefault();
    //对表单所有字段统一验证
    this.props.form.validateFields((err,{username,password}) => {
       
       axios.ajax({
        url:"/api/login.json",
        data:{
         username,
         password   
        }
       }).then((res)=>{
          if(!err){
             if(res.status === 0){
                 const user = res.data;
                 LocalStorage.saveUser(user)
                this.props.history.replace('/')
                message.success('登陆成功!')      
             }else{
                message.error(res.msg);  
             }
          }
       })
      });
    }

    validatePwd = (rule,value,callback) =>{
        value = value.trim();
        if(!value){
        callback("密码不能为空")
     }else if(value.length<4){
         callback("密码不能小于4位");
     }else if(value.length>12){
        callback("密码不能大于12位");
     }else if(!/^[a-zA-Z0-9_]+$/.test(value)){
        callback("用户名必须是英文,数字或下划线");
     }else{
         callback(); //验证通过
     }

    }
    render () {
    const { getFieldDecorator } = this.props.form;
    const user = LocalStorage.getUser();
    console.log(user)
    if (user._id) {
      return <Redirect to="/login"/> 
    }  
        return (
            <div className="login">
                <div className="login-header">
                    <img src={Img}alt=""/>
                    <h1>后台管理系统</h1>
                </div>
                <div className="login-content">
                    <h1>用户登录</h1>
     <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
            {
            getFieldDecorator("username",{
            initialValue:"",
            rules:[
                { required: true, whitespace:true,message:"请输入用户名" },
                {min:4,message:"用户名不能小于4位"},
                {max:12,message:"用户名不能大于12位"},
                {pattern:/^[a-zA-Z0-9_]+$/,message:"用户名必须是英文,数字或下划线"},   
            ],
            })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
            )
        }
        </FormItem>
        <FormItem>
        {
            getFieldDecorator("password",{
            initialValue:"",
            rules:[
                { validator:this.validatePwd }    
            ],
            })(
            <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
            />
            )
         }
        </FormItem>
        <FormItem>
         <Button type="primary" htmlType="submit" className="login-form-button">登录 </Button>
        </FormItem>
      </Form>
                </div>
            </div>
        )
    }
}

export default Form.create()(Login);