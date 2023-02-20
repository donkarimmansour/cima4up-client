
const RelatedSection = () => {

    return (
      <div className="RelatedSection">
      <h4> 
        <i className="ion ion-md-star-half" />
        <strong>ربّما يعجبك ايضاََ</strong>
        <a className="RelatedSectionMore" href="#">المزيد
          <i className="ion ion-ios-arrow-round-back" />
        </a>
      </h4>
      {/* SidebarBoxes */}
      <div className="SidebarBoxes" data-page-url="#" id="BlockFilter" data-metakey="latest" data-category={385} data-genre="%d8%a7%d9%83%d8%b4%d9%86,%d8%af%d8%b1%d8%a7%d9%85%d8%a7,%d8%ae%d9%8a%d8%a7%d9%84-%d8%b9%d9%84%d9%85%d9%89" data-filter-type="term" data-selected="series" data-changelinks="false" data-live="F" data-page={42}>
        {/* BoxItem */}
        <div className="BoxItem ">
          <div className="ImageContainer">
            <div className="absolute" />
            <img className="imgLoader loaded" data-img="https://www.cima4up.life/wp-content/uploads/2017/11/Absentia-S01E10.jpg" alt="Absentia S01" src="https://www.cima4up.life/wp-content/uploads/2017/11/Absentia-S01E10.jpg" />
            <div className="ContentHover">
              <h2>Absentia S01<strong>2017</strong>
              </h2>
              <ul className="ListTitle">
                <li className="IMDBTOP ">7.9</li>
                <li>جريمة</li>
              </ul>
            </div>
            <div className="ButtonsArea">
              <a title="Absentia S01" href="#">
                <i className="ion-md-play-circle" />
                <span>شاهد الان
                </span>
              </a>
              <div className="AddToNeeds" data-id={37957}>
                <i className="ion-md-time" />
                <span>شاهد لاحقا</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
               
    ) 


  }
  
  export default RelatedSection