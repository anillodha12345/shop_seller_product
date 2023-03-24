import React from 'react';
import  image1 from "../../assets/images/about.jpg"


const AboutBanner = () => {
  return (
    <div>
      
      
        <div className='row  m-0 p-0 w-100'>
           <img src={image1} alt='no-image' width="100%" height={650} /> 
        </div>
        <div className='text-center '>
                    <h2 className=" mb-3 mt-3 text-white  animate__animated  animate__fadeInUpBig  banner_services_heading ">
                      <span
                        className=" "
                        style={{
                          fontSize: "74px",
                          letterspacing: "-2px",
                          marginBottom: "6px",
                          lineHeight: "83px",
                        }}
                      >
                        About.
                      </span>
                    </h2>
                  </div>

    
    </div>
  );
}

export default AboutBanner;