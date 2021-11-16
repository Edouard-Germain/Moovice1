import React, { Component } from 'react'
import Popular from '../Pages/Popular'

class Card extends Component{
    render(){
        const { movie } = this.props
        return(
            <>
            <div>
                
               
                   <li>
                       <h1> {movie.title}</h1>
                       <img src="https://image.tmdb.org/t/p/w300/${movie.poster_path}"/>
                       <h4>{movie.release_date}</h4>
                       <p>{movie.overview}</p>
                   </li>


            

            </div>
            </>
        )
    }
}
export default Card
