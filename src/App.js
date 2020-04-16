import React, { Component } from 'react'
import {HashRouter as Router,Route ,Switch} from "react-router-dom"
import Login from "./pages/login"
import Admin from "./pages/admin"
export default class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
              <Route path="/login" component={Login}/>
              <Route path="/admin" component={Admin}/>
          </Switch>     
        </Router> 
    )
  }
}
