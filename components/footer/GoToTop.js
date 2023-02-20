import React , {useEffect, useState} from 'react'

const GoToTop = () => {

  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 300) setShow(true)
      else setShow(false)
    }

    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({ top: 0 , behavior: 'smooth'})
  }

  return (
    <div id="GoToTop" className={show ? 'ShowTop' : ''} onClick={handleScrollTop}>
      <i className="ion ion-md-arrow-up" />
    </div>
  )

}

export default GoToTop