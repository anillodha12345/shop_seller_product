
import React, { useState } from "react";
import Banner from "../banner";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Headers from "../layout/header";
import Products from "../products";
import { Productslider } from "../products/productData";
import "./newstore.css";
import 'animate.css';

const Newstore = () => {
  const [data, setData] = useState(Productslider);
  let [transition, setTransition ] = useState('width-carousel')

  const handleTransition= ()=>{
      setTransition('width-carousel fade-in-image')
  
      setTimeout(()=>{
          setTransition('width-carousel')
      }, 2000)
  }



  return (
    <>
      <div className="container-fluid w-100">
        <div className="row product_header">
          <Headers />
        </div>
      </div>

      <div className="product_wrapper">
        <div className="container-fluid w-100">
          <Carousel
            autoPlay
            interval="1500"
            infiniteLoop
            showIndicators={false}
            onChange={handleTransition}
          >
            {data.map((items,index) => {
              return (
                <>
                  <div className="product_banner transition"   >
                    <img
                      className="d-block w-100"
                      src={items.image}
                      width={900}
                      height={500}
                      alt="Third slide"
                    />
                  </div>

                  <div className="row product_heading">
                    <div className="text-center">
                      <h2 className=" mb-3 mt-3  ">
                        <span
                          className="text-white  my-element  "
                          style={{
                            fontSize: "74px",
                            letterspacing: "-2px",
                            marginBottom: "6px",
                            lineHeight: "83px",
                          }}
                        >
                          {items.title}
                        </span>
                      </h2>

                      <div>
                        <p className="">
                          <span
                            style={{
                              fontSize: "20px",
                              letterspacing: "0px",
                              lineHeight: "29px",
                            }}
                            className="text-center text-white"
                          >
                            {items.paragraph}
                          </span>
                        </p>
                        <p >
                          <span
                            style={{
                              fontSize: "20px",
                              letterspacing: "0px",
                              lineHeight: "29px",
                            }}
                            className="text-center text-white"
                          >
                            {items.paragraph1}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="text-start">
                      <div className="mx-0 px-0 text-center">
                        <button class="px-5 py-3 bg-info border-info fs-6 text-white font-weight-bold h1 ">
                          FIND OUT MORE
                        </button>
                        <button
                          className="px-5 py-3 border border-light fs-6 bg-transparent text-white font-weight-bold h1   "
                          style={{ marginLeft: "10px" }}
                        >
                          FIND OUT MORE
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </Carousel>
        </div>
      </div>

      <Products />
    </>
  );
};

export default Newstore;
