import React from 'react'
import data from '../../../data'
import OwlCarousel from 'react-owl-carousel-rtl';

const Swiber = () => {

   const {MarqueeSlides} = data





  return (
    <div className="DivMarquee">

      <OwlCarousel
           className="MarqueeSlides MiniSliders" 
           rtl={true}
           autoplay={true}
           autoplayTimeout={3000}
           autoplayHoverPause={true}
           autoWidth={true}
           margin={10}
           mouseDrag={false}
           loop={true}
           nav={true}
           navText ={ ["<a class='Slides-prev'><i class='ion ion-ios-arrow-back'></i></a>","<a class='Slides-next'><i class='ion ion-ios-arrow-forward'></i></a>"]}
          >  
     
        {MarqueeSlides.map((Marquee , Mi) => {
          return <a key={Mi} href="#">{Marquee}</a>
        })}

         </OwlCarousel> 

    </div>
  )

}

export default Swiber