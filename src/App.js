import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/home'
import { ScrollToTop } from 'react-router-scroll-to-top';
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
import Login from './component/login/login'
import { HiLogout } from 'react-icons/hi'
import Protected from './component/protected/protected'

const   App = () => {

  return (
   <>
   <BrowserRouter>
   {/* <TopBar/> */}
  {/* <Headers/> */}
  <ScrollToTop />
   <Routes>
    <Route path='/' element = {<Protected Component = {Home} />} />
    <Route path='/services' element = {<Protected Component={Services} />} />
    <Route path='/product' element = {<Protected Component={Product}/> } />
    <Route path='/about' element = {<Protected Component = {About}/>} />
    <Route path='/contact' element= {<Protected Component={Contact}/>} />
    <Route path='/cardsdetail' element={<CardsDetail/>} />
    <Route path='/cardsdetail/:id' element={<CardsDetail/>} />
    <Route path="/footer"  element={<Footer/>}/>
    <Route path="/electronic-services/:id" element = {<ElectronicServices/>} />
    <Route path='/portfolio' element = {<Portfolio/>}/>
    <Route path='/login' element={<Login/>}/>
 
   </Routes>
   
   </BrowserRouter>


   
   </>
  )
}

export default  App
