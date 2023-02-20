import React from 'react'
import Actions from './Actions'
import IMDBFiltter from './IMDBFiltter'
import SearchMobile from './SearchMobile'
import SelectFiltter from './SelectFiltter'
import YearFilter from './YearFiltter'
import  data from '../../../data'

const FilterSlidar = ({inner}) => {

const { filters } = data





  return ( 
    <>
     {/* FilterSidebar */}
     <div className={inner ? 'FilterSidebar IsSStiky' : 'FilterSidebar'}>
     {/* SearchMobile */}
      <SearchMobile />
      

        {/* select filtter */}
        <SelectFiltter head={filters.categories.head} hint={filters.categories.hint} all={filters.categories.all} list={filters.categories.list}/>

    
    
        {/* select filtter */}
        <SelectFiltter head={filters.types.head} hint={filters.types.hint} all={filters.types.all} list={filters.types.list}/>

    
    
        {/* select filtter */}
        <SelectFiltter head={filters.qualities.head} hint={filters.qualities.hint} all={filters.qualities.all} list={filters.qualities.list}/>

    
    
        {/* select filtter */}
        <SelectFiltter head={filters.countries.head} hint={filters.countries.hint} all={filters.countries.all} list={filters.countries.list}/>

    

    
        {/* select filtter */}
        <SelectFiltter head={filters.languages.head} hint={filters.languages.hint} all={filters.languages.all} list={filters.languages.list}/>

    


      {/* year filtter */}
      <YearFilter />

      {/* IMDB filtter */} 
      <IMDBFiltter />

    {/* actions */}
    <Actions />

   </div>
   </>
  )

}

export default FilterSlidar