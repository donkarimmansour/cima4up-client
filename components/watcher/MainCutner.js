
const MainCutner = () => {


  const Expand = (e) => {
    if (e.target.closest('.MainCutner').className.includes('fullw')) {

      e.target.closest('.MainCutner').classList.toggle('fullw');
      e.target.innerHtml = '<i class="ion ion-md-expand"></i><strong>ملئ الشاشة</strong>'

    } else {

      e.target.closest('.MainCutner').classList.toggle('fullw')
      e.target.innerHtml = '<i class="ion ion-ios-expand"></i><strong>تصغير الشاشة</strong>'

    }
  }

  const Light = (e) => {

    if (e.target.closest('.MainCutner').nextSibling.className.includes('active')) {

      e.target.closest('.MainCutner').nextSibling.classList.toggle('active')
      e.target.closest('.MainCutner').classList.toggle('active')
      e.target.innerHtml = '<i class="ion ion-md-flashlight"></i><strong>طفي الانوار</strong>'

    } else {
      e.target.closest('.MainCutner').nextSibling.classList.toggle('active')
      e.target.closest('.MainCutner').classList.toggle('active')
      e.target.innerHtml = '<i class="ion ion-ios-flashlight"></i><strong>تشغيل الانوار </strong>'

    }

  }


  const Refresh = (e) => {
    const server = 'http://localhost:3000/watcher' //e.target.getAttribute('data-server')

    e.target.closest('.MainCutner').querySelector('#IframeEmbed').setAttribute('src', server);

    if (e.target.closest('.MainCutner').nextSibling.className.includes('active')) {

      e.target.closest('.MainCutner').nextSibling.classList.toggle('active')
      e.target.closest('.MainCutner').classList.toggle('active')

      e.target.closest('.MainCutner').querySelector('span.light').innerHtml = '<i class="ion ion-md-flashlight"></i><strong>طفي الانوار</strong>'

    }

    CunterWatchDownload()

  }


	let timer
	let timerFinish
	let timerSeconds


  const CunterWatchDownload = () => {
    document.querySelector('.downloading').style.display = 'block'
    document.querySelector('.timer').style.display = 'block'
    document.querySelector('.InnerServer').style.display = 'none'
    document.querySelector('#NewCounter').style.display = 'block'


    document.querySelector('.boxServerInfo > span').style.pointerEvents = 'none'
    document.querySelector('.boxServerInfo > span').style.opacity = '0.5'

   // document.querySelector('input[type=button]#watch').textContent = 'Stop'

    timerSeconds = 5;

    timerFinish = new Date().getTime() + (timerSeconds * 1000);

    timer = setInterval(stopWatch(), 50);
  }

  function stopWatch() {

    var seconds = (timerFinish - (new Date().getTime())) / 1000;

    if (seconds <= 0) {
      console.log("timer");

      drawTimer(100);

      clearInterval(timer);

      document.querySelector('#NewCounter').style.display = 'none'

      document.querySelector('.downloading').style.display = 'none'

      document.querySelector('.InnerServer').style.display = 'block'

      document.querySelector('.boxServerInfo > span').style.pointerEvents = 'auto'
      document.querySelector('.boxServerInfo > span').style.opacity = '1'

    } else {

      console.log('okey');
      var percent = 100 - ((seconds / timerSeconds) * 100);

      drawTimer(percent);

    }

  }


  function drawTimer(percent) {

    console.log('1111111111111111');
    document.querySelector('div.timer').innerHTML = '<div id="slice"' + (percent > 50 ? ' class="gt50"' : '') + '><div class="pie"></div>' + (percent > 50 ? '<div class="pie fill"></div>' : '') + '</div>'

    var deg = 360 / 100 * percent;

    document.querySelector('#slice .pie').style.transform = 'rotate(' + deg + 'deg)'
    document.querySelector('#slice .pie').style.WebkitTransform = 'rotate(' + deg + 'deg)'
    document.querySelector('#slice .pie').style.MozTransform = 'rotate(' + deg + 'deg)'
    document.querySelector('#slice .pie').style.OTransform = 'rotate(' + deg + 'deg)'


    document.querySelector('.percent').innerHTML = Math.round(percent) + '%'

  }


  const Report = () => {

  }

  return (
    <div className="MainCutner" id="MainCutner">
       {/* HeadPage */}
       <div className="HeadPage">
         <h1>
           <i className="ion ion-md-arrow-forward" />
           <a href="#" title="مسلسل See الموسم الاول الحلقة 6 السادسة مترجم">
             الرجوع ألى مسلسل See الموسم الاول الحلقة 6 السادسة مترجم
           </a>
         </h1>
         <div className="boxServerInfo">
           <span className="light" style={{pointerEvents: 'auto', opacity: 1}} onClick={Light}>
             <i className="ion ion-md-flashlight" />
             <strong>طفي الانوار</strong>
           </span>
           <span className="expand" style={{pointerEvents: 'auto', opacity: 1}} onClick={Expand}>
             <i className="ion ion-md-expand" />
             <strong>ملئ الشاشة</strong>
           </span>
           <span className="Refresh" data-server="http://localhost:3000/watcher" style={{pointerEvents: 'auto', opacity: 1}} onClick={Refresh}>
             <i className="ion ion-md-refresh" />
             <strong>اعادة التحميل
             </strong>
           </span>
           <span className="Report"  data-report={133055} style={{pointerEvents: 'auto', opacity: 1}} onClick={Report}>
             <i className="ion ion-md-notifications" />
             <strong>تبليغ
             </strong>
           </span>
         </div>
       </div>
       {/* downloadButton */}
       <div className="downloadButton-base NewCounter" id="NewCounter" style={{display: 'block'}}>
         <div className="downloadButton-button">
           <div className="downloadButton-innerButton">
             <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 297 297" style={{enableBackground: 'new 0 0 297 297'}} xmlSpace="preserve">
               <g>
                 <g>
                   <circle style={{fill: '#fe7472'}} cx="148.5" cy="148.5" r="148.5" />
                 </g>
                 <path style={{fill: '#ea625f'}} d="M297,148.5c0-2.326-0.061-4.638-0.167-6.938l-53.499-53.9L53.299,224.778l69.91,70.067 c8.22,1.411,16.668,2.154,25.291,2.154C230.514,297,297,230.514,297,148.5z" />
                 <g>
                   <path style={{fill: '#ffffff'}} d="M142.273,92.027L142.273,92.027c-2.488,1.742-5.918,1.138-7.66-1.351l-25.237-36.043 c-1.742-2.488-1.138-5.918,1.351-7.66l0,0c2.488-1.742,5.918-1.138,7.66,1.351l25.237,36.043 C145.366,86.855,144.762,90.284,142.273,92.027z" />
                 </g>
                 <g>
                   <path style={{fill: '#ffffff'}} d="M147.607,92.027L147.607,92.027c2.488,1.742,5.918,1.138,7.66-1.351l25.237-36.043 c1.742-2.488,1.138-5.918-1.351-7.66l0,0c-2.488-1.742-5.918-1.138-7.66,1.351l-25.237,36.043 C144.515,86.855,145.119,90.284,147.607,92.027z" />
                 </g>
                 <g>
                   <path style={{fill: '#ffffff'}} d="M66.131,230.318h164.738c9.737,0,17.631-7.894,17.631-17.631V100.131 c0-9.737-7.894-17.631-17.631-17.631H66.131c-9.737,0-17.631,7.894-17.631,17.631v112.556 C48.5,222.424,56.394,230.318,66.131,230.318z" />
                 </g>
                 <g>
                   <path style={{fill: '#e8e8e8'}} d="M230.869,82.5h-85.702v147.818h85.702c9.737,0,17.631-7.894,17.631-17.631V100.131 C248.5,90.394,240.606,82.5,230.869,82.5z" />
                 </g>
                 <g>
                   <circle style={{fill: '#595155'}} cx="222.5" cy="119.5" r="13.5" />
                 </g>
                 <g>
                   <circle style={{fill: '#595155'}} cx="222.5" cy={162} r="13.5" />
                 </g>
                 <g>
                   <path style={{fill: '#e8e8e8'}} d="M81.417,214.5h101.166c8.514,0,15.417-6.902,15.417-15.417v-85.348 c0-8.514-6.902-15.417-15.417-15.417H81.417C72.903,98.318,66,105.22,66,113.735v85.348C66,207.598,72.902,214.5,81.417,214.5z" />
                 </g>
                 <g>
                   <path style={{fill: '#cacaca'}} d="M182.583,98.318h-37.416V214.5h37.416c8.514,0,15.417-6.902,15.417-15.417v-85.348 C198,105.22,191.098,98.318,182.583,98.318z" />
                 </g>
               </g>
             </svg>
           </div>
           {/* timer */}
           <div className="timer">
             <div id="slice" className="gt50">
               <div className="pie" style={{transform: 'rotate(360deg)'}} />
               <div className="pie fill" style={{transform: 'rotate(360deg)'}} />
             </div>
           </div>
         </div>
       </div>
       <div className="downloading" style={{display: 'block'}}>
         <div className="percent">100%</div>
         <span>نتمني لكم مشاهده ممتعه </span>
         <em>انتظر حتي يتم تحميل سيرفر المشاهده</em>
       </div>
       <div className="InnerServer">
         <div className="WatchServers1stEmbed">
           <iframe src="http://localhost:3000/watcher" id="IframeEmbed" height="100%" width="100%" allowFullScreen frameBorder={0} scrolling="no" />
         </div>
       </div>
     </div>
    
  )
}

export default MainCutner