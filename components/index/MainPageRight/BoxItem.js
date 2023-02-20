import Image from "next/image";
import React from 'react'

const BoxItem = ({Movie}) => {

  const {Title , Poster , Quality , Year , Rating , Types} = Movie

  return ( 
    <div className="BoxItem">                          
      <div className="ImageContainer">
        <div className="absolute">
          <span className="qualityname">{Quality}</span>
        </div>  
        <Image
          className="imgLoader loaded"
          alt="Other Monsters"
          src={Poster} layout='raw' width={500} height={500}
        />
        <div className="ContentHover">
          <h2>
            {Title}<strong>({Year})</strong>
          </h2>
          <ul className="ListTitle">
            <li className="IMDBTOP StarHalf">{Rating}</li>
            <li>{Types.length > 0 && Types[0]}</li>
          </ul>
        </div>
        <div className="ButtonsArea">
          <a title="Other Monsters" href="#">
            <i className="ion-md-play-circle" />
            <span>شاهد الان</span>
          </a>
          <div className="AddToNeeds">
            <i className="ion-md-time" />
            <span>شاهد لاحقا</span>
          </div>
        </div>
      </div>
    </div>

  )

}

export default BoxItem