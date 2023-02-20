import React from 'react'
import BoxItem from './BoxItem'
import BoxSectionTitle from './BoxSectionTitle'
import MoreBtn from './MoreBtn'
import  data from '../../../data'
 
const MainPageRight = () => { 

  const { Movies } = data  
 
  return (
    <div className="MainPageRight"> 
      <div className="CategoriesSections BoxesInside">
        {/* BoxItem */}
        {Movies && Movies.length > 0 && Movies.map((movie , mi) => { if(mi >= 10) return
          return  <BoxItem Movie={movie} key={mi}  />
        })}
        {/* BoxSectionTitle */}
        <BoxSectionTitle />
      </div>
      {/* more btn */}
      <MoreBtn />
    </div>

  )

}

export default MainPageRight 