import React from 'react'
import "../production.css"


 const HeadPhone = () =>  {
  return (
    <>
    <div className='wrapper_headphone'>
        <div className='container-fluid'>
            <div className='row headphone_image'>
            
                <div className='col-lg-6'></div>
                <div className='col-lg-6 mt-5 px-5 '>
                    <div className='p-5 px-'>
                    <div className='py-2'><h5 className=''>The ultimate headphones, only</h5></div>
                    <div ><h1  className='text-black' style={{
                          fontSize: "74px",
                          letterspacing: "-2px",
                          marginBottom: "6px",
                          lineHeight: "83px",
                          fontFamily:"sans-serif",
                          fontWeight:"900"
                        }}
                       >$99.00</h1></div>
                    <div className='py-2 text-secondary' style={{paddingRight:"50PX"}}><p >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                         quis nostrud exerci</p></div>
                </div>
                </div>
                        
            </div>
            
        </div>

        
    </div>
<div  className='container pt-5 pb-5'>
    <div className='row pt-5'>
        <div><h2 className='text-center text-black'>The ultimate sound experience.</h2></div>
        <div className='pt-2  text-secondary'> <p className='text-center px-5'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
             sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
             Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
             vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan</p></div>
    </div>
    </div>
    
    
    </>
  )
}

export default  HeadPhone