
const CoverColorsList = () => {
  return (
    <div className="CoverColorsList">
    <div className="ColorSnext"><i className="ion ion-ios-arrow-forward" /></div>
    <div className="ColorSprev"><i className="ion ion-ios-arrow-back" /></div>
    <div className="CoverColorsListInner owl-rtl owl-loaded">
      <div className="owl-stage-outer">
        <div className="owl-stage" style={{transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s'}}>
          <div className="owl-item">
            <div data-color="#53a8ff" style={{backgroundColor: '#53a8ff'}}>
            </div>
          </div>
          <div className="owl-item">
            <div data-color="#5f5d94" style={{backgroundColor: '#5f5d94'}}>
            </div>
          </div>
          <div className="owl-item">
            <div data-color="#5a6869" style={{backgroundColor: '#5a6869'}}>
            </div>
          </div>
          <div className="owl-item">
            <div data-color="#8567b9" style={{backgroundColor: '#8567b9'}}>
            </div>
          </div>
          <div className="owl-item">
            <div data-color="#4e3a3a" style={{backgroundColor: '#4e3a3a'}}>
            </div>
          </div>
          <div className="owl-item">
            <div data-color="#75a547" style={{backgroundColor: '#75a547'}}>
            </div>
          </div>
          <div className="owl-item">
            <div data-color="#64c5b1" style={{backgroundColor: '#64c5b1'}}>
            </div>
          </div>
          <div className="owl-item">
            <div data-color="#b94848" style={{backgroundColor: '#b94848'}}>
            </div>
          </div>
          <div className="owl-item">
            <div data-color="#f17e33" style={{backgroundColor: '#f17e33'}}>
            </div>
          </div>
          <div className="owl-item">
            <div data-color="#3b54bb" style={{backgroundColor: '#3b54bb'}}>
            </div>
          </div>
          <div className="owl-item">
            <div data-color="#673AB7" style={{backgroundColor: '#673AB7'}}>
            </div>
          </div>
          <div className="owl-item">
            <div data-color="#607D8B" style={{backgroundColor: '#607D8B'}}>
            </div>
          </div>
          <div className="owl-item">
            <div data-color="#FF5722" style={{backgroundColor: '#FF5722'}}>
            </div>
          </div>
          <div className="owl-item">
            <div data-color="#795548" style={{backgroundColor: '#795548'}}>
            </div>
          </div>
          <div className="owl-item">
            <div data-color="#666666" style={{backgroundColor: '#666666'}}>
            </div>
          </div>
          <div className="owl-item">
            <div className="selected" data-color="#660033" style={{backgroundColor: '#660033'}} />
          </div>
          <div className="owl-item">
            <div data-color="##ffc107" style={{backgroundColor: '#ffc107'}}>
            </div>
          </div>
        </div>
      </div>
      <div className="owl-nav">
        <div className="owl-prev"><a className="Slides-prev"><i className="ion ion-ios-arrow-back" /></a></div>
        <div className="owl-next"><a className="Slides-next"><i className="ion ion-ios-arrow-forward" /></a></div>
      </div>
      <div className="owl-dots">
        <div className="owl-dot active"><span /></div>
        <div className="owl-dot"><span /></div>
      </div>
    </div>
  </div>
 
  )
}

export default CoverColorsList