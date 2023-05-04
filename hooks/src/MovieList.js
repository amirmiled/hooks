import React from 'react'
import MovieCard from './MovieCard'
import 'bootstrap/dist/css/bootstrap.min.css';



const MovieList = ({movies}) => {
  
  return (
    <div>
    
        {movies.map((el) => 
          <MovieCard movie={el}/>)}
        
        
    </div>
  )
}

export default MovieList
