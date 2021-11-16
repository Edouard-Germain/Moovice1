import React, { Component } from 'react'
import Nav from '../Component/Nav'
import Card from '../Component/Card'

class Weeklybattle extends Component{
    constructor(){
        super()
        this.state={
            movies : [],
            currentbattle : 0
        }
    }
    componentDidMount(){
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cb254efd33f7ae358227789f543e084c")
        .then(response => response.json())
        .then(result =>{
            this.setState({movies : result.results})
        })
    }
    handleClick =() => {
        
      this.setState({currentbattle: this.state.currentbattle +2})      // Find qui va retrouver l'index des deux prochaines cards à afficher : ( index movie + 2)
        
    }
    render(){
        console.log(this.state.movies)
        console.log(this.state.currentbattle)
        return(
        <>
            <Nav></Nav>
            <h1>Weekly-Battle</h1>
            {this.state.movies.slice(this.state.currentbattle,2).map((movie)=>(
            <Card onClick = {this.handleClick} movie = {movie}></Card>
            ))}

        </>
        )}
}
export default Weeklybattle