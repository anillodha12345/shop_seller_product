import React from 'react'
import BannerCard from '../../component/banner-card'
import Footer from '../../component/layout/footer'
import Headers from '../../component/layout/header'
import Pricing from '../../component/servicesection/pricing/priging'
import ServicesBanner from '../../component/servicesection/servicebanner/servicesbanner'
import ServicesCard from '../../component/servicesection/servicesdeliverycard/servicescard'
import Sectionprice from '../../component/servicesection/servicesprice/sectionprice'

const Services = () => {
  return (
    <>
    <Headers/>
    <ServicesBanner/>
    <Pricing images="https://suprema.qodeinteractive.com/wp-content/uploads/2016/01/services-wide-1.jpg"/>
    <Pricing images ="https://suprema.qodeinteractive.com/wp-content/uploads/2016/01/services-wide-2.jpg"/>
    <Pricing images ="https://suprema.qodeinteractive.com/wp-content/uploads/2016/01/services-wide-3.jpg" />
    <Pricing images ="https://suprema.qodeinteractive.com/wp-content/uploads/2016/01/services-wide-4.jpg" />
    <ServicesCard/>
    <Sectionprice/>
    <BannerCard/>
    <Footer/>
    
    
    </>
  )
}

export default  Services 