import React from 'react'
import Counting from '../../component/aboutsection/counting/counting'
import BannerCard from '../../component/banner-card'
import Content from '../../component/content/content'
import Footer from '../../component/layout/footer'
import Headers from '../../component/layout/header'
import TopBar from '../../component/layout/topbar'
import BrandCampaign from '../../component/portfoliosection/brandcampaign/brandcampaign'
import PortfolioBackground from '../../component/portfoliosection/portfoliobackground/portfoliobackground'
import PortfolioBackground2 from '../../component/portfoliosection/portfoliobackground2/portfoliobackground2'
import PortfolioBanner from '../../component/portfoliosection/portfoliobanner/portfoliobanner'
// import StunningPortfolio from '../../component/portfoliosection/stunning-portfolio/stunning-portfolio'
import Testimonial from '../../component/portfoliosection/testimonial/testimonial'
import TopStories from '../../component/topstories'
// import TopStories from '../../component/topstories'


const   Portfolio = () =>  {
  return (
    <>
  <TopBar/>
  <div className='header_wrapper'>
 <Headers  title=" Suprema" style={{color: "white" }} 
    title1 = "Home"
    title2 = "Products"
    title3 = "Services"
    title4 = "Portfolio"
    title5 = "About"
    title6 = "Contact"
    title7 = "Login"
  
    />
 </div>
     <PortfolioBanner/>
     <div className="container">
      <Content
        title={"Designed With Care"}
        paragraph="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
        text="Find out more"
      />

      <Content
        title={"Stunning On All Screens"}
        paragraph="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
        text="Find out more"
      />
        <Content
        title={"Stunning On All Screens"}
        paragraph="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
        text="Find out more"
      />

</div>
    <PortfolioBackground/>
    <PortfolioBackground2/>

  <div className='container mb-3 pt-3 '>
    <div className='row justify-content-center'>
     <BannerCard image="https://suprema.qodeinteractive.com/wp-content/uploads/2016/01/Portfolio-Gallery-2.jpg" />
      <BannerCard image="https://suprema.qodeinteractive.com/wp-content/uploads/2016/01/Portfolio-Gallery-1.jpg" />
      <BannerCard image="https://suprema.qodeinteractive.com/wp-content/uploads/2016/01/Portfolio-Gallery-4.jpg" />
      <BannerCard image="https://suprema.qodeinteractive.com/wp-content/uploads/2016/01/Portfolio-Gallery-3.jpg" />
      </div>
  </div>

  <div className='container'>
    <div className='row justify-content-center'> 
     <BannerCard image="https://suprema.qodeinteractive.com/wp-content/uploads/2016/01/Portfolio-Gallery-5.jpg" />
      <BannerCard image="https://suprema.qodeinteractive.com/wp-content/uploads/2016/01/Portfolio-Gallery-6.jpg" />
      <BannerCard image="https://suprema.qodeinteractive.com/wp-content/uploads/2016/01/Portfolio-Gallery-3.jpg" />
      <BannerCard image="https://suprema.qodeinteractive.com/wp-content/uploads/2016/01/Portfolio-Gallery-2.jpg" />
      </div>
  </div>
    
     

    <Testimonial image="https://suprema.qodeinteractive.com/wp-content/uploads/2016/01/home-main-image-2.png"/>

<div className='container '>
  <div className=' row justify-content-center'>
    <TopStories
       image= "http://localhost:3000/static/media/topstoreimage1.d7b36a9966ee3cdfe617.jpg"
       title="10 Innovative Playlist Apps"
       date="February 12, 2016"
       paragraph = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut..."
       readmore = "Continue reading"
       />
      <TopStories
       image= "https://suprema.qodeinteractive.com/wp-content/uploads/2016/02/15-Best-Coffee-Shops-In-LA.jpg"
       title="15 Best Coffee Shops In LA"
       date="February 12, 2016"
       paragraph = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut..."
       readmore = "Continue reading"
      />
      <TopStories
       image= "https://suprema.qodeinteractive.com/wp-content/uploads/2016/02/The-10-Best-Workouts-Of-2015.jpg"
       title ="Gabriele Jones"
       date="February 12, 2016"
       paragraph = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut..."
       readmore = "Continue reading"
      />
</div>
</div>
<Counting/>
    
    
    <Footer/>
  
    
    </>
  )
}

export default Portfolio 

