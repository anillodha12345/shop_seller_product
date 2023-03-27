import React from 'react'
import "./contactbanner.css"


 const ContactBanner = ()  => {
  return (
    <>
    <div className='wrapper_contact_banner'>
        <div className='container-fluid w-100'> 
            <div className='row'>
                <div className='contact_banner_image'>
                    <img src="https://suprema.qodeinteractive.com/wp-content/uploads/2016/01/contact-image-1.jpg" alt="no-image"  width="100%" height="650px"/>
                </div>
                <div className='contact_banner_text'><h1 className='about_text  text-center  text-white'
                 style={{
                    fontSize: "74px",
                    letterspacing: "-2px",
                    marginBottom: "6px",
                    lineHeight: "83px",
                  }}
                >Contact us</h1></div>
            </div>
            <div className='row'><img src="https://www.google.com/maps/dir///@22.701784,75.8857707,12z" alt='no-image' width="100%"/></div>
        </div>
    </div>
    
    </>
  )
}

export default ContactBanner