import React from "react";
import "../style.css"

const ButtonPages = (props) => {
  const { page, pages, updatePage } = props
  const newPage = value => () => {
    return updatePage(value)
  }
  // const currentPage = value => () => {
  //   return `${props.page}`
  // }

    return (
      <div>
        <p>Page {page} out of {pages}</p>
          <div id="page" class="pager">
            <button type="button" onClick={newPage(page-1)}>Previous</button>
            <button type="button" onClick={newPage(page+1)}>Next</button>
          </div>
      </div>
    )
  }


export default ButtonPages