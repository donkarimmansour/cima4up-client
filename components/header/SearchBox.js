import React from 'react'
import SearchListResult from './SearchListResult'

const SearchBox = () => {

  const SearchInput = (e) => {
    const query = e.target.value
    if (query.length === 0) {

    } else {

    }

  }

  return (<div className="Searching">
    <form action="#" method="GET">
      <input onChange={SearchInput}
        type="text"
        defaultValue=""
        id="SearchingInput"
        name="s"
        placeholder="إبحث في سيما فور أب ..  فيلم ، مسلسل ، ممثل ، سلسلة فيلم"
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
      />
      <button type="submit">
        <i className="icon ion-md-search" />
      </button>
      <div id="SearchListResult" className="SearchListResult1" />
    </form>
    {/* SearchListResult */}
    <SearchListResult />
   
   </div>
  )

}

export default SearchBox