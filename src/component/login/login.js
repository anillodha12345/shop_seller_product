import { Header } from 'antd/es/layout/layout';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

 const  Login = () =>  {
 const [email,setEmail] = useState()
 const[password,setPassword] = useState()

 const navigate = useNavigate();

    function handleClick(e){
        e.preventDefault()
        
        if(email ==="anillodha.guna21@gmail.com" && password === "anil@123") {
           setEmail( localStorage.setItem("email","anillodha.guna21@gmail.com"))
           setPassword(localStorage.setItem("password","anil@123")) 
            
           navigate('/');

        }
       
       
    }
   
  
  return (
    <>

<div className="container-fluid bg-success  w-100 " style={{height:"100vh"}}>
        <div className="row  justify-content-center">
          <div className="mt-5 col-md-12  w-50  wrapper">
            <form className="mt-5 mb-3 bg-warning pt-5 pb-5 wrapper-login">
              <h2 className="mb-5"> Login</h2>
              
              

              <label>Email</label>&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="email"
               
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <br />
              <label>Password</label>&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="email"
               
                value={email}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <br />
              
             
              <button type="submit" onClick={handleClick}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>

    
    </>
  )
}


export default  Login