import React from 'react'

const IMDBFiltter = () => {

  return (
    <aside className="IMDBClass" data-type="rate">
      <h2>
        <span>IMDB</span>
      </h2>
      <div className="AsideInner">
        <div className="Dropdown ImdbRateButton">
          <ul className="DropdownList">
            <li data-fill="all">
              <a href="#">
                <span>بدون تحديد</span>
              </a>
            </li>
            <li data-act="nothome">
              <a href="#" className="nobind">
                <span>3</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>

  )

}
 
export default IMDBFiltter