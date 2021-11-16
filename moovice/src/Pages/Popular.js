import React, { Component } from 'react'
import Nav from '../Component/Nav'
import Card from '../Component/Card'

class Popular extends Component{
    constructor(){
        super()
        this.state = {
            movies : []
        }
    }
    componentDidMount(){
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cb254efd33f7ae358227789f543e084c")
        .then(response => response.json())
        .then(result =>{
            this.setState({movies : result.results})
        })
    }
    render(){
        console.log(this.state.movies)
        return(
        <>    
        <Nav></Nav>
        <h1>Popular</h1>
        {this.state.movies.map((movie)=>(
            <Card movie={movie}></Card>
        ))}
         

        </>
        )}
}
export default Popular