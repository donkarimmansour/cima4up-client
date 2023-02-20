import React from 'react'

const SearchMobile = () => {

  const SearchMobile = () => {
    const FilterSidebar = document.querySelector('.FilterSidebar')

    if (FilterSidebar.className.includes('show')) {

      FilterSidebar.classList.toggle('show');

      document.querySelector('.SearchMobile span').innerHTML = 'البحث المتخصص'

    } else {

      document.querySelector('.SearchMobile span').innerHTML = 'أغلاق البحث المخصص'

      FilterSidebar.classList.toggle('show');

      document.querySelector('body, html').scrollTo({
        top: FilterSidebar.offsetTop - 120,
        behavior: 'smooth',
      })

    }

  }



  return (
    <div className="SearchMobile" onClick={SearchMobile}>
      <span>البحث المتخصص</span>
      <em>تصفية حسب التصنيفات أو السنوات أو الانواع او اللغات </em>
    </div>
  )

}

export default SearchMobile 