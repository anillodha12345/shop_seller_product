import React from "react";
import "../abouts.css";
import Slider from "react-slick";
import image1 from "../../../assets/images/ourclient1.png";
import image2 from "../../../assets/images/ourclient2.png";
import image3 from "../../../assets/images/ourclient3.png";
import image4 from "../../../assets/images/ourclient4..png";
import image6 from "../../../assets/images/ourclient6.png";

const OurBestClient = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  return (
    <>
      <div className="wrapper_our_best_client">
        <div className="container">
          <div className="row">
            <div>
              <h3 className="text-white  text-center our_client_text">Our Best Clients</h3>
            </div>
            <div className="row  w-75 mx-auto ourclient_image">
              <Slider {...settings} arrows={false} dots={false}>
                <img src={image1} alt="no-image" width="50px" />

                <img src={image2} alt="no-image" width="50px" />

                <img src={image3} alt="no-image" width="50px" />

                <img src={image4} alt="no-image" width="50px" />

                <img src={image6} alt="no-image" width="50px" />

                <img src={image1} alt="no-image" width="50px" />

                <img src={image2} alt="no-image" width="50px" />

                <img src={image3} alt="no-image" width="50px" />

                <img src={image4} alt="no-image" width="50px" />

                <img src={image6} alt="no-image" width="50px" />
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurBestClient;
