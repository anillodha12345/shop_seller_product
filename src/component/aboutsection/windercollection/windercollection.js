import React from 'react'
import Slider from "react-slick";
import image1 from "../../../assets/images/Portfolio-Gallery-1.jpg"
import image2 from "../../../assets/images/Portfolio-Gallery-2.jpg"
import image3 from "../../../assets/images/Portfolio-Gallery-3.jpg"
import image4 from "../../../assets/images/Portfolio-Gallery-4.jpg"
import image5 from "../../../assets/images/Portfolio-Gallery-5.jpg"
import image6 from "../../../assets/images/Portfolio-Gallery-6.jpg"
import image7 from "../../../assets/images/topstoreimage.2.jpg"

const  WinderCollection = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        cssEase: "linear"
      };
  return (
<>
<div className='container-fluid w-100'>
    <div className='row'>
       
        <Slider {...settings} arrows={false} dots={false}>
           
          
            <img src={image1} alt="no-image"  width="100%"/>
          
          
          <img src={image2} alt="no-image"  width="100%"/>
         
          
          <img src={image3} alt="no-image"  width="100%"/>
         
          
          <img src={image4} alt="no-image"  width="100%"/>
         
          
          <img src={image5} alt="no-image"  width="100%"/>
         
          
          <img src={image6} alt="no-image"  width="100%"/>
         
        </Slider>
        </div>
      </div>
</>
  )
}

export default  WinderCollection