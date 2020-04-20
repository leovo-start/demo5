import React, { Component } from 'react'
import {HashRouter as Router,Route,Switch} from "react-router-dom"
import Login from "./pages/login"
import Admin from "./pages/admin"
import Home from "./pages/home"
import Category from './pages/category'
import Product from './pages/product'
import Role from './pages/role'
import User from './pages/user'
import Bar from './pages/charts/bar'
import Line from './pages/charts/line'
import pic from "./pages/charts/pic"
export default class Routers extends Component {
  render() {
    return (
    <Router>
        <Admin>
          <Switch>
                    <Route path="/login" component={Login}/>
                    {/* <Route path="/admin" component={Admin}/> */}
                    <Route path="/home" component={Home}/>
                    <Route path='/category' component={Category} />
                    <Route path='/product' component={Product} />
                    <Route path='/role' component={Role} />
                    <Route path='/user' component={User} />
                    <Route path='/charts/bar' component={Bar} />
                    <Route path='/charts/line' component={Line} />
                    <Route path='/charts/pic' component={pic} />
              {/* <Redirect to="/home"/> */}
          </Switch>
        </Admin>  
    </Router> 
    )
  }
}
