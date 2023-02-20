import MainCutner from "./MainCutner"
import OverlayNigt from "./OverlayNigt"
import SingleNewes from "./SingleNewes/SingleNewes"

const Index = () => {
  return (
    //  {/* PageContainer */}
    <div className="PageContainer">
      {/* MainCutner */}
      <MainCutner />

      {/* overlayNigt */}
      <OverlayNigt /> 

      {/* SingleNewes */} 
      <SingleNewes />

    </div>
  )
}

export default Index