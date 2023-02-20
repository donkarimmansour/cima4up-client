import AdArea from "./AdArea"

const SingleNewes = () => {
  return (
    <div className="container SingleNewes">
    <ul className="nextAndPrevPosts IsCurrentNumbers">
      <li className="prevPosted">
        <a href="#" title="مسلسل See الموسم الاول الحلقة 5 الخامسة مترجم">
          <i className="ion ion-md-arrow-forward" />
          <div className="ImgNavPost">
            <em>5</em>
          </div>
          <p>الحلقة السابقة </p>
          <span>مسلسل See الموسم الاول الحلقة 5 الخامسة مترجم</span>
        </a>
      </li>
      <li className="nextPosted">
        <a href="#" title="مسلسل See الموسم الاول الحلقة 7 السابعة مترجم">
          <i className="ion ion-md-arrow-back" />
          <div className="ImgNavPost">
            <em>7</em>
          </div>
          <p>الحلقة التالية </p>
          <span>مسلسل See الموسم الاول الحلقة 7 السابعة مترجم</span>
        </a>
      </li>
    </ul>
    {/* AdArea */}
     <AdArea/>
   
  </div>

  )
}

export default SingleNewes