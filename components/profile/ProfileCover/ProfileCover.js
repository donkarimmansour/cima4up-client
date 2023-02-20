import AddStatus from "./AddStatus"
import ChooseColors from "./ChooseColors"
import CoverColorsList from "./CoverColorsList"
import RightBottomAvatar from "./RightBottomAvatar"

const ProfileCover = () => {
  return (
    <div className="ProfileCover CoverColor" style={{ backgroundColor: '#660033' }} data-color="#660033">
     
      <div className="FrontStatus" id="FrontStatus">
        <h1 style={{ color: '#ffffff' }}>ccccc</h1>
        <h1 className="Tested" id="Tested" style={{ display: 'none' }} />
      </div>

      {/* ChooseColors */}
      <ChooseColors />

      {/* CoverColorsList */}
      <CoverColorsList />

      {/* AddStatus */}
      <AddStatus />

      {/* RightBottomAvatar */}
      <RightBottomAvatar />

    </div>

  )
}

export default ProfileCover