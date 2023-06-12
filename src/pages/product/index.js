import React from 'react'
import AboutBanner from '../../component/aboutsection/aboutbanner/aboutbanner'
import AllProducts from '../../component/allproduct/allproducts'
import image1 from "../../assets/images/aboutbanner.webp"



 const  Product = ()  => {
 
  return (
   <>

<AboutBanner image = {image1} name="Products" page="Product"/>
<AllProducts/>

 
   </>
  )
}

export default Product