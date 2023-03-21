import React from 'react'
import { Link } from 'react-router-dom'

const Content = () =>  {
  return (
  <>
  <div className='wrapper-content  '>
        <div className='container   pt-5 pb-5 '>
            <div className='row'>
                <div className='col-md-4'>
                   <div><h5 className='text-center text-black'>Captivating and Creative</h5></div> 
                   <div className='pt-3'>
                            <p className='text-black px-5 text-center' style={{fontSize:"13px",fontFamily: "sans-serif"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam 
                            erat volutpat. </p>
                   </div> 
                   <div className='text-center pt-3'>
                    <h6><Link style={{color:"#0cc3ce"}}>Find out more</Link></h6>
                   </div>
                </div>
                <div className='col-md-4'>
                <div ><h5 className='text-center text-black'>Designed With Care</h5></div> 
                         <div className='pt-3'>
                                <p className='text-black px-5 text-center' style={{fontSize:"13px",fontFamily: "sans-serif"}}>Lorem ipsum dolor sit amet, 
                                   consectetuer adipiscing elit, 
                                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam 
                                    erat volutpat. 
                                </p>
                         </div>
                         <div  className='text-center pt-3'>
                            <h6><Link style={{color:"#0cc3ce"}}>Find out more</Link></h6>
                         </div>
                </div>
                <div className='col-md-4'>
                <div><h5 className='text-center text-black'>Stunning On All Screens</h5></div> 
                         <div className='pt-3'>
                                <p className='text-black px-5  text-center' style={{fontSize:"13px",fontFamily: "sans-serif"}}>Lorem ipsum dolor sit amet, 
                                   consectetuer adipiscing elit, 
                                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam 
                                    erat volutpat. 
                                </p>
                         </div>
                         <div className='text-center pt-3'>
                          <h6><Link  style={{color:"#0cc3ce"}}>Find out more</Link></h6>
                         </div>
                    
                </div>
             </div>   
        </div>
  </div>
  </>
  )
}


export default  Content