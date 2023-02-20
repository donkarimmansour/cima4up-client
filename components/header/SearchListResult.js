import React from 'react'
import  data from '../../data'

const SearchListResult = () => {

  const { Movies } = data  


  return (<div 
      id="SearchListResult"
      className="SearchListResult1"
      style={{ display: "none" }}
    >
      <h2>
        نتائج البحث عن <strong>t</strong>
        <a href="#">
          مشاهدة المزيد <i className="fa fa-angle-left" />
        </a>
      </h2>
      <ul id="SearchInnerList">

        
      {Movies && Movies.length > 0 && Movies.map((movie, mi) => {
        if (mi >= 10) return
        return <li key={mi}>
          <div className="SearchThumb">
            <a href="#">
              <img src={movie.Poster} />
            </a>
          </div>
          <div className="SearchResultInner">
            <h1>
              <a href="#">{`مشا فيلم  ${movie.Year}  ${movie.Title} مترجم`}</a>
            </h1>
            <a className="GoWatchNow" href="#">
              مشاهدةالآن
              <i className="fa fa-angle-left" />
            </a>
          </div>
        </li>
      })}

      </ul>
    </div>
  )

}

export default SearchListResult