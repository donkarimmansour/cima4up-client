import React , {useEffect, useState} from 'react'

const YearFilter = () => {


const [filters , setFilters] = useState({from : false , to : false , all : true})


useEffect(() => {
//console.log(filters)

 } , [filters])



  
const DropdownList = (e) => {
   e.target.closest('.YearButton').classList.toggle('active')
}


const YearFrom = (e) => {
  e.target.closest('.YearFrom').querySelector('.DropdownTitle span').textContent = `من : ${e.target.textContent}`
  e.target.closest('.AsideInner').querySelector('.UseYears li').classList.remove('active')
  e.target.closest('.YearFrom').classList.remove('active')
  setFilters({...filters , from : e.target.textContent , all : false})
}

const YearTo = (e) => {
  e.target.closest('.YearTo').querySelector('.DropdownTitle span').textContent = `إلي : ${e.target.textContent}`
  e.target.closest('.AsideInner').querySelector('.UseYears li').classList.remove('active')
  e.target.closest('.YearTo').classList.remove('active')
  setFilters({...filters , to : e.target.textContent , all : false})
}

const YearClear = (e) => {
  e.target.closest('.AsideInner').querySelector('.YearTo .DropdownTitle span').textContent = `من`
  e.target.closest('.AsideInner').querySelector('.YearFrom .DropdownTitle span').textContent = `إلي`
  e.target.parentElement.classList.add('active')
  setFilters({from : false , to : false , all : true})
}

  const ToggleAside = (e) => {

    if (!e.target.closest('aside').className.includes('active')) {
      e.target.closest('.FilterSidebar').querySelectorAll('aside').forEach(element => {
        element.classList.remove('active')
      })

      e.target.closest('aside').classList.add('active')
    } else {
      e.target.closest('aside').classList.remove('active')
    }

  }






  return (
    <aside data-type="year">
      <h2 onClick={ToggleAside}>
        <i className="ion ion-md-calendar" />
        <span>حدّد السنة </span>
        <i className="ion ion-ios-arrow-down" />
      </h2>
      <div className="AsideInner">
        <div className="DFlex">
          <div className="Dropdown half YearButton YearFrom">
            <div className="DropdownTitle" onClick={DropdownList}>
              <span>من</span>
              <i className="ion ion-ios-arrow-down" />
            </div>
            <ul className="DropdownList">

              {Array(100).fill('').map((Yy , Yi) => {
               return <li key={Yi} > <a className="nobind" href="#!" onClick={YearFrom}>{(1920 + Yi)}</a> </li>
              })}

            </ul>
          </div>
          <div className="Dropdown half YearButton YearTo">
            <div className="DropdownTitle" onClick={DropdownList}>
              <span>إلي</span>
              <i className="ion ion-ios-arrow-down" />
            </div>
            <ul className="DropdownList">
              {Array(100).fill('').map((Yy, Yi) => {
               return <li key={Yi} > <a className="nobind" href="#!" onClick={YearTo}>{(1920 + Yi)}</a> </li>
              })}
            </ul>
          </div>
        </div>
        <div className="Dropdown half UseYears">
          <ul className="DropdownList">

             <li className="active">
              <a href="#!" onClick={YearClear}>بدون تصفية سنوات</a>
            </li>

            {/* <li>
              <a className="nobind" href="#">
                افلام تعرض قريباََ
              </a>
            </li> */}

            <li> <a className="nobind" href="#!" /> </li>
            <li> <a className="nobind" href="#!" /> </li>
            <li> <a className="nobind" href="#!" /> </li>
            <li> <a className="nobind" href="#!" /> </li>
            <li> <a className="nobind" href="#!" /> </li>
            <li> <a className="nobind" href="#!" /> </li>
            <li> <a className="nobind" href="#!" /> </li>
            <li> <a className="nobind" href="#!" /> </li>
            <li> <a className="nobind" href="#!" /> </li>
            <li> <a className="nobind" href="#!" /> </li>
            <li> <a className="nobind" href="#!" /> </li>
            <li> <a className="nobind" href="#!" /> </li>
            <li> <a className="nobind" href="#!" /> </li>
            <li> <a className="nobind" href="#!" /> </li>
            <li> <a className="nobind" href="#!" /> </li>

          </ul>
        </div>
      </div>
    </aside>

  )

}

export default YearFilter 