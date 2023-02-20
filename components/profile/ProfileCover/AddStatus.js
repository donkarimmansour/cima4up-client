
const AddStatus = () => {
  return (
    <div className="AddStatus">
    <form  className="AjaxForm FirstStep FormContext" method="POST">
      <input type="hidden" name="submit" defaultValue={1} autoComplete="off" autoCorrect="off" spellCheck="false" />
      <input type="hidden" id="idselect" name="idselect" defaultValue="639db38408cbd" autoComplete="off" autoCorrect="off" spellCheck="false" />
      <textarea maxLength={200} name="StatusContent" placeholder="أكتب حالة تدور في بالك .." id="StatusContent" data-finish="true" defaultValue={"                                                "} />
      <ul>
        <li className="FontColorOpen">
          <i className="ion ion-md-color-fill" />
          <span>لون الخط </span>
        </li>
        <li className="OpenAllStat">
          <i className="ion ion-md-list" />
          <span>اختر من الحالات السابقة </span>
        </li>
        <li className="ReviewFinish">
          <i className="ion ion-md-eye" />
          <span>معاينة </span>
        </li>
      </ul>
      <input className="jscolor" type="hidden" id="StatusColor" name="StatusColor"  defaultValue="FFFFFF" autoComplete="off" autoCorrect="off" spellCheck="false" style={{backgroundImage: 'none', backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(0, 0, 0)'}} />
      <button type="submit" className="Hoverable">
        إضافة <i className="ion ion-md-add-circle" />
      </button>
    </form>
    <ul className="custom-select" id="StatusSelect" style={{display: 'none'}}>
      <li data-stid="639db33431cef" data-color="ffffff" className="active">
        <em style={{backgroundColor: '#ffffff'}} />
        <span>ccccc</span>
      </li>
    </ul>
  </div>

  )
}

export default AddStatus