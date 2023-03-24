import React, { useState } from "react";
import Slider from "react-slick";
// import Button from '@mui/material/Button';
import Cardsdata from "./cardsdata";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { ADD } from "../../redux/action";
import { Link, NavLink } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import { FcLike } from "react-icons/fc";
import Newstore from "../newstore";


const Sliders = () => {
  const [data, setData] = useState(Cardsdata);

  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(ADD(e));
  };
  var settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="slider_wrapper">
        <div className="container mt-5 ">
          <div className="row">
          <div><h6 className="text-center">New Products</h6></div>
            <div><h3 className="text-center">Shop The New Collection</h3></div>
            <Slider {...settings}>
              {data?.map((items, index) => {
                return (
                  <>
                    <div className="pt-5 mb-5">
                      <div
                        className="card mx-2 border- "
                        style={{ height: "450px" }}
                      >
                        <img
                          src={items.imgdata}
                          width="415px"
                          height="250px"
                          className=" border  "
                          alt="..."
                        />
                        <div className="card-body ">
                          <div className="row">
                          <div className="col-md-6"> <p className="card-title text-secondary  ">{items.rname} </p></div>
                          <div className="col-md-6 text-end"> <p className="card-title text-secondary  "><FcLike/> </p></div>
                          </div>
                          
                          <p className="card-text  text-black">
                            {items.address}
                          </p>
                          <p className="card-text  text-secondary ">
                            Price : ₹{items.price}
                          </p>
                          <p>
                            <Button

                              className="bg-black border-0 text-white col-lg-12 py-2" 
                              onClick={() => send(items)}
                            >
                              ADD TO CARD
                            </Button>
                          </p>
                        </div>
                      </div>
                    
                    </div>
                  
                  </>
                );
              })}
            </Slider>
          </div>
          <div className="text-center mb-5">
          <Button variant="contained" className="bg-black text-white ">VIEW ALL</Button>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Sliders;
