import FirstStep from "./FirstStep"
import LeftFrontProfile from "./LeftFrontProfile/LeftFrontProfile"
import MainListsUsers from "./MainListsUsers/MainListsUsers"
import ProfileCover from "./ProfileCover/ProfileCover"

const Index = () => {
    return (
    //   {/* PageContainer */}
      <div className="PageContainer"> 
        <div className="container">
          <div className="HeadingPage StickyTimeline">
            <div className="FirstSingleSection">
              <div className="RightSideSectionFirst">
                <div className="InnerRightSideSectionFirst">
                  {/* ProfileCover */}
                  <ProfileCover/>

                  {/* MainListsUsers */}
                  <MainListsUsers/>

                 {/* LeftFrontProfile */}
                 <LeftFrontProfile/>

                  {/* FirstStep */}
                  <FirstStep/>

                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Index