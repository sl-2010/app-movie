import React from "react";
import { moviesData } from "../moviesData";
import MovieItem from "./MovieItem";
class App extends React.Component {
  constructor() {
    super()

    this.state = {
      movies: moviesData,
      moviesWillWatch: []
    }
  }

  removeMovie = movie => {
    const updateMovies = this.state.movies
    .filter(it => it.id !== movie.id)
    this.setState({
      movies: updateMovies
    })
  }

  addMovieToWillWatch = movie => {
    const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie]
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    })
  }

  removeMovieFromWillWatch = movie => {
    const updateMoviesWillWatch = this.state.moviesWillWatch
    .filter(it => it.id !== movie.id)
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    })
  }

  render(props) {
    console.log(this)
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            {this.state.movies.map(movie => {
            return <MovieItem
              key={movie.id}
              movie={movie}
              removeMovie={this.removeMovie}
              addMovieToWillWatch={this.addMovieToWillWatch}
              removeMovieFromWillWatch={this.removeMovieFromWillWatch}/>
            })}
          </div>
          <div className="col-3">
            <p>Will Watch: {this.state.moviesWillWatch.length}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
