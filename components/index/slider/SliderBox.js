import React from 'react'

const SliderBox = ({Movie}) => {

  const {Title , Poster , Quality , Year , Rating , Types} = Movie

  return (
    <div className="SliderBox"> 
      <a
        title="Lou"
        className="SlidersImage" 
        href="#"
        style={{
          backgroundImage:
            "url(https://w.cima4up.link/wp-content/uploads/2022/09/Lou-2022.jpg)"
        }}
      >
        <div className="TheDSlider">
          <div className="TopDatea">
            <em>بجودة</em>
            <span>WEB-DL</span>
          </div>
        </div>
        <div className="ContentHover">
          <h2>
            Lou<strong>2022</strong>
          </h2>
          <ul className="ListTitle">
            <li className="IMDBTOP">
              <i className="ion-md-star-half" />
              5.9
            </li>
            <li>107 min</li>
            <li> اثارة , اكشن , جريمة</li>
          </ul>
          <div className="MiniContent">
            <p>
              تدور احداث فيلم Lou 2022 (رحلة لو) في اطار من الاكشن و الجريمة
              بعد تعرض ابنتها الصغيرة للاختطاف في ليلة...
            </p>
          </div>
        </div>
      </a>
      <div className="AddToNeeds">
        <i className="ion ion-md-add" /> مشاهدة لاحقاََ
      </div>
    </div>

  )

}

export default SliderBox