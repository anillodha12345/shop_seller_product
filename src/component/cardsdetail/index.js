import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ADD, DELETE, ONE_REMOVE } from '../../redux/action';
import BestSellers from '../bestsellers';
import Footer from '../layout/footer';
import Headers from '../layout/header';
import CardDetailsDiscribe from './carddetailsdiscribe';

 
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
            <div className='col-md-6 cards_image '>
                <div className='cards_image1 p-5'>
    <img src={items.imgdata}  width="100%" height={500}/>

                </div>
            </div>
            <div className='col-md-6 card_image_details pt-5'>
                <div className='card_image_details1 pt-5'>
                    <Table>
                    <tr>
                        <td className=' w-75  '>
                             <h2 className='text-black fs-3 p-1 m-1'>  {items.rname}</h2>
                            <h4 className='text-secondary p-1 m-1'>  ${items.price} </h4>
                            <p className='p-1 m-1'>{items.paragraph}</p>
                            <p className='p-1 m-1'> {items.address} </p>
                            <p className='p-1 m-1'>  {items.price * items.qnty} </p>
                            <p className='p-1 m-1'><b>Rating </b> : <span className='bg-success text-white rounded'>{items.rating}★</span></p>
                            <p ><b>Review</b>  : 1175 + order placed from here recently </p>
                           
                         


                           <div className=' d-flex justify-content-between align-items-center bg-secondary rounded' style={{width:"120px"}}>
                            <span style={{fontSize:"25px"}}  className='text-white' onClick={items.qnty <= 1 ? () => Delete(items.id): () => items_Delete(items)}>-</span>
                            <span style={{fontSize:"25px"}} Name='text-white'>{items.qnty}</span>
                            <span style={{fontSize:"25px"}} className='text-white' onClick={() => send(items)}>+</span>
                            </div>
                            
                        </td>
                        <td> <p> <MdDelete size={30} color='black' onClick={() => Delete(items.id)}/> </p> </td>
                        
                    </tr>
                    </Table>

                </div>
                
            </div>

        </div>
      <CardDetailsDiscribe/>
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