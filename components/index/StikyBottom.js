import React , {useEffect, useState} from 'react'
import OwlCarousel from 'react-owl-carousel-rtl';
import data from '../../data';

const StikyBottom = () => {

  const {Hotlinks} = data


  const [stick, setStick] = useState(false)

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 300) setStick(true)
      else setStick(false)
    }

    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])



  return (
    <div className={stick ? 'Hotlinks StikyBottom stickIT' : 'Hotlinks StikyBottom'}>

         <OwlCarousel className="HotlinksSlides MiniSliders"
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

        {Hotlinks.map((Hotlink, HLi) => {
          const Hl = Hotlink.split(' ')

          return (<li key={HLi}>
                    <a href="#" title={Hotlink}>
                      <em>{Hl[0]}</em> <span>{Hl[1]}</span>
                    </a>
                  </li>)
           })}

         </OwlCarousel> 

    </div>
  )

}

export default StikyBottom