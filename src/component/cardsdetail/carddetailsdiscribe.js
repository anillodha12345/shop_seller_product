import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

 const CardDetailsDiscribe = () =>  {
  return (
   <>
   <div className='wrapper_card_discribe'>
     <div className='container'> 
     <hr/>
        <div className='row pt-2 pb-2 px-5'>
       
            <div className='col-lg-4'><FaFacebookF  size={25}/> &nbsp;&nbsp;<span>share on facebook</span></div>
            <div className='col-lg-4'><AiOutlineTwitter size={25}/> &nbsp;&nbsp;<span>share on twitter</span></div>
            <div className='col-lg-4'><AiOutlineInstagram size={25}/>&nbsp;&nbsp;<span>share on instagram</span></div>
             
        </div>
        <hr/>

       
     </div>
   </div>
   
   </>
  )
}


export default CardDetailsDiscribe