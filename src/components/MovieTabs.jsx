import React from "react";
// import "../style.css"

const MovieTabs = (props) => {
  const { sort_by, updateSortBy } = props
  const handleClick = value => () => {
    return updateSortBy(value)
  }
  const getClassName = value => () => {
    return `nav-link ${sort_by === value ? "active" : ""}`
  }

  return (
    <div>
      <h4>Sort by</h4>
      <ul className="tabs nav nav-pills col-3">
        <li className="nav-item tab">
          <div
          className={getClassName("popularity.desc")}
          onClick={handleClick("popularity.desc")}
          >
            Popularity
          </div>
        </li>
        <li className="nav-item">
          <div
            className={getClassName("release_date.desc")}
            onClick={handleClick("release_date.desc")}
          >
            Release
          </div>
        </li>
        <li className="nav-item">
          <div
            className={getClassName("vote_count")}
            onClick={handleClick("vote_count.desc")}
          >
            Vote
          </div>
        </li>
      </ul>
    </div>
  )
}

export default MovieTabs
