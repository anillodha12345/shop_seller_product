import React from "react";
import image1 from "../../../assets/images/Portfolio-Gallery-1.jpg";
import image2 from "../../../assets/images/Portfolio-Gallery-2.jpg";
import image3 from "../../../assets/images/Portfolio-Gallery-3.jpg";
import image4 from "../../../assets/images/Portfolio-Gallery-4.jpg";
import image5 from "../../../assets/images/Portfolio-Gallery-5.jpg";
import image6 from "../../../assets/images/Portfolio-Gallery-6.jpg";
import image7 from "../../../assets/images/imagebanner2.jpg";
import image8 from "../../../assets/images/main-home-slide-5.jpg";

const StunningPortfolio = () => {
  return (
    <>
      <div className="wrapper_stunningp_portfolio mt-5">
        <div className="container">
          <div className="row">
            <div className="pb-4">
              <h3 className="text-center text-black">
                Show Off Your Stunning Portfolio
              </h3>
            </div>
          </div>
          <div className="row pb-3">
            <div className="pb-3">
              <p className="text-center text-secondary px-5">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <img src={image1} alt="no-image" width="100%" />
            </div>
            <div className="col-lg-3">
              <img src={image2} alt="no-image" width="100%" />
            </div>
            <div className="col-lg-3">
              <img src={image3} alt="no-image" width="100%" />
            </div>
            <div className="col-lg-3">
              <img src={image4} alt="no-image" width="100%" />
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-lg-3">
              <img src={image5} alt="no-image" width="100%" />
            </div>
            <div className="col-lg-3">
              <img src={image6} alt="no-image" width="100%" />
            </div>
            <div className="col-lg-3">
              <img src={image7} alt="no-image" width="100%" />
            </div>
            <div className="col-lg-3">
              <img src={image8} alt="no-image" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StunningPortfolio;
