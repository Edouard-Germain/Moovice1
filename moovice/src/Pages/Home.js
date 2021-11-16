import React, { Component } from 'react'
import Nav from '../Component/Nav'
import { BrowserRouter, Switch, Route } from "react-router-dom"

class Home extends Component{
    // constructor(){
    //     super()
    // }
    render(){
        return(
        <>
            <h1>Home</h1>
            <Nav></Nav>
        </>
    )}
}
export default Home