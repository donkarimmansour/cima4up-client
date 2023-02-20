import React from 'react'

const Tabs = () => {

  return (
    <div className="Tabs">
      <nav>
        <a href="#" className="Hoverable active">
          <i className="ion ion-md-add" />
          <span> آخر الإضافات</span>
        </a>
        <a href="#">
          <i className="ion ion-md-attach" />
          <span>ألافلام المثبتة </span>
        </a>
        <a href="#">
          <i className="ion ion-md-star-half" />
          <span> أفضل الافلام</span>
        </a>
        <a href="#">
          <i className="ion ion-ios-flame" />
          <span> الاكثر شهرة</span>
        </a>
        <a href="#">
          <i className="ion ion-ios-git-merge" />
          <span>سلاسل ألافلام</span>
        </a>
      </nav>
      <ul className="OfflineCats">
        <li className="Catses">
          <a href="#">
            <i className="ion-md-apps" />
            <span>افلام اجنبي</span>
          </a>
        </li>
        <li className="Catses">
          <a href="#">
            <i className="ion-md-apps" />
            <span>افلام عربي</span>
          </a>
        </li>
        <li className="Catses">
          <a href="#">
            <i className="ion-md-apps" />
            <span>افلام هندية</span>
          </a>
        </li>
        <li className="Catses">
          <a href="#">
            <i className="ion-md-apps" />
            <span>افلام اسيوية</span>
          </a>
        </li>
        <li className="Catses">
          <a href="#">
            <i className="ion-md-apps" />
            <span>افلام كارتون</span>
          </a>
        </li>
        <li className="Catses">
          <a href="#">
            <i className="ion-md-apps" />
            <span>افلام تركى</span>
          </a>
        </li>
      </ul>
    </div>

  )

}

export default Tabs