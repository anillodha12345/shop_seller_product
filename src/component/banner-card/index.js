
import React from 'react'
import bannercard1 from "../../assets/images/banner-card1.jpg";
import bannercard2 from "../../assets/images/banner-card2.jpg";
import bannercard3  from "../../assets/images/banner-card3.jpg";
import bannercard4 from "../../assets/images/banner-card4.jpg";

 const BannerCard = () =>  {
  return (
    <>
    <div className='wrapper_banner_card'>
        <div  className='container-fluid'>
            <div className='row mt-3 mb-3'>
                <div className='col-lg-3'><img src={bannercard1} width="100%" /></div>
                <div className='col-lg-3'><img src={bannercard2} width="100%" /></div>
                <div className='col-lg-3'><img src={bannercard3} width="100%" /></div>
                <div className='col-lg-3'><img src={bannercard4} width="100%"  /></div>
            </div>
        </div>    
    </div>
    </>
  )
}

export default BannerCard