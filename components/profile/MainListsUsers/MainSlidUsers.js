
const MainSlidUsers = () => {
  return (
    <div className="MainSlidUsers">
    <ul className="UsersList owl-rtl owl-loaded">
      <div className="owl-stage-outer">
        <div className="owl-stage" style={{transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0.2s ease 0s', width: '5760px'}}>
          <div className="owl-item" style={{width: '150px', marginLeft: '10px'}}>
            <li>
              <a href="#">
                <span className="UserAvatar">
                  <i className="ion ion-md-person" />
                </span>
                <div className="UserInfo">
                  <span>@na@fe@th</span>
                  <em><i className="ion ion-ios-apps" /> 1</em>
                </div>
              </a>
            </li>
          </div>
        </div>
      </div>
      <div className="owl-nav">
        <div className="owl-prev">
          <a className="Slides-prev">
            <i className="ion ion-ios-arrow-back" />
          </a>
        </div>
        <div className="owl-next">
          <a className="Slides-next">
            <i className="ion ion-ios-arrow-forward" />
          </a>
        </div>
      </div>
      <div className="owl-dots">
        <div className="owl-dot"><span /></div>
        <div className="owl-dot active"><span /></div>
      </div>
    </ul>
  </div>

  )
}

export default MainSlidUsers