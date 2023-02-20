
const BoxItem = () => {
  return (
    <div className="BoxItem ">
        <div className="ImageContainer" style={{backgroundColor: '#660000'}}>
          <div className="absolute">
            <span className="qualityname">WEB-DL</span>
          </div>
          <img className="imgLoader loaded" data-img="https://www.cima4up.life/wp-content/uploads/2022/12/aHollywood-Christmas.jpg" alt="A Hollywood Christmas" src="https://www.cima4up.life/wp-content/uploads/2022/12/aHollywood-Christmas.jpg" />
          <div className="ContentHover">
            <h2>A Hollywood Christmas<strong>(2022)</strong></h2>
            <ul className="ListTitle">
              <li className="IMDBTOP StarHalf">5.4</li>
              <li>91 min</li>
              <li>رومانسي</li>
            </ul>
          </div>
          <div className="ButtonsArea">
            <a title="A Hollywood Christmas" href="#">
              <i className="ion-md-play-circle" />
              <span>شاهد الان </span>
            </a>
            <div className="AddToNeeds Removefromneeds" data-id={328766}>
              <i className="ion-md-close" />
              <span> إزالة من قائمة المشاهدة</span>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default BoxItem