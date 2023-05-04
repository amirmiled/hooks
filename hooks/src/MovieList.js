import React, { useState } from 'react'
import MovieCard from './MovieCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './Add';


const MovieList = ({movies, addMovie}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
    <button onClick={handleShow}>add</button>
     <Add show={show} handleClose={handleClose} addMovie={addMovie}/>
        {movies.map((el) => 
          <MovieCard movie={el}/>)}
        
        
    </div>
  )
}

export default MovieList
