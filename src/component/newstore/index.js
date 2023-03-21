import React, { useState } from 'react'
import Banner from '../banner'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Headers from '../layout/header'
import Products from '../products'
import { Productslider } from '../products/productData';

 const Newstore = ()  => {
  const [data,setData] = useState(Productslider)
  console.log(data,"Anil lodha");
  return (
    <>
    <Headers />

<div className='product_wrapper'> 
<div className='container-fluid w-100'>
    <Carousel>
{
  data.map((items) => {
    return (
      <>
      <div className='row'>
      <img src={items.image} alt="noimage" width="100%" />
      <h1>{items.title}</h1>
      <p>{items.paragraph}</p>
      </div>
      </>
    )
  })
}
</Carousel>
</div>
</div>

<Banner/>
<Products/>

  
  

  
  
 

    </>
  )
}

export default Newstore