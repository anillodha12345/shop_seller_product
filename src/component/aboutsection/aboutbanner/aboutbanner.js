import React from 'react';
import image1 from "../../../assets/images/about1.jpg"
import "../abouts.css"
import Headers from '../../layout/header';


const AboutBanner = () => {
  return (
    <>
{/* <div className='wrapper_about_header '>
    <div className='container-fluid m-0 w-100 about_container'>
        <div className='row  about_header'>
        <Headers style={{ background: 'red' }}/>
        </div>
    </div>
</div> */}



    <div className='wrapper_about ' style={{height:"600px"}}>
      <div className='container-fluid m-0  w-100'>
        <div className='row'>
          <div className='about_banner_img'><img src={image1} alt='no-image' width="100%" />
         <h1 className='about_heading text-center'><span className='about_heading1 text-white ' >About Us</span></h1> 
           </div>

        </div>
      </div>
    </div>
    
    </>

  );
}

export default AboutBanner;