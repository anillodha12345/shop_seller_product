import React from 'react'
import BannerCard from '../../component/banner-card'
import Content from '../../component/content/content'
import Footer from '../../component/layout/footer'
// import Headers from '../../component/layout/header'
import TopBar from '../../component/layout/topbar'
import BrandCampaign from '../../component/portfoliosection/brandcampaign/brandcampaign'
import PortfolioBackground from '../../component/portfoliosection/portfoliobackground/portfoliobackground'
import PortfolioBackground2 from '../../component/portfoliosection/portfoliobackground2/portfoliobackground2'
import PortfolioBanner from '../../component/portfoliosection/portfoliobanner/portfoliobanner'
import StunningPortfolio from '../../component/portfoliosection/stunning-portfolio/stunning-portfolio'
import Testimonial from '../../component/portfoliosection/testimonial/testimonial'
import TopStories from '../../component/topstories'
// import TopStories from '../../component/topstories'

const   Portfolio = () =>  {
  return (
    <>
  <TopBar/>
     <PortfolioBanner/>
    <Content/>
    <PortfolioBackground/>
    <PortfolioBackground2/>
    <StunningPortfolio/>
    <Testimonial/>

    <TopStories/>
    <BannerCard/>
    
    
    <Footer/>
  
    
    </>
  )
}

export default Portfolio 

