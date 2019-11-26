import React from "react";
import "../style.css"

class MovieItem extends React.Component {

  state = {
    willWatch: false,
    showDescription: false,
    like: false
  }


  // componentWillUnmount(){
  //   console.log("will unmount", this.props.movie.title )
  // }

  toggleOverview = ()=> {
    this.setState({
      showDescription: !this.state.showDescription
    })
  }

  handleLike = ()=> {
    this.setState({
      like: !this.state.like
    })
  }

  render () {
    const {
      movie,
      removeMovie,
      addMovieToWillWatch,
      removeMovieFromWillWatch
    } = this.props
    return (
      <div className="card">
        <img className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
            movie.poster_path}`}
          alt=""
        />
        <div className="card-body">
          <h6 className="card-title">{movie.title}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">Rating: {movie.vote_average}</p>

            {this.state.willWatch ? (
              <button type="button"
              className="btn btn-success"
              onClick={() => {
                this.setState({
                  willWatch: false
                })
                removeMovieFromWillWatch(movie)
              }}
              >
                Remove Will Watch
              </button>
              ) : (
              <button type="button"
                className="btn btn-secondary"
                onClick={() => {
                  this.setState({
                    willWatch: true
                  })
                  addMovieToWillWatch(movie)
                }}
              >
                Add Will Watch
              </button>
            )}

            <button type="button"
              onClick={removeMovie.bind(null, movie)}
            >
              Delete movie
            </button>
          </div>
        </div>
        <button type="button" onClick={this.toggleOverview}
        >
          Overview
        </button>
        <p>{this.state.showDescription ? <p>{movie.overview}</p> : null}</p>
        <button type="button"
        onClick={this.handleLike}
        className={this.state.like ? "btn--like" : ""}
        >
          like
        </button>
      </div>
    )
  }
}

export default MovieItem;
