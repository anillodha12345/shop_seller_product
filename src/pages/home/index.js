import React from 'react'
import Banner from '../../component/banner'
import Sliders from '../../component/sliders'
import Footer from '../../component/layout/footer'
import BannerCard from '../../component/banner-card'
import BannerBackground from '../../component/bannerbackground'
import BestSellers from '../../component/bestsellers'
import FreeShipping from '../../component/free-shipping'
import TopStories from '../../component/topstories'




 const  Home = ()  => {
  return (
   <>
  
  <Banner/>
  <BannerCard/>
  <Sliders/>
<BannerBackground/>
<BestSellers/>
<FreeShipping/>
<TopStories/>

  <Footer/>


   </>
  )
}

export default Home