import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import { ScrollToTop } from "react-router-scroll-to-top";
import Product from "./pages/product";
import Contact from "./pages/contact";

import About from "./pages/about";
// import Headers from './component/layout/header'
import CardsDetail from "./component/cardsdetail";
import Footer from "./component/layout/footer";
import TopBar from "./component/layout/topbar";

import Headers from "./component/layout/header";
import Blog from "./pages/blog/blog";
import BlogDetails from "./component/blogdetails/blogdetail";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Headers />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cardsdetail" element={<CardsDetail />} />
          <Route path="/cardsdetail/:id" element={<CardsDetail />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogdetails/:id" element={<BlogDetails />} />

          {/* <Route path="/allproducts" element={<AllProducts />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
