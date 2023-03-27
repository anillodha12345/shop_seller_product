import React from 'react'
import TopBar from '../../component/layout/topbar'
import "./product.css"
import Newstore from '../../component/newstore'
import BestSellers from '../../component/bestsellers'
import Footer from '../../component/layout/footer'
import Headers from '../../component/layout/header'


 const  Product = ()  => {
 
  return (
   <>
 <TopBar/>
 <div className='header_wrapper'>
 <Headers  title=" Suprema" style={{color: "white" }} 
    title1 = "Home"
    title2 = "Products"
    title3 = "Services"
    title4 = "Portfolio"
    title5 = "About"
    title6 = "Contact"
    title7 = "Login"
    className="productabc"
  
    />
 </div>

 <Newstore/>
 <BestSellers/>
 <Footer/>
   </>
  )
}

export default Product