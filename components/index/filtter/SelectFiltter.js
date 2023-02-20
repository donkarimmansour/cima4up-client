import React, { useEffect, useState } from 'react'

const SelectFiltter = ({head , hint , list , all}) => {

    const [List , setList] = useState(list)
    const [filters , setFilters] = useState([])
  

  useEffect(() => {
  // console.log(filters)

  } , [filters])

  const ScrolledDropdown = (e) => {
  
     //if(e.target.closest('li').getAttribute('data-fill')  === 'all') {

      if(e.target.closest('li').className.includes('filtered')) {

        e.target.closest('li').classList.toggle('active')
        e.target.closest('ul').querySelector('li:first-child').classList.remove('active')
        e.target.closest('ul').querySelector('li:first-child').querySelector('i').setAttribute("class", "ion ion-ios-flash")
        const text = e.target.closest('li').querySelector('span').textContent

         if(!e.target.closest('li').className.includes('active')){

           setFilters(filters.filter(v => v !== text && v !== all))

           e.target.closest('aside').querySelector('h2 > em').textContent = filters.join(',')
           e.target.closest('aside').querySelector('h2 > em').style.display = 'none'
           e.target.closest('li').querySelector('i').setAttribute("class", "ion ion-ios-add")

         }else {
  
          setFilters([...filters.filter(v => v !== all) , text ])

          e.target.closest('aside').querySelector('h2 > em').textContent = filters.join(',')
          e.target.closest('aside').querySelector('h2 > em').style.display = 'block'
          e.target.closest('li').querySelector('i').setAttribute("class", "ion ion-md-remove")
         }


      }else{
        let text

        e.target.closest('ul').querySelectorAll('li').forEach(element => {
            if(element.className.includes('filtered')){
              element.classList.remove('active')
              element.querySelector('i').setAttribute("class", "ion ion-ios-add")
              
            }else{
              element.classList.add('active')
              element.querySelector('i').setAttribute("class", "ion ion-md-remove")
               text = element.querySelector('span').textContent
              e.target.closest('aside').querySelector('h2 > em').textContent = text
            }
        })
        
        setFilters([text])
      }
         

      //}
  }

  const SearchInput = (e) => {
       const query = e.target.value
       if(query.length === 0){
         setList(list)
       }else{
         setList(list.filter(v => v.toLowerCase().startsWith(query.toLowerCase())))
       }
       
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
    <aside>
      <h2  onClick={ToggleAside}>
        <i className="icon ion-md-film Colorize-movie-color" />
        <span>{head} </span>
        <i className="ion ion-ios-arrow-down" />
        <em />
      </h2>
      
      <div className="AsideInner">

        <div className="DropdownTitle">
          <input type="text" id={`${head}`} autoComplete="off" autoCorrect="off" spellCheck="false"  onChange={SearchInput} required/>
          <label htmlFor={`${head}`}>{hint} </label>

          <div className="bar" />

        </div>

        <ul className="ScrolledDropdown">


          <li className="active" data-fill="all"> 
             <a href="#!" onClick={ScrolledDropdown}><i className="ion ion-ios-flash" /><span>{all}</span></a>
          </li>

          { List.map((lText , lI) => {
            return (
              <li key={lI} className="filtered" data-fill="all">
                <a className="nobind" href="#!" onClick={ScrolledDropdown}> <i className="ion ion-ios-add" /> <span>{lText}</span> </a>
              </li>
            )
          })}

        </ul>
      </div>
    </aside>

  )

}

export default SelectFiltter