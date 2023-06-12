import React from "react";
import "./banner_background.css";

const BannerBackground = () => {
  return (
    <>
    <div className="mrt70 ">

 
      <div className="background_wrapper">
        <div className="container pb-2 pt-5">
          <div className="row pt-5  ">
            <div className="background_banner_heading">
              <h2
                className=" mt-3  text-center "
                style={{
                  fontSize: "60px",
                  letterspacing: "-2px",
                  marginBottom: "6px",
                  lineHeight: "83px",
                  fontFamily: "system-ui",
                  fontWeight: "600px",
                  lineheight: "60px",
                }}
              >
                Shop Limited Edition.
              </h2>
            </div>
          </div>
          <div className="row mt-3">
            <div className="background_banner_paragraph">
              <p
                className="text-center   "
                style={{
                  fontSize: "20px",
                  letterspacing: "0px",
                  lineHeight: "29px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy <br />
                nibh euismod tincidunt ut laoreet dolore.
              </p>
            </div>
          </div>


          <div className="row mt-3 mb-5 pb-5">
          <div className="banner-button d-flex justify-content-center">
                        <button class="   banner-button1 color rounded">
                         READ MORE
                        </button>
                      
          </div>
          </div>

        </div>
      </div>
      </div>
    </>
  );
};

export default BannerBackground;
