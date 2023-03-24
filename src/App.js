import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/home'

import Product from './pages/product'
import Contact from './pages/contact'

import About from './pages/about'
// import Headers from './component/layout/header'
import CardsDetail from './component/cardsdetail'
import Footer from './component/layout/footer'
import TopBar from './component/layout/topbar'
import ElectronicServices from './component/servicesdetails/electronic-services'
import Services from './pages/services/service'
import Portfolio from './pages/portfolio/portfolio'

const   App = () => {

  return (
   <>
   <BrowserRouter>
   {/* <TopBar/> */}
  {/* <Headers/> */}
   <Routes>
    <Route path='/' element = {<Home/>} />
    <Route path='/services' element = {<Services/>} />
    <Route path='/product' element = {<Product/> } />
    <Route path='/about' element = {<About/>} />
    <Route path='/contact' element= {<Contact/>} />
    <Route path='/cardsdetail' element={<CardsDetail/>} />
    <Route path='/cardsdetail/:id' element={<CardsDetail/>} />
    <Route path="/footer"  element={<Footer/>}/>
    <Route path="/electronic-services/:id" element = {<ElectronicServices/>} />
    <Route path='/portfolio' element = {<Portfolio/>}/>
 
   </Routes>
   
   </BrowserRouter>


   
   </>
  )
}

export default  App
