import React from 'react'

const UsersArea = ({auth}) => {


  const ToggleButtonDropdown = (e) => {
     e.target.parentElement.classList.toggle('active') 
  }



  

  return (
    <div className="UsersArea">
      <ul>

        {auth ?

          <li className="Myprofile CoverColor">
            <a className="Hoverable ToggleButtonDropdown nobind" href="#" onClick={(e) => {ToggleButtonDropdown(e)}}>
              <div className="ProfileAvatar">
                <i className="ion ion-md-person"></i>
              </div>
              <span>zz</span>
              <em className="ion ion-ios-arrow-down"></em>
            </a>

            <ul className="UserDropdown">
              <li>
                <a className="nobind" href="#">
                  <i className="ion-md-contact"></i>الصفحة الشخصية </a>
              </li>
              <li>
                <a className="nobind" href="#">
                  <i className="ion ion-md-alarm"></i> المشاهدة لاحقاََ</a>
              </li>
              <li>
                <a className="nobind" href="#">
                  <i className="ion ion-md-eye"></i>شاهدته من قبل </a>
              </li>
              <li>
                <a className="nobind" href="#">
                  <i className="ion ion-md-code-download"></i>التحميل لاحقاََ</a>
              </li>
              <li>
                <a className="nobind" href="#">
                  <i className="ion ion-md-lock"></i> إعدادات الحساب</a>
              </li>
              <li>
                <a className="nobind" href="#">
                  <i className="ion ion-md-exit"></i> تسجيل الخروج</a>
              </li>
            </ul>
          </li>


          :

          <li className="Signin">
            <a className="Hoverable" href="#">
              <i className="ion ion-ios-log-in" />
              أنضم ألينا{" "}
            </a>
          </li>

        }
       
      </ul>
    </div>
  )

}

export default UsersArea