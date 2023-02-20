
const FirstStep = () => {
  return (
    <form className="AjaxForm FirstStep FormContext" method="POST">
    <div className="alert alert-danger">تعذر تحديث كلمة المرور .. تأكد من كلمة المرور القديمة وحاول مرة اخري :)</div>
    <div className="LeftFormData">
      <div className="alert alert-info">ضع اسمك ليظهر لأعضاء سيما فور أب فى التواصل ..</div>
      <div className="FormControl">
        <label htmlFor="first_name">إسمك الاول</label>
        <div className="FormInput">
          <input autoComplete="off" defaultValue="zz" autoCorrect="off" spellCheck="false" type="text" name="first_name" placeholder="مثال : أحمد" />
        </div>
      </div>
      <div className="FormControl"><label htmlFor="last_name">إسمك الاخير</label>
        <div className="FormInput">
          <input autoComplete="off" defaultValue autoCorrect="off" spellCheck="false" type="text" name="last_name" />
        </div>
      </div>
      <input type="hidden" name="submit" defaultValue={1} autoComplete="off" autoCorrect="off" spellCheck="false" />
    </div>
    <div className="FullEditForm">
      <div className="FormControl">
        <label htmlFor="user_email">البريد الالكتروني</label>
        <div className="FormInput">
          <input autoComplete="off" defaultValue="don.karimmansour@gmail.com" autoCorrect="off" spellCheck="false" type="text" name="user_email" />
        </div>
      </div>
      <strong className="ChangePasswordLabel">تغيير كلمة السر ؟</strong>
      <div className="FormControl PasswordControl FirstPassword">
        <label htmlFor="password">كلمة المرور الجديدة</label>
        <div className="FormInput">
          <input autoComplete="off" autoCorrect="off" spellCheck="false" type="password" name="user_password" placeholder="أدخل كلمة السر .." />
          <a href="#!" id="ShowPassword">إظهار</a>
        </div>
      </div>
      <div className="FormControl PasswordControl FirstPassword"><label htmlFor="password">إعادة كلمة المرور</label>
        <div className="FormInput">
          <input autoComplete="off" autoCorrect="off" spellCheck="false" type="password" name="user_password2" placeholder="أدخل كلمة السر مرة اخرى .." />
        </div>
      </div>
      <div className="FormControl">
        <label htmlFor="lastpassword">كلمة المرور القديمة</label>
        <div className="FormInput">
          <input autoComplete="off" autoCorrect="off" spellCheck="false" type="text" name="lastpassword" defaultValue />
        </div>
      </div>
    </div>
    <div className="ButtonsExploring">
      <button type="submit" href="#" className="SaveAndContinue Hoverable">
        حفظ الإعدادات <i lass="ion ion-md-arrow-back" />
      </button>
    </div>
  </form>

  )
}

export default FirstStep