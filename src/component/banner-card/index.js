
import React from 'react'
import "./bannercard.css"


 const BannerCard = (props) =>  {
  return (
    <>

  <div className='row cards'>
    <img src={props.image}  className='card_image'/>
  </div>
 

    </>
  )
}

export default BannerCard