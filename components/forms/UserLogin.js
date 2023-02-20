
const UserLogin = () => {
  return (
    <div className="UserLogin">
    <form className="FirstStep FormContext" method="POST">
      <div className="alert alert-danger">المعذرة، اسم المستخدم هذا موجود مسبقاً.</div>
      <div className="FormControl">
        <label htmlFor="user_login">إسم العضوية</label>
        <div className="FormInput">
          <input autoComplete="off" autoCorrect="off" spellCheck="false" type="text" name="user_login" defaultValue placeholder="مثال : Ahmed" />
        </div>
      </div>
      <div className="FormControl">
        <label htmlFor="user_email">البريد الإلكتروني</label>
        <div className="FormInput">
          <input autoComplete="off" autoCorrect="off" spellCheck="false" type="email" name="user_email" defaultValue />
        </div>
      </div>
      <div className="FormControl">
        <label htmlFor="password">كلمة السر</label>
        <div className="FormInput">
          <input autoComplete="off" autoCorrect="off" spellCheck="false" type="password" name="user_password" placeholder="أدخل كلمة السر .." />
          <a href="#!" id="ShowPassword">إظهار</a>
        </div>
      </div>
      <div className="FormControl">
        <label htmlFor="password">أعد كلمة السر</label>
        <div className="FormInput">
          <input autoComplete="off" autoCorrect="off" spellCheck="false" type="password" name="user_password2" placeholder="أدخل كلمة السر مرة اخرى .." />
        </div>
      </div>
      <div className="FormControl">
        <label htmlFor="user_email">محتوى الرسالة </label>
        <div className="FormInput textcontent">
          <textarea name="StatusContent" placeholder="محتوى الرسالة " data-finish="true" defaultValue={""} />
        </div>
      </div>
      <input type="hidden" name="submit" defaultValue={1} autoComplete="off" autoCorrect="off" spellCheck="false" />
      <button type="submit" className="Hoverable">
        إبدأ الآن <i className="ion ion-md-arrow-back" />
      </button>
      <div className="DontHaveOneParent">
        <a href="#" className="DontHaveOne"> لديك حساب بالفعل ؟ أدخل عالمك الآن</a>
      </div>
    </form>
  </div>

  )
}

export default UserLogin