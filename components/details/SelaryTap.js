
const SelaryTap = () => {

    return (
      <div className="AsideContext selaryTap" id="selaryTap">
      <h2> <a href="#" title="مواسم مسلسل See">مواسم مسلسل See</a></h2>
      <div className="BoxesInside" data-finish="true">
        <div className="FullSeasson">
          <a href="#" title="See S03">
            <div className="SeasThumb" style={{backgroundColor: '#330000'}}>
              <img className="imgLoader loaded" data-img="https://www.cima4up.life/wp-content/uploads/2022/09/See-S03.jpg" alt="See S03" src="https://www.cima4up.life/wp-content/uploads/2022/09/See-S03.jpg" />
            </div>
            <div className="SeassonMeta">
              <h1>See S03</h1>
              <div className="SeasonContent" />
              <ul className="SeasBtn">
                <li className="EpsTotal">
                  <span>الحلقات</span>
                  <em>6</em>
                </li>
                <li className="Simdb">
                  <span>IMDB</span>
                  <em>7.6</em>
                </li>
                <ul />
              </ul>
            </div>
          </a>
        </div>
        <div className="BoxItem currentSeason">
          <div className="ImageContainer" style={{backgroundColor: '#000000'}}>
            <div className="absolute" />
            <img className="imgLoader loaded" data-img="https://www.cima4up.life/wp-content/uploads/2021/08/See-s01.jpg" alt="See S01" src="https://www.cima4up.life/wp-content/uploads/2021/08/See-s01.jpg" />
            <div className="ContentHover">
              <h2>See S01<strong>2019</strong>
              </h2>
              <ul className="ListTitle">
                <li className="IMDBTOP ">7.6</li>
                <li>60 min</li>
                <li>اكشن</li>
              </ul>
            </div>
            <div className="ButtonsArea">
              <a title="See S01" href="https://www.cima4up.life/selary/see-s01/">
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
        <div className="BoxSerInside currentSeason">
          <h2>
            <a href="#" title="آخر حلقات See S01">آخر حلقات See S01</a>
          </h2>
          <div className="SeasonContent" />
          <div className="BoxesInside" data-finish="true" data-start="notstart" data-pid={133055} id="EpisodeNavs" data-slug="see-s01">
            {/* Miniselary */}
            <div className="Miniselary active">
              <a href="#" title="مسلسل See الموسم الاول الحلقة 6 السادسة مترجم">
                <span>الحلقة
                </span>
                <em>6</em>
              </a>
              <div className="EpsCOntroll">
                <div className="AddToNeeds" data-id={133055}>
                  <i className="ion ion-md-time" />
                </div>
              </div>
            </div>
          </div>
          <div className="EpisodeConroller" />
        </div>
      </div>
    </div>
    
    )
 

  }
  
  export default SelaryTap