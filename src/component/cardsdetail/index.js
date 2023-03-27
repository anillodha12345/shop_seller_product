import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ADD, DELETE, ONE_REMOVE } from '../../redux/action';
import BestSellers from '../bestsellers';
import Footer from '../layout/footer';
import Headers from '../layout/header';

 
const CardsDetail = ()  => {
    const[data,setData] = useState([])
    const navigate = useNavigate()
    
  

    const {id }=  useParams() 
    const dispatch = useDispatch()
    
    const getdata = useSelector((state)=> state.cartreducer.carts);
   
   const compare = () => {
    let comparedata = getdata.filter((e) => {
     return  e.id == id
    })
    setData(comparedata);
   }
   
   useEffect(() => {
     compare()
   
   },[id])

   const send = (e) => {
    dispatch(ADD(e));
  };

  const items_Delete = (item) =>  {
dispatch(ONE_REMOVE(item))
  }

  const Delete = (id) => {
    dispatch(DELETE(id)) 
    navigate("/")
  }

  return (
    <>
 <Headers
        title=" Suprema"
        style={{ color: "black" }}
        title1="Home"
        title2="Products"
        title3="Services"
        title4="Portfolio"
        title5="About"
        title6="Contact"
        title7="Login"
      />
    

    {
        data ?.map((items) => {
            return(
                <>
                 <div className='container-fluid w-100'>
        <div className='row'>
            <div className='col-md-6 cards_image p-5'>
                <div className='cards_image1 p-5'>
    <img src={items.imgdata}  width="100%" height={500}/>

                </div>
            </div>
            <div className='col-md-6 card_image_details pt-5'>
                <div className='card_image_details1 pt-5'>
                    <Table>
                    <tr>
                        <td className='pt-5 w-50'>
                             <h1 className='text-black fs-3'>  {items.rname}</h1>
                            <h3 className='text-secondary'>  ${items.price} </h3>
                            <p>{items.paragraph}</p>
                            <p>  {items.address} </p>
                            <p>  {items.price * items.qnty} </p>


                            <div className=' d-flex justify-content-between align-items-center bg-secondary rounded' style={{width:"120px"}}>
                            <span style={{fontSize:"25px"}}  className='text-white' onClick={items.qnty <= 1 ? () => Delete(items.id): () => items_Delete(items)}>-</span>
                            <span style={{fontSize:"25px"}} Name='text-white'>{items.qnty}</span>
                            <span style={{fontSize:"25px"}} className='text-white' onClick={() => send(items)}>+</span>
                            </div>
                            
                        </td>
                        <td className='pt-5'>
                             <p><b>Rating </b> : <span className='bg-success text-white rounded'>{items.rating}★</span></p>
                            <p><b>Review</b>  : 1175 + order placed from here recently </p>
                         
                            <p> <MdDelete size={30} color='black' onClick={() => Delete(items.id)}/> </p>
                        </td>
                    </tr>
                    </Table>

                </div>
                
            </div>

        </div>
      
        <BestSellers/>
        <Footer/>
    </div>

                </>
            )

        })
    }
   
    
    </>
  )
}


export default CardsDetail