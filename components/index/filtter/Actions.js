import React from 'react'

const Actions = () => {

  return (
    <>
      <a className="ResetFilters" href="#">
        <i className="ion ion-ios-refresh" />
        <span>إعادة تعيين التصفية</span>
      </a>
      <div className="SearchIT">
        <a href="#" className="SearchITS">
          <span>تصفح ألان </span>
          <i className="ion ion-ios-return-left" />
        </a>
      </div>
    </>
  )

}

export default Actions