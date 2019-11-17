import React from "react";
// import { moviesData } from "../moviesData";
import MovieItem from "./MovieItem";
import MovieTabs from "./MovieTabs";
import { API_URL, API_KEY_3 } from "../utils/api"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      movies:[],
      moviesWillWatch: [],
      sort_by: "popularity.desc"
    }
    console.log('constructor')
  }

  componentDidMount(){
    console.log('did mount')
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}`).then((response) => {
      console.log("then")
      return response.json()
    }).then((data) => {
      console.log("data", data)
      this.setState({
        movies: data.results
      })
    })

    console.log("after fetch")
  }

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(it => it.id !== movie.id)
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
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(it => it.id !== movie.id)
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    })
  }

  updateSortBy = value => {
    this.setState({
      sort_by: value
    })
  }


  render(props) {
    console.log('render')
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              {this.state.movies.map(movie => {
                return (
                  <div className="col-6 mb-4" key={movie.id}>
                    <MovieItem
                      movie={movie}
                      removeMovie={this.removeMovie}
                      addMovieToWillWatch={this.addMovieToWillWatch}
                      removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                    />
                  </div>
                )
              })}
            </div>
          </div>
          <div className="col-3">
            <p>Will Watch: {this.state.moviesWillWatch.length}</p>
            <div className="col-9">
              <MovieTabs
                sort_by={this.state.sort_by}
                updateSortBy={this.updateSortBy}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
