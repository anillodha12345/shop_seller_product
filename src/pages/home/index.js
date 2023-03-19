import React from 'react'
import Banner from '../../component/banner'
import Sliders from '../../component/sliders'
import Footer from '../../component/layout/footer'
import BannerCard from '../../component/banner-card'
import BannerBackground from '../../component/bannerbackground'
import BestSellers from '../../component/bestsellers'



 const  Home = ()  => {
  return (
   <>
  
  <Banner/>
  <BannerCard/>
  <Sliders/>
<BannerBackground/>
<BestSellers/>
  <Footer/>


   </>
  )
}

export default Home