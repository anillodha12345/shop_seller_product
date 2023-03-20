import React from "react";
import "./topbar.css";
import { TfiEmail } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineCamera } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const TopBar = () => {
  return (
    <>
    <div className="banner_wrapper bg-black">
      <div className="container-fluid bg-black">
        <div className="row " style={{height:"45px"}}>
          <div className="col-lg-6">
            <div className="container-fluid">
              <div className="row   ">
                <div className="col-lg-4 pt-2 fs-6">
                  <p className="top_bar_font top-bar-widget text-center">
                    Welcome to suprema
                  </p>
                </div>
                <div className="col-lg-4  pt-2 fs-6">
                  <p className="top_bar_font top-bar-widget text-center">
                    <ul className="d-flex list-unstyled justify-content-center  ">
                      <li className="mx-4">
                        <a
                          href="/"
                          className=" text-decoration-none top_bar_font "
                        >
                          Help
                        </a>
                      </li>
                      <li className=" mx-4">
                        <a
                          href="/"
                          className=" text-decoration-none top_bar_font "
                        >
                          |
                        </a>
                      </li>
                      <li className="mx-4">
                        <a
                          href="/"
                          className=" text-decoration-none top_bar_font "
                        >
                          FAQ
                          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| 
                            </span>
                        </a>

                      </li>
                    </ul>
                  </p>
                </div>

                <div className="col-lg-4  pt-2 fs-6">
                  <p className="top_bar_font top-bar-widget ">
                    <span>
                      <TfiEmail size={13} className="mx-2" />{" "}
                    </span>
                    Newsletter
                  </p>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="col-lg-6 d-flex">
            <div className="col-lg-9">
              <ul className="d-flex justify-content-end  list-unstyled ">
                <li className=" d-flex align-items-end  ">
                  <a
                    href="/"
                    className=" top-bar-widget text-decoration-none mx-5 pt-2 "
                  >
                    My Account <span>&nbsp;&nbsp;&nbsp;&nbsp; | </span>
                  </a>
                </li>
                <li className=" d-flex align-items-end ">
                  <a
                    href="/"
                    className="top-bar-widget  text-decoration-none pt-2 "
                  >
                    Wishlist &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                    <span> | &nbsp;&nbsp;&nbsp; &nbsp;</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3">
              <ul className="d-flex justify-content-start list-unstyled">
                <li >
                  <a href="/" className="text-white mx-2   ">
                    <FaFacebookF size="12" className="social-icon" />
                  </a>
                </li>
                <li >
                  <a href="/" className="text-white mx-2  ">
                    <AiOutlineTwitter size="12" className="social-icon" />
                  </a>
                </li>
                <li >
                  <a href="/" className="text-white mx-2 ">
                    <AiOutlineCamera size="12" className="social-icon" />
                  </a>
                </li>
                <li >
                  <a href="/" className="text-white mx-2 ">
                    <AiOutlineInstagram size="12" className="social-icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      

      </div>
    </>
  );
};

export default TopBar;
