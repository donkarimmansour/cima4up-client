import React from 'react'
import Footer from '../footer/Footer'
import Ads from './Ads'
import BottomBar from './bottomBar/BottomBar'
import Breadcrumb from './Breadcrumb'
import FilterSlidar from './filtter/FilterSidebar'
import MainPageRight from './MainPageRight/MainPageRight'
import Tabs from './Tabs'
import dynamic from 'next/dynamic'
const StikyBottom = dynamic(() => import("./StikyBottom"),
  { ssr: false }
)
const SliderSection = dynamic(() => import("./slider/SliderSection"),
  { ssr: false }
)                                               
 


const Index = () => { 
    
  return (
      //  {/* PageContainer */}
       <div className="PageContainer" id="MoviesColor">
 
       {/* SliderSection */}
        <SliderSection />
 
     
       <div className="MainPage">
         {/* FilterSidebar */}
         <FilterSlidar inner={true}/>
         
         {/* bottomBar */}
         <BottomBar inner={true}/>


   {/* container */}

   <div className="container">
         
            
         <div className="SmartSearch">
           {/* Tabs */}
           <Tabs />

           {/* Breadcrumb */}
           <Breadcrumb />

         </div>
        
        
        
         {/* MainPageRight */}
         <MainPageRight />

      

       </div>

           
        {/* ads */}
        <Ads />

        {/* StikyBottom */}
        <StikyBottom />
        
      </div>


     
       <Footer />
     </div>
   
  )

}

export default Index