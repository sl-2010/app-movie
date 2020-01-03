import React from 'react'
// import "../style.css"

const MovieTabs = props => {
  const { sort_by, updateSortBy } = props
  const handleClick = value => () => {
    return updateSortBy(value)
  }
  const getClassName = value => () => {
    return `nav-link ${sort_by === value ? 'active' : ''}`
  }

  return (
    <div>
      <h4>Sort by</h4>
      <ul className="tabs nav nav-pills col-3">
        <li className="nav-item tab">
          <button
            className={getClassName('popularity.desc')}
            onClick={handleClick('popularity.desc')}
          >
            Popularity
          </button>
        </li>
        <li className="nav-item">
          <button
            className={getClassName('release_date.desc')}
            onClick={handleClick('release_date.desc')}
          >
            Release
          </button>
        </li>
        <li className="nav-item">
          <button
            className={getClassName('vote_count.desc')}
            onClick={handleClick('vote_count.desc')}
          >
            Vote
          </button>
        </li>
      </ul>
    </div>
  )
}

export default MovieTabs
