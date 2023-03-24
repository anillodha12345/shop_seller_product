import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFileBarGraph } from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";

const ServicesCard = () => {
  return (
    <>
      <div className="wrapper_deliver pt-5">
        <div className="container ">
          <div className="py-5">
            <h3 className="text-center">WooCommerce Compatible </h3>{" "}
          </div>

          <div className="row">
            <div className="col-lg-3 ">
              <div className="pb-3 text-center">
                <FaRegHeart size={100} color="silver" />
              </div>
              <div className="pb-3 text-center">
                <h5 className="text-black">Designed With Care</h5>
              </div>
              <div className="px-5">
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="pb-3 text-center ">
                <AiOutlineShoppingCart size={100} color="silver" />
              </div>
              <div className="pb-3 text-center">
                <h5 className="text-black">WooCommerce Integrated</h5>
              </div>
              <div className="px-5">
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="pb-3 text-center">
                <BsFileBarGraph size={100} color="silver" />
              </div>
              <div className="pb-3 text-center">
                <h5 className="text-black">SEO Optimized</h5>
              </div>
              <div className="px-5">
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="pb-3 text-center">
                <HiOutlineDesktopComputer size={100} color="silver" />
              </div>
              <div className="pb-3 text-center">
                <h5 className="text-black">Fully Responsive</h5>
              </div>
              <div className="px-5">
                <p className="text-center fs-6">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
