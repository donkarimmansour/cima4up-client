import Link from 'next/link';
import React from 'react'
import data from '../../data';


const BadMenu = () => {
    const { categories } = data  


    const showSub = (e) => {
      e.target.parentElement.querySelector('ul').style.display = (e.target.parentElement.querySelector('ul').style.display === 'block') ? 'none' : 'block'
      // const s = (e.target.parentElement.querySelector('ul').style.display === 'block') ? 'none' : 'block'
      // if(s === 'block'){
      //   e.target.parentElement.querySelector('ul').style.display = 'block' 
      //   e.target.parentElement.querySelector('ul').style.opacity = 1 
      // }else {
      //   e.target.parentElement.querySelector('ul').style.display = 'none' 
      //   e.target.parentElement.querySelector('ul').style.opacity = 0 
      // }
      
    }

    const HideBadMenu = (e) => {
        e.target.parentElement.classList.remove('active')
      }
     

    return (
        <div className="BadMenu">
          <i className="ion ion-md-close HideBadMenu" onClick={HideBadMenu}></i>

            <h1 className="CimaForUp">
              <a href="https://www.cima4up.life" title="سينما فور اب">
                <span>CIMA</span>
                <strong>4</strong>
                <span>UP</span>
                <div className="ArLogo">
                  <span>سيما</span>
                  <strong>4</strong>
                  <span>اب</span>
                </div>
              </a>
            </h1>


            <div className="MooobMenu">
              <div>
              
                <ul>
                  
                  

                            {/* categories */}
                            {categories.map((PCategory, PCI) => {

                                return (

                                    <li key={PCI} className="menu-item">
                                        <Link href="#">{PCategory.name}</Link>

                                        {/* sub_categories */}
                                        {PCategory?.sub_categories && <>
                                            <ul className="sub-menu" > {
                                                      // style={{transition: 'all 5s linear' , opacity: 0}}


                                                PCategory?.sub_categories.map((CCategory, CCI) => {

                                                    return (<li key={CCI} className="menu-item">
                                                        <Link href="#">{CCategory.name}</Link>
                                                    </li>)
                                                })

                                            } </ul>
                                            <i className="ion ion-md-add showSub" onClick={showSub} />
                                        </>}


                                    </li>


                                )
                            })}
                  
                  
                  
                
                </ul>
              </div>
            </div>
         
         
          
        </div>


        // {/* <i className="ion ion-md-close HideBadMenu">
        //   <i className="ion ion-md-add showSub">
        //     <i className="ion ion-md-add showSub">
        //       <i className="ion ion-md-add showSub"></i>
        //     </i>
        //   </i>
        // </i> */}
    );

}

export default BadMenu