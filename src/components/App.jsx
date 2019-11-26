import React from "react";
// import { moviesData } from "../moviesData";
import MovieItem from "./MovieItem";
import MovieTabs from "./MovieTabs";
import ButtonPages from "./ButtonPages";
import { API_URL, API_KEY_3 } from "../utils/api"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      movies:[],
      moviesWillWatch: [],
      sort_by: "popularity.desc",
      page: 1,
      pages: 1
    }
    console.log('constructor')
  }

  componentDidMount(){
    console.log('did mount')
    this.getMovies()

    console.log("after fetch")
  }

  componentDidUpdate(prevProps, prevState){
    console.log("did update")
    console.log("prev", prevProps, prevState)
    console.log("this", this.props, this.state)
    if (prevState.sort_by !== this.state.sort_by ||
      prevState.page !== this.state.page) {
      console.log("call api")
      this.getMovies()
    }
  }

  getMovies = () => {
    fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&page=${this.state.page}`)
    .then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({
        movies: data.results,
        page: data.page,
        pages: data.total_pages
      })
      console.log("total_pages", this.state.pages)
    })
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

  updatePage = value => {
    this.setState({
      page: value
    })
  }


  render(props) {
    console.log('render', this.state.sort_by)
    return (
      <div className="container">
        <div>
          <ButtonPages
            page={this.state.page}
            updatePage={this.updatePage}
            pages={this.state.pages}
          />
        </div>
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
                updateSortBy={this.updateSortBy}
                />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
