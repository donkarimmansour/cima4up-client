import Head from 'next/head'
import Script from 'next/script'
import MobileMenu from '../components/footer/MobileMenu'
import BadMenu from '../components/header/BadMenu'
import Header from '../components/header/header'
import Index from '../components/index/Index'

const Home = () => {
  return (  
    <div dir="rtl">


      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>موقع افلام - سينما فور اب</title>
        <meta name="description" content="موقع سينما فور اب cima4up مشاهدة افلام اجنبي و افلام عربية و افلام اسيوية و افلام هندية و افلام تركية بجودة عالية مشاهدة اون لاين وتحميل مباشر افلام" />

        

      </Head>
     
       &#xFEFF; 
      <Header auth={false} />
      &#xFEFF; 
      
      <BadMenu/>

        {/* MobileMenu */}
    <MobileMenu />

      <Index />

   
    
    </div>

  )
}


export default Home