import React from "react";
import PropTypes from "prop-types";
import "./movie.css";


function Movie({id, year, title, summary, poster,genres}) {
    return(
         <div class = "movie">
             <img src = {poster} alt = {title} title= {title}></img>
             <div class = "movie_data">
                <h3 class = "movie_title">{title}</h3>
                <h5 class = "movie_year">{year}</h5>
                <p class = "movie_summary">{summary.slice(0,140)}</p>
                <ul class = "movie__genres">{genres.map((genre,index) =><li key = {index} class = "genres_genre">{genre}</li>)}</ul>
             </div>
        </div>
    )
}



Movie.prototype = {
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;