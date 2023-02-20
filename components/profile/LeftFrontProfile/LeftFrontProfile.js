import BoxItem from "./BoxItem"
import StatusBoxes from "./StatusBoxes"

const LeftFrontProfile = () => {
  return (
    <div className="LeftFrontProfile">
    <div className="Timeline" id="UserTimeline" data-user={56307} data-type="seenlist" data-page={10} data-finish="false">
      <div className="Noactivities">
        <i className="ion ion-md-remove-circle-outline" />
        <p>لم يتم أضافة عناصر لقائمة المشاهدة </p>
      </div>
      {/* BoxItem */}
       <BoxItem/>

       {/* StatusBoxes */}
       <StatusBoxes active={""}/>

       <StatusBoxes/>

      </div>
  </div>
 
  )
}

export default LeftFrontProfile