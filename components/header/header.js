import React , {useEffect, useState} from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import UsersArea from './UsersArea'
import SearchBox from './SearchBox'

const Header = ({auth}) => {


    const [fixed, setFixed] = useState(false)

    useEffect(() => {
      const handleWindowScroll = () => {
        if (window.scrollY > 300) setFixed(true)
        else setFixed(false)
      }
  
      window.addEventListener('scroll', handleWindowScroll)
      return () => window.removeEventListener('scroll', handleWindowScroll)
    }, [])
  


    return (
        //    {/* hedaer style="margin: 20px 0px;"*/}

        <header className={fixed ? 'fixed' : ''}>
            <div className="container dflex">
                {/* logo */}
                <Logo />

                {/* MenuHeader */}
                <div className="MenuHeader">
                    <div>
                        {/* navbar */}
                        <Navbar />

                    </div>
                </div>
                
                {/* Search box */}
                <SearchBox />

                {/* UsersArea */}
                <UsersArea auth={auth}/>
            </div>
        </header>

    )

}

export default Header