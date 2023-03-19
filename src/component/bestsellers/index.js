import React from 'react'
import card1 from "../../assets/images/bestsellersimage1.jpg"
import card2 from "../../assets/images/bestsellersimage2.jpg"
import card3 from "../../assets/images/bestsellersimage3.jpg"
import card4 from "../../assets/images/bestsellersimage4.jpg"
import card5 from "../../assets/images/bestsellersimage5.jpg"
import card6 from "../../assets/images/bestsellersimage6.jpg"
import card7 from "../../assets/images/bestsellersimage7.jpg"
import card8 from "../../assets/images/bestsellersimage8.jpg"

 const BestSellers = () => {
  return (
<>
<div className='wrapper_sellers '>
    <div className='container mt-5 mb-3'>
        <div className='row'>
            <div className='pb-5'>
                 <h6 className='text-center text-black'>Best Sellers</h6>
                 <h3 className='text-center text-black'>Browse Through Our Best Selleres</h3>
            </div>
         </div>
         <div className='row mt-3 pb-3 '>
            <div className='col-lg-3  '><img  src={card1} alt='no-card' width={315}/>
            <div className='pt-2'><p>Men , Shoes , Sportswear</p></div>
            <div ><h6> Black Skater  Sneakers</h6></div>
            <div><p>Price : $85 </p></div>
            </div>
            <div className='col-lg-3' ><img  src={card2} alt='no-card'  width={315}/>
            <div className='pt-2'><p>Accessories, New Collection ,Women</p></div>
            <div><h6>Tote Cream Bag</h6></div>
            <div><p>Price : $35 </p></div>
            </div>
            <div className='col-lg-3'><img  src={card3} alt='no-card'   width={300} />
            <div className='pt-2'><p> Accessories , Men , Sportswear </p></div>
            <div><h6>Tech Wristwatch</h6></div>
            <div><p>Price : $540 </p></div>
            </div>
            <div className='col-lg-3'><img  src={card4} alt='no-card'   width={300}/>
            <div className='pt-2'><p>Men , New Collection ,Sportswear </p></div>
            <div><h6>Grey Wool Sweater</h6></div>
            <div><p>Price : $60 </p></div>
            </div>
         </div><div className='row mt-3 pb-5 '>
            <div className='col-lg-3 '><img  src={card5} alt='no-card' width={300}/>
            <div className='pt-2'><p>Men , Shoes , Sportswear</p></div>
            <div><h6>Skater Black Sneakers</h6></div>
            <div><p>Price : $85 </p></div>
            </div>
            <div className='col-lg-3'><img  src={card6} alt='no-card'  width={300}/>
            <div className='pt-2'><p>Accessories, New Collection ,Women</p></div>
            <div><h6>Tote Cream Bag</h6></div>
            <div><p>Price : $35 </p></div>
            </div>
            <div className='col-lg-3'><img  src={card7} alt='no-card'   width={300} />
            <div className='pt-2'><p> Accessories , Men , Sportswear </p></div>
            <div><h6>Tech Wristwatch</h6></div>
            <div><p>Price : $540 </p></div>
            </div>
            <div className='col-lg-3'><img  src={card8} alt='no-card'   width={300}/>
            <div className='pt-2'><p>Men , New Collection ,Sportswear </p></div>
            <div><h6>Grey Wool Sweater</h6></div>
            <div><p>Price : $60 </p></div>
            </div>
         </div>
         
        
        
    </div>
</div>

</>
  )
}

export default BestSellers