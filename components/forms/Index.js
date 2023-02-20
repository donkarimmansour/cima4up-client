import MainHeaderLogin from "./MainHeaderLogin"
import UserLogin from "./UserLogin"

const Index = () => {
  return (
    // {/* PageContainer */}
    <div className="PageContainer">

    <div className="container">
      <div className="MainPage CommunityPage">
        <div className="FirstSingleSection">
          <div className="RightSideSectionFirst">
            <div className="ExploringSteps">
              <div className="InnerExplorer">
                {/* MainHeaderLogin */}
                <MainHeaderLogin/>

                {/* UserLogin */}
                 <UserLogin/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  )
}

export default Index