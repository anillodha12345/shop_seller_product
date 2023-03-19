import React from 'react'
import Banner from '../../component/banner'
import Sliders from '../../component/sliders'
import Footer from '../../component/layout/footer'
import BannerCard from '../../component/banner-card'
import BannerBackground from '../../component/bannerbackground'
import BestSellers from '../../component/bestsellers'
import FreeShipping from '../../component/free-shipping'
import FeaturedSaleTrend from '../../component/featured_sale_trend'



 const  Home = ()  => {
  return (
   <>
  
  <Banner/>
  <BannerCard/>
  <Sliders/>
<BannerBackground/>
<BestSellers/>
<FreeShipping/>
<FeaturedSaleTrend/>
  <Footer/>


   </>
  )
}

export default Home