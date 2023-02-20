import React from 'react'
import GoToTop from './GoToTop'
import data from '../../data'

const Footer = () => {

  const {Hotlinks} = data

  return (<>

    {/* GoToTop */}
    <GoToTop />
 
    {/* Footer */}
     <div className="Cima4UpHr Footer">
      <div className="MenuFooter">
        <div>

          <ul>
            {Hotlinks.map((Hotlink, HLi) => (
              <li key={HLi} className="menu-item">
                <a href="#" >{Hotlink}</a>
              </li>)
            )}
          </ul>

        </div>
      </div>
      <div className="CopyRight"> </div>
    </div>
  </>
  )

}

export default Footer