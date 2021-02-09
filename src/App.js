import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component{

  state ={
    IsLoading: true,
    movies: []
  };
  getMovies = async() => {
    const {data:{data:{movies}}}  = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, IsLoading:false});

  }


  componentDidMount() {
    this.getMovies();
  }
 render() {
  const {IsLoading,movies} = this.state;
  return (
  <section class = "container">
    {IsLoading ? (
      <div class = "loader"> 
        <span class = "loader_text">Loading</span>
      </div>
    ) : (
      <div class = "movies">
        {movies.map(movie=> (
        <Movie
          key = {movie.id}
          id = {movie.id}
          year = {movie.year}
          title = {movie.title}
          summary = {movie.summary}
          poster = {movie.medium_cover_image}
          genres = {movie.genres}
        />
      ))}
    </div>
  )}
  </section>
   );
  }
}

export default App;
