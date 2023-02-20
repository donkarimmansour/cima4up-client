import Link from 'next/link'
import React from 'react'
import  data from '../../data'

const NavBar = () => {

  const { categories } = data  


  return (
    <ul>

      {/* categories */}
      {categories.map((PCategory, PCI) => {

        return (

            <li key={PCI} className="menu-item">
              <Link href="#">{PCategory.name}</Link>

              {/* sub_categories */}
               {PCategory?.sub_categories && <ul className="sub-menu"> {

                PCategory?.sub_categories.map((CCategory, CCI) => {

                   return (<li key={CCI} className="menu-item">
                              <Link href="#">{CCategory.name}</Link>
                        </li>)
                })

              } </ul>}

            </li>

      
          ) }) }

    </ul>

  )

}

export default NavBar