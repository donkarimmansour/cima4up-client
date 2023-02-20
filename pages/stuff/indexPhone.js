
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo"
import { GlobalStyle } from "/styles/GlobalStyle";
import Loader from '../components/Loader';
import dynamic from 'next/dynamic';
const MobilePricingSection = dynamic(() => import("../components/MobilePricingSection"), {  
  ssr: false,
  //loading: () => <Loader />, 
   loading: () => <><GlobalStyle /><Loader /></>,
}) 
 
  
const Home = () => {  
  
  const SEO = {
    title: "Next website",  
    description: "Database of movies created with Next.js and Strapi",
  }

  return (
    <> 
      <NextSeo {...SEO} />
      <GlobalStyle />
      <MobilePricingSection />
    </>
  ) 
}  


export default Home 

 
 export async function getServerSideProps({req, locale}) {  
  // console.log(req.headers["accept-language"]  , locale); 
  const lcl = req?.cookies?.NEXT_LOCALE || locale 

   return { 
     props: {
       ...(await serverSideTranslations(lcl, ['common' , 'phone'])),
     }, 
   };
 } 
  