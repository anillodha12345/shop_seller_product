import React, { useState } from "react";
import Bestsellers from "./bestsellers";
import "./bestseller.css";
import { AiFillHeart } from "react-icons/ai";

const BestSellers = () => {
  const [data, setData] = useState(Bestsellers);
  console.log(data, "akahh");

  return (
    <>
      <div className="slider_wrapper">
        <div className="container mt-5 ">
          <div className="row">
            <div>
              <h6 className="text-center">Best Sellers</h6>
            </div>
            <div className="pb-5">
              <h3 className="text-center">Browse Through Our Best Selleres</h3>
            </div>

            {data?.map((items, index) => {
              return (
                <>
                  <div className="  col-md-3 mb-5">
                    <div
                      className="card mx-2 border-top-0 "
                      style={{ height: "400px" }}
                    >
                      <img
                        src={items.imgdata}
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

                        <p className="card-text  text-black">{items.rname}</p>

                        <p className="card-text  text-secondary ">
                          Price : ${items.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSellers;
