import React from 'react';
// import image1 from '../../assets/images';

// import './Banner.css';
import './servicesbanner.css';

function ServicesBanner() {
  return (
    <div>
      
      
        <div className='row  m-0 p-0 w-100'>
           <img src="https://suprema.qodeinteractive.com/wp-content/uploads/2016/01/faq-1-title-image.jpg" alt='no-image' width="100%" className='images'/> 
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
                        Services.
                      </span>
                    </h2>
                  </div>

    
    </div>
  );
}

export default ServicesBanner;
















