
import React from 'react'
import image1 from "../../../assets/images/Portfolio-Gallery-1.jpg";
import image2 from "../../../assets/images/Portfolio-Gallery-2.jpg";
import image3 from "../../../assets/images/Portfolio-Gallery-3.jpg";
import image4 from "../../../assets/images/Portfolio-Gallery-4.jpg";
import image5 from "../../../assets/images/Portfolio-Gallery-5.jpg";
import image6 from "../../../assets/images/Portfolio-Gallery-6.jpg";

 const BrandCampaign = () =>  {
  return (
    <>
    <div className='wrapper_banner_card'>
        <div  className='container  '>
            <div className='row mt-3 mb-3 '>
                <div className='col-lg-4'><img src={image1} width="100%"  alt='no-image'/></div>
                <div className='col-lg-4'><img src={image2} width="100%"  alt='no-image' /></div>
                <div className='col-lg-4'><img src={image3} width="100%"  alt='no-image' /></div>
            </div>
            <div className='row mt-3 mb-3'>
                <div className='col-lg-4'><img src={image4} width="100%"  alt='no-image' /></div>
                <div className='col-lg-4'><img src={image5} width="100%"  alt='no-image'/></div>
                <div className='col-lg-4'><img src={image6} width="100%"  alt='no-image'/></div>
            </div>
        </div>    
    </div>
    </>
  )
}

export default BrandCampaign