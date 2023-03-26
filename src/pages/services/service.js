import React from 'react'
import BannerCard from '../../component/banner-card'
import Footer from '../../component/layout/footer'
import Headers from '../../component/layout/header'
import TopBar from '../../component/layout/topbar'
import Pricing from '../../component/servicesection/pricing/priging'
import ServicesBanner from '../../component/servicesection/servicebanner/servicesbanner'
import ServicesCard from '../../component/servicesection/servicesdeliverycard/servicescard'
import Sectionprice from '../../component/servicesection/servicesprice/sectionprice'

const Services = () => {
  return (
    <>
    <TopBar/>
    <div className='header_wrappers'>
 <Headers  title=" Suprema" style={{color: "black" }} 
    title1 = "Home"
    title2 = "Products"
    title3 = "Services"
    title4 = "Portfolio"
    title5 = "About"
    title6 = "Contact"
    title7 = "Login"
  
    />
 </div>

    <ServicesBanner/> 
    <Pricing 
    images="https://suprema.qodeinteractive.com/wp-content/uploads/2016/01/services-wide-1.jpg"
    title = "Lorem ipsum dolor sit amet, consectetuer erat."
    paragraph= "Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat Ut wisi enim ad minim veniam quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequatDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat vel illum dolore eu feugiat nulla" 
    button = "CONTINUE READING"
    />
     <Pricing 
    images="https://suprema.qodeinteractive.com/wp-content/uploads/2016/01/services-wide-1.jpg"
    title = "Lorem ipsum dolor sit amet, consectetuer erat."
    paragraph= "Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat Ut wisi enim ad minim veniam quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequatDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat vel illum dolore eu feugiat nulla" 
    button = "CONTINUE READING"
   />
     <Pricing 
    images="https://suprema.qodeinteractive.com/wp-content/uploads/2016/01/services-wide-1.jpg"
    title = "Lorem ipsum dolor sit amet, consectetuer erat."
    paragraph= "Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat Ut wisi enim ad minim veniam quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequatDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat vel illum dolore eu feugiat nulla" 
    button = "CONTINUE READING"
    />
     <Pricing 
    images="https://suprema.qodeinteractive.com/wp-content/uploads/2016/01/services-wide-1.jpg"
    title = "Lorem ipsum dolor sit amet, consectetuer erat."
    paragraph= "Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat Ut wisi enim ad minim veniam quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequatDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat vel illum dolore eu feugiat nulla" 
    button = "CONTINUE READING"
    />

    <ServicesCard  />
    <Sectionprice/>
    <BannerCard/>
    <Footer/>
      
    
    </>
  )
}

export default  Services 