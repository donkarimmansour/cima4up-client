import Footer from "../footer/Footer"
import Success from "../helper/alerts/Success"
import ADSin from "./ADSin"
import DownloadArea from "./DownloadArea"
import MainSingleRight from "./MainSingleRight/MainSingleRight"
import MinSingleSelcted from "./MinSingleSelcted"
import RelatedSection from "./RelatedSection"
import SelaryTap from "./SelaryTap"
import SingleChat from "./SingleChat"
import Teamwork from "./Teamwork"
import ThatsTags from "./ThatsTags"
import WhatchSec from "./WhatchSec"
 
const Index = () => {
    return (
        <div>
          
                  
            {/* PageContainer */}
            <div className="PageContainer">

              {/* MinSingleSelcted */}
              <MinSingleSelcted/>

              {/* container start*/}
              <div className="container">
                {/* MainSingleRight */}
                <MainSingleRight/>

                 {/* Teamwork */}
                <Teamwork/>

                {/* WhatchSec */}
                <WhatchSec/>

                 {/* DownloadArea */}
                 <DownloadArea/>

                {/* ADSin */}
                <ADSin/>

                 {/* ThatsTags */}
                 <ThatsTags/>

                {/* selaryTap */}
                <SelaryTap/>

                {/* ADSin */}
                <ADSin/>

                {/* SingleChat */}
                <SingleChat/>

                 {/* RelatedSection */}
                 <RelatedSection/>

              </div>
            </div>

            <Success />

            {/* Footer */}
            <Footer/>
 
            </div>
    )
  }
  
  export default Index