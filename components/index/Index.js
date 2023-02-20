import dynamic from 'next/dynamic'
import React from 'react'
import data from '../../data'
import Footer from '../footer/Footer'
import Ads from './Ads'
import BottomBar from './bottomBar/BottomBar'
import FilterSlidar from './filtter/FilterSidebar'
import BoxItem from './MainPageRight/BoxItem'
const Hotlinks = dynamic(() => import("./Hotlinks"),
  { ssr: false }
)     
const SliderSection = dynamic(() => import("./slider/SliderSection"),
  { ssr: false }
)                                               
 

const Index = () => {
    
  const { Movies } = data  

  return (
      //  {/* PageContainer */}
       <div className="PageContainer" id="MoviesColor">

       {/* SliderSection */}
        <SliderSection />
 
     
       <div className="MainPage">
         {/* FilterSidebar */}
         <FilterSlidar inner={false}/>
         
         {/* bottomBar */}
         <BottomBar inner={false}/>

       
         <div className="NewSections">
          <div className="SetItems">

            {Movies && Movies.length > 0 && Movies.map((movie, mi) => {
              if (mi >= 10) return
              return <BoxItem Movie={movie} key={mi} />
            })}

            {/* Hotlinks */}
            <Hotlinks />

            
            {Movies && Movies.length > 0 && Movies.map((movie, mi) => {
              if (mi >= 10) return
              return <BoxItem Movie={movie} key={mi}  />
            })}

             {/* Hotlinks */}
             <Hotlinks />

          </div>
        </div>


            
         {/* ads */}
         <Ads />

         
       </div>
        
        
       <Footer />
     </div>
   
  )

}

export default Index