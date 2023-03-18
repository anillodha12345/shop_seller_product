import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/home'
import Services from './pages/services'
import Product from './pages/product'
import Contact from './pages/contact'

import About from './pages/about'
import Headers from './component/layout/header'
import CardsDetail from './component/cardsdetail'
import Footer from './component/layout/footer'
import TopBar from './component/layout/topbar'

const   App = () => {

  return (
   <>
   <BrowserRouter>
   <TopBar/>
  <Headers/>
   <Routes>
    <Route path='/' element = {<Home/>} />
    <Route path='/services' element = {<Services/>} />
    <Route path='/product' element = {<Product/> } />
    <Route path='/about' element = {<About/>} />
    <Route path='/contact' element= {<Contact/>} />
    <Route path='/cardsdetail' element={<CardsDetail/>} />
    <Route path='/cardsdetail/:id' element={<CardsDetail/>} />
    <Route path="/footer"  element={<Footer/>}/>
 
   </Routes>
   
   </BrowserRouter>


   
   </>
  )
}

export default  App
