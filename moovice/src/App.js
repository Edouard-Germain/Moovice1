import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from './Pages/Home'
import Favorites from './Pages/Favorites'
import Popular from './Pages/Popular'
import Weeklybattle from './Pages/Weekly-battle'
import Weekly from './Pages/Weekly'
import Notfound from './Pages/Error404'

class App extends Component  {
  render (){
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path ='/' component ={Home}></Route>
          <Route path ='/Favorites' component ={Favorites}></Route>
          <Route path ='/Popular' component ={Popular}></Route>
          <Route path='/Weeklybattle' component={Weeklybattle}></Route>
          <Route path='/Weekly' component ={Weekly}></Route>
          <Route path='*' component={Notfound}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}
export default App