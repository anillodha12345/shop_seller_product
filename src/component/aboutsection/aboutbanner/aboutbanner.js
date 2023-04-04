import React from "react";
import image1 from "../../../assets/images/about1.jpg";
import "../abouts.css";
import Headers from "../../layout/header";

const AboutBanner = () => {
  return (
    <>
      <div className="wrapper_about " style={{ height: "600px" }}>
        <div className="about_banner_img">
          <img src={image1} alt="no-image" width="100%" className="images" />
        </div>
        <div className="text-center ">
          <h1 className="about_heading text-center">
            <span className="about_heading1 text-white ">About Us</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default AboutBanner;
