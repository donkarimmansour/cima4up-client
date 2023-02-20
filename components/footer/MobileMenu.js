import React from 'react'

const MobileMenu = () => {


  const OpenPages = (e) => {
    e.target.parentElement.classList.toggle('active')
  }


  const OpenMenu = () => {
    document.querySelector('.BadMenu').classList.toggle('active')
  }
 


  const OpenFilter = () => {
    const FilterSidebar = document.querySelector('.FilterSidebar')

     	if(FilterSidebar != undefined && FilterSidebar.className.includes('show')){

          document.querySelector('body, html').scrollTo({
            top: FilterSidebar.offsetTop - 120,
            behavior: 'smooth',
          })
      
      		FilterSidebar.classList.toggle('show');
      
      		document.querySelector('.SearchMobile span').innerHTML = 'البحث المتخصص'
      
      	}else if(FilterSidebar != undefined){
      
      		document.querySelector('.SearchMobile span').innerHTML = 'أغلاق البحث المخصص'
      
      		FilterSidebar.classList.toggle('show');
      
          document.querySelector('body, html').scrollTo({
            top: FilterSidebar.offsetTop - 120,
            behavior: 'smooth',
          })

      	}
      
  }

  



  return (
    <div className="MobileMenu">
      <ul>
        <li>
          <a href="#">
            <i className="ion ion-md-home" />
            <span>التصفح</span>
          </a> 
        </li>
        <li>
          <a href="#">
            <i className="ion ion-md-planet" />
            <span>استكشف</span>
          </a>
        </li>
        <li className="OpenPages">
          <i className="ion ion-md-add" onClick={OpenPages}/>
          <ul className="SubMobileMenu">
            <li>
              <a href="#">
                <i className="ion ion-md-film" />
                <span>أفلام</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ion ion-md-videocam" />
                <span>مسلسلات</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ion ion-md-paw" />
                <span>أنمى </span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ion ion-md-tv" />
                <span>عروض </span>
              </a>
            </li>
          </ul>
        </li>
        <li className="OpenFilter" onClick={OpenFilter}>
          <i className="ion ion-md-search" />
          <span>تصفية</span>
        </li>
        <li className="OpenMenu" onClick={OpenMenu}>
          <i className="ion ion-md-list" />
          <span>القائمة</span>
        </li>
      </ul>
    </div>

  )

}

export default MobileMenu