import React from 'react'

const BoxSectionTitle = () => {

  return (
    <div className="BoxSectionTitle">
      <h2>احدث الافلام المضافة </h2>
      <p>أستكشف وتصفح جديد الافلام </p>
      <div className="NavSections">
        <a href="#">
          <i className="ion ion-md-stopwatch" />
          <span>أفلام جديدة </span>
        </a>
        <a href="#">
          <i className="ion ion-md-attach" />
          <span>أفلام مثبتة</span>
        </a>
        <a href="#">
          <i className="ion ion-ios-podium" />
          <span> أفضل الافلام</span>
        </a>
        <a href="#">
          <i className="ion ion-ios-flame" />
          <span>الاكثر شهرة</span>
        </a>
      </div>
    </div>

  )

}

export default BoxSectionTitle