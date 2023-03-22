import React, { useState } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import "./bestseller.css";
import { AiFillHeart } from "react-icons/ai";
// import Product from "../../pages/product";
import {Earphone , Mencloth }from "./productData.js";
import { Womencloth } from "./productData.js";
import Footer from "../layout/footer/index.js";


const Product = () => {
  const [data, setData] = useState(Earphone);
  const [mendata,setMendata] = useState(Mencloth)
  const [women,setWomen] = useState(Womencloth)
  

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };


  return (


    <>
      <div className="slider_wrapper mt-5">
        <div className="container ">
          <div className="row">
            
            <div className="pb-3">
              <h3 className="text-center">Standard Type</h3>
            </div>

            <Slider {...settings}>

            {data?.map((items, index) => {
              return (
                <>
                  <div className="   mb-5 p-3">
                    <div
                      className="card  border-top-0 "
                      style={{ height: "400px" }}
                    >
                      <img
                        src={items.image}
                        height="250px"
                        className=" border  "
                        alt="..."
                      />
                      <div className="card-body ">
                        <div className="row">
                          <div className="col-md-9">
                          
                            <span
                              className="card-title text-secondary  "
                              style={{ fontSize: "10px" }}
                            >
                              {items.address}
                            </span>
                          </div>
                          <div className="col-md-3 text-end">
                          
                            <p className="card-title text-secondary  ">
                             <AiFillHeart /> 
                            </p>
                          </div>
                        </div>

                        <p className="card-text  text-black">{items.title}</p>

                        <p className="card-text  text-secondary ">
                          Price : ${items.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
         </Slider>
          </div>
        </div>
      </div>

      <div className="slider_wrapper  " style={{background:"#e2e2e2"}}>
        <div className="container mt-5  ">
          <div className="row">
            
            <div className="pb-3 pt-5">
              <h3 className="text-center">Boxed Type</h3>
            </div>

            <Slider {...settings}>

            {mendata?.map((items, index) => {
              return (
                <>
                  <div className="   mb-5 p-3">
                    <div
                      className="card  border-top-0 "
                      style={{ height: "400px" }}
                    >
                      <img
                        src={items.image}
                        height="250px"
                        className=" border  "
                        alt="..."
                      />
                      <div className="card-body ">
                        <div className="row">
                          <div className="col-md-9">
                          
                            <span
                              className="card-title text-secondary  "
                              style={{ fontSize: "10px" }}
                            >
                              {items.address}
                            </span>
                          </div>
                          <div className="col-md-3 text-end">
                          
                            <p className="card-title text-secondary  ">
                             <AiFillHeart /> 
                            </p>
                          </div>
                        </div>

                        <p className="card-text  text-black">{items.title}</p>

                        <p className="card-text  text-secondary ">
                          Price : ${items.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
         </Slider>
          </div>
        </div>
      </div>

      <div className="slider_wrapper">
        <div className="container mt-5 ">
          <div className="row">
            
            <div className="pb-3">
              <h3 className="text-center">Simple Type </h3>
            </div>

            <Slider {...settings}>

            {women?.map((items, index) => {
              return (
                <>
                  <div className="   mb-5 p-3">
                    <div
                      className="card  border-top-0 "
                      style={{ height: "400px" }}
                    >
                      <img
                        src={items.image}
                        height="250px"
                        className=" border  "
                        alt="..."
                      />
                      <div className="card-body ">
                        <div className="row">
                          <div className="col-md-9">
                          
                            <span
                              className="card-title text-secondary  "
                              style={{ fontSize: "10px" }}
                            >
                              {items.address}
                            </span>
                          </div>
                          <div className="col-md-3 text-end">
                          
                            <p className="card-title text-secondary  ">
                             <AiFillHeart /> 
                            </p>
                          </div>
                        </div>

                        <p className="card-text  text-black">{items.title}</p>

                        <p className="card-text  text-secondary ">
                          Price : ${items.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
         </Slider>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Product;