import React , {useEffect, useState} from 'react'


const MinSingleSelcted = () => {



  const [stick, setStick] = useState(false)

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 5) setStick(true)
      else setStick(false)
    }

    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])




  const SaresArea = (e) => {
    e.target.closest('.SaresArea').classList.toggle('active')
  }



 
    return (
        <div className={stick ? 'MinSingleSelcted stickIT' : 'MinSingleSelcted'}>
        <div className="container">
          <h1>
            <a href="#">مسلسل See الموسم الاول الحلقة 6 السادسة مترجم</a>
            {/* SaresArea */}
            <div className="SaresArea">
              <span onClick={SaresArea}>
                <i className="ion ion-md-share" />
                <em>مشاركة</em>
              </span>
              <ul>
                <li className="social-facebook">
                  <a href="#" target="_blank" rel="nofollow">
                    <i className="ion ion-logo-facebook" />
                    <span>شارك فيس بوك</span>
                  </a>
                </li>
                <li className="social-twitter">
                  <a href="#" target="_blank" rel="nofollow">
                    <i className="ion ion-logo-twitter" />
                    <span>تغريد تويتر</span>
                  </a>
                </li>
                <li className="whatsApp">
                  <a href="#" target="_blank" rel="nofollow">
                    <i className="ion ion-logo-whatsapp" />
                    <span>مشاركة واتس اب</span>
                  </a>
                </li>
              </ul>
            </div>
          </h1>
          {/* IMDBRatio */}
          <div className="IMDBRatio">
            <div className="Ratese">
              <h3>IMDB</h3>
              <span>7.6</span>
            </div>
          </div>
          {/* RightMenu */}
          <div className="RightMenu">
            <ul className="SelectedUl">
              <li className="active">
                <a href="#" data-element=".StoryMovie" className="Gotoscroll nobind">
                  <i className="ion ion-md-information-circle-outline" />
                  <span>التفاصيل
                  </span>
                </a>
              </li>
              <li className="TrMobile">
                <a href="#" data-element=".Trailer" className="Gotoscroll nobind">
                  <i className="ion ion-md-videocam" />
                  <span>إعلان المسلسل</span>
                </a>
              </li>
              <li>
                <a href="#" data-element=".Teamwork" className="Gotoscroll nobind">
                  <i className="ion ion-md-people" />
                  <span>فريق العمل
                  </span>
                </a>
              </li>
              <li>
                <a href="#" data-element=".selaryTap" className="Gotoscroll nobind" title="جميع مواسم  وحلقات  مسلسل See">
                  <i className="ion ion-md-link" />
                  <em>المواسم والحلقات
                  </em>
                </a>
              </li>
              <li className="WButton Gotoscroll">
                <a href="#" data-element=".DownloadArea" className="DownloadButton Gotoscroll nobind">
                  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="52.738px" height="52.738px" viewBox="0 0 52.738 52.738" style={{enableBackground: 'new 0 0 52.738 52.738'}} xmlSpace="preserve">
                    <g>
                      <g>
                        <path d="M24.225,36.531c0.494,0.521,1.181,0.818,1.898,0.824c0.719,0,1.406-0.278,1.91-0.791l13.543-13.782 c1.025-1.042,1.01-2.72-0.031-3.745c-1.043-1.024-2.721-1.009-3.744,0.033l-5.934,6.038c-1.636,1.663-2.961,1.121-2.961-1.211 V2.533C28.906,1.134,27.771,0,26.372,0s-2.534,1.134-2.534,2.533v21.675c0,2.332-1.302,2.853-2.908,1.16l-5.951-6.267 c-0.52-0.548-1.221-0.824-1.921-0.824c-0.654,0-1.311,0.242-1.823,0.728c-1.062,1.009-1.104,2.684-0.098,3.745L24.225,36.531z" />
                        <path d="M41.576,34.532h-3.262c-2.219,0-5.359,1.495-7.307,3.478l-2.977,3.028c-0.5,0.509-1.178,0.79-1.896,0.791 c-0.725-0.006-1.421-0.308-1.914-0.827L21.37,38c-1.878-1.977-4.919-3.468-7.072-3.468h-3.134c-5.484,0-9.946,4.083-9.946,9.103 c0,5.021,4.462,9.104,9.946,9.104h30.41c5.484,0,9.946-4.083,9.946-9.104C51.522,38.615,47.06,34.532,41.576,34.532z M41.576,49.737h-30.41c-3.83,0-6.946-2.737-6.946-6.103s3.116-6.104,6.946-6.104H14.3c1.178,0,3.479,1.041,4.896,2.533l2.849,3 c1.05,1.107,2.532,1.752,4.083,1.764c1.542-0.003,2.979-0.602,4.045-1.688l2.975-3.029c1.492-1.52,3.922-2.579,5.166-2.579h3.262 c3.83,0,6.946,2.737,6.946,6.103C48.522,46.999,45.406,49.737,41.576,49.737z" />
                      </g>
                    </g>
                  </svg>
                  <span>تحميل مباشر
                  </span>
                </a>
              </li>
              <li className="WButton Gotoscroll">
                <a href="#" data-element=".WatchServers" className="WatchButton Gotoscroll nobind">
                  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 363 363" style={{enableBackground: 'new 0 0 363 363'}} xmlSpace="preserve">
                    <g>
                      <path d="M343,25.5H20c-11.028,0-20,8.972-20,20v272c0,11.028,8.972,20,20,20h323c11.028,0,20-8.972,20-20v-272 C363,34.472,354.028,25.5,343,25.5z M142,56.5c0-6.05,4.95-11,11-11h56c6.05,0,11,4.95,11,11v8c0,6.05-4.95,11-11,11h-56 c-6.05,0-11-4.95-11-11V56.5z M103,305.5c0,6.05-4.95,11-11,11H39c-6.05,0-11-4.95-11-11v-8c0-6.05,4.95-11,11-11h53 c6.05,0,11,4.95,11,11V305.5z M103,64.5c0,6.05-4.95,11-11,11H39c-6.05,0-11-4.95-11-11v-8c0-6.05,4.95-11,11-11h53 c6.05,0,11,4.95,11,11V64.5z M220,305.5c0,6.05-4.95,11-11,11h-56c-6.05,0-11-4.95-11-11v-8c0-6.05,4.95-11,11-11h56 c6.05,0,11,4.95,11,11V305.5z M185.638,253.464c-39.883,0-72.214-32.331-72.214-72.214s32.331-72.214,72.214-72.214 c39.883,0,72.214,32.331,72.214,72.214S225.521,253.464,185.638,253.464z M336,305.5c0,6.05-4.95,11-11,11h-57 c-6.05,0-11-4.95-11-11v-8c0-6.05,4.95-11,11-11h57c6.05,0,11,4.95,11,11V305.5z M336,64.5c0,6.05-4.95,11-11,11h-57 c-6.05,0-11-4.95-11-11v-8c0-6.05,4.95-11,11-11h57c6.05,0,11,4.95,11,11V64.5z" />
                      <path d="M228.331,175.572l-60.854-41.893C162.95,130.555,159,132.5,159,138v86.5c0,5.5,3.95,7.445,8.477,4.322l60.793-41.893 C232.797,183.805,232.859,178.695,228.331,175.572z" />
                    </g>
                  </svg>
                  <span>مشاهدة الآن</span>
                </a>
              </li>
            </ul>
          </div>
          {/* RightMenu end */}
        </div>
      </div>
      
    )


  }
  
  export default MinSingleSelcted