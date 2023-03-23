import React from 'react'
import Footer from '../../component/layout/footer'
import Headers from '../../component/layout/header'
import TopBar from '../../component/layout/topbar'
import BrandCampaign from '../../component/portfoliosection/brandcampaign/brandcampaign'
import PortfolioBanner from '../../component/portfoliosection/portfoliobanner/portfoliobanner'
import TopStories from '../../component/topstories'

const   Portfolio = () =>  {
  return (
    <>
    <TopBar/>
    <Headers/>
    <PortfolioBanner/>
    <BrandCampaign/>
   <TopStories/>
    <Footer/>
  
    
    </>
  )
}

export default Portfolio 