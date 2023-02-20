import HeadingSingleBox from "./HeadingSingleBox"

const MainSingleRight = () => {

    return (
      <div className="MainSingleRight">
      <div className="SingleContent SingleInfo">
        <div className="MiniThum">
          <div className="ribbon">WEB-DL</div>
          <div className="ImgClass" style={{backgroundColor: '#000000'}}><img className="imgLoader loaded" data-img="https://www.cima4up.life/wp-content/uploads/2019/11/See-s01-4-347x520.jpg" alt="مسلسل See الموسم الاول الحلقة 6 السادسة مترجم" src="https://www.cima4up.life/wp-content/uploads/2019/11/See-s01-4-347x520.jpg" /></div>
          <div className="SwitchPostConroll">
            <li className="AddToNeeds" data-type="largb" data-id={133055}>
              <i className="ion ion-md-time" />
              <span>
                مشاهدة
                لاحقاََ
              </span>
              <em>اضافة الى قائمة المشاهدة</em>
            </li>
            <li className="AddToDownloads" data-type="largb" data-id={133055}>
              <i className="ion ion-md-code-download" />
              <span>تحميل لاحقاََ
              </span>
              <em>اضافة الى قائمة
                المشاهدة</em>
            </li>
            <li className="Hoverable SeenIt" id="SeenIt" data-seen={133055}>
              <i className="ion ion-ios-eye" />
              <span>شاهدته من قبل ؟</span>
              <em>هل شاهدته من قبل
              </em>
            </li>
            <li className="commentTop">
              <a href="#" data-focus="form.CommentsFormInner > .FormData > textarea" data-element=".CommentsFormInner" className="AddComment Gotoscroll nobind Hoverable">
                <i className="ion ion-md-chatboxes" />
                <span>أترك تعليقا
                </span>
                <em>متابعة أراء وتقيمات
                  المشاهدين</em>
              </a>
            </li>
          </div>
        </div>
        {/* HeadingSingleBox */}
        <HeadingSingleBox/>

        </div>
      </div>
          
    )


  }
  
  export default MainSingleRight