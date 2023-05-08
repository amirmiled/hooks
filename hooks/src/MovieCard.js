import React from 'react'
import "./MovieCard.css"
import {Link} from 'react-router-dom'
import StarRatingComponent from 'react-star-rating-component';


const MovieCard = ({movie}) => {
  return (
    <div class="movie_card" id="bright">
    <div class="info_section">
      <div class="movie_header">
        <img class="locandina" src={movie.main_img}/>
        <h1>{movie.title}</h1>
        <span class="minutes">{movie.duration}</span>
        <p class="type">{movie.genre}</p>
      </div>
      <div class="movie_desc">
        <p class="text">
            {movie.description}
        </p>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movie.rate}
        />
        <Link to={`/movie/${movie.id}`}> trailer </Link>
      </div>
    </div>

    


    <div class="blur_back bright_back"></div>
  </div> 
  )
}

export default MovieCard
