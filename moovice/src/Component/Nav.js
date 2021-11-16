import React, { Component } from 'react'
import { Link } from "react-router-dom"


class Nav extends Component{
    // constructor(){
    //     super()
    // }
    render(){
        return (
           <div>     
            <Link to='/'>Home</Link>
            <Link to='/Favorites'>Favorites</Link>
            <Link to='/Popular'>Popular</Link>
            <Link to='/Weeklybattle'>WeeklyBattle</Link>
            <Link to='Weekly'>Weekly</Link>
            <Link to ='*'>Error 404</Link>
            </div>

)}
}
export default Nav