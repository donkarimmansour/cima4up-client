import React from 'react'
import SliderBox from './SliderBox'
import  data from '../../../data'
import OwlCarousel from 'react-owl-carousel-rtl';

const SliderSection = () => {

  const { Movies } = data

  return (
    <div className="SliderSection">

      {/* SliderBox */}

      <OwlCarousel
        className="InnserCarusel"
        smartSpeed={200}
        nav={true}
        items={5}
        mouseDrag={false}
        slideBy={1}
        loop={true}
        rtl={true}
        navText={["<a class='Slides-prev'><i class='ion ion-ios-arrow-back'></i></a>", "<a class='Slides-next'><i class='ion ion-ios-arrow-forward'></i></a>"]}
        responsive={{ 320: { items: 1 }, 500: { items: 2 }, 970: { items: 3 }, 1000: { items: 4 }, 1200: { items: 5 } }}
      >



        {Movies && Movies.length > 0 && Movies.map((movie, mi) => {
          if (mi >= 10) return
          return <SliderBox Movie={movie} key={mi} />
        })}


      </OwlCarousel>


    </div>


  )

}

export default SliderSection