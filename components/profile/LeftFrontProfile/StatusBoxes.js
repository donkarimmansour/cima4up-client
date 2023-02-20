import LeftState from "./LeftState"
import PostController from "./PostController"

const StatusBoxes = () => {
  return (
    <div className="StatusBoxes">
      <div className="DateingItems">
        <em style={{ borderColor: '#FFFFFF' }} />
        <span>December 17, 2022 2:31 pm</span>
      </div>
      {/* LeftState */}
      <LeftState />

      {/* PostController */}
      <PostController />

      <div className="StatContent">hey</div>
    </div>
  )

}

export default StatusBoxes