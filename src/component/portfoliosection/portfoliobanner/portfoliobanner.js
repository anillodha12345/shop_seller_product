import Carousel from "react-bootstrap/Carousel";
import image1 from "../../../assets/images/imagebanner1.jpg";
import image2 from "../../../assets/images/imagebanner2.jpg";
import image3 from "../../../assets/images/imagebanner3.jpg";
import image4 from "../../../assets/images/imagebanner4.jpg";
import image5 from "../../../assets/images/imagebanner5.jpg";
import "./portfoliobanner.css";

import "animate.css";
import Headers from "../../layout/header";

function PortfolioBanner() {
  return (
    <>
      <div className="portfolio_banner_wrapper">
      <div className="container-fluid w-100">
        <div className="row portfolio_header">
          <Headers />
        </div>
      </div>
        <Carousel className="portfolio_container">
          <Carousel.Item>
            <div className="portfolio_banner_img">
            <img
              className="d-block w-100"
              src={image1}
              width={900}
              
              alt="First slide"
            />
            </div>

            <Carousel.Caption>
              <div className="container mb-5">
                <div className="row pb-5 portfolio_heading     ">
                  <div className="text-center">
                    <div className="">
                      <h2 className=" mb-3 mt-3   animate__animated  animate__fadeInUpBig ">
                        <span
                          className=" "
                          style={{
                            fontSize: "95px",
                            letterspacing: "-2px",
                            marginBottom: "6px",
                            lineHeight: "85px",
                          }}
                        >
                          The Shop Theme
                        </span>
                      </h2>
                    </div>
                    <div>
                      <p className=" text-white animate__animated  animate__bounceInUp ">
                        <span
                          style={{
                            fontSize: "20px",
                            letterspacing: "0px",
                            lineHeight: "29px",
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam
                          <br /> nonummy nibh euismod tincidunt ut laoreet
                          dolore .
                        </span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="text-center">
                      <button class="px-5 py-3 bg-info border-info fs-6 text-white font-weight-bold h1  animate__animated  animate__bounceInUp ">
                        FIND OUT MORE
                      </button>
                      <button
                        className="px-5 py-3 border border-light fs-6 bg-transparent text-white font-weight-bold h1 animate__animated  animate__bounceInUp  "
                        style={{ marginLeft: "10px" }}
                      >
                        FIND OUT MORE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <div className="portfolio_banner_img">
            <img
              className="d-block w-100"
              src={image2}
              alt="Second slide"
              width={900}
              height={900}
            />
            </div>

            <Carousel.Caption>
              <div className="container mb-5">
                <div className="row pb-5 portfolio_heading     ">
                  <div className="text-center">
                    <div className="">
                      <h2 className=" mb-3 mt-3   animate__animated  animate__fadeInUpBig ">
                        <span
                          className=" "
                          style={{
                            fontSize: "95px",
                            letterspacing: "-2px",
                            marginBottom: "6px",
                            lineHeight: "85px",
                          }}
                        >
                          The Shop Theme
                        </span>
                      </h2>
                    </div>
                    <div>
                      <p className=" text-white animate__animated  animate__bounceInUp ">
                        <span
                          style={{
                            fontSize: "20px",
                            letterspacing: "0px",
                            lineHeight: "29px",
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam
                          <br /> nonummy nibh euismod tincidunt ut laoreet
                          dolore .
                        </span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="text-center">
                      <button class="px-5 py-3 bg-info border-info fs-6 text-white font-weight-bold h1  animate__animated  animate__bounceInUp ">
                        FIND OUT MORE
                      </button>
                      <button
                        className="px-5 py-3 border border-light fs-6 bg-transparent text-white font-weight-bold h1 animate__animated  animate__bounceInUp  "
                        style={{ marginLeft: "10px" }}
                      >
                        FIND OUT MORE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div className="portfolio_banner_img">
            <img
              className="d-block w-100"
              src={image3}
              width={900}
              height={900}
              alt="Third slide"
            />
            </div>

            <Carousel.Caption>
              <div className="container mb-5">
                <div className="row pb-5 portfolio_heading     ">
                  <div className="text-center">
                    <div className="">
                      <h2 className=" mb-3 mt-3   animate__animated  animate__fadeInUpBig ">
                        <span
                          className=" "
                          style={{
                            fontSize: "95px",
                            letterspacing: "-2px",
                            marginBottom: "6px",
                            lineHeight: "85px",
                          }}
                        >
                          The Shop Theme
                        </span>
                      </h2>
                    </div>
                    <div>
                      <p className=" text-white animate__animated  animate__bounceInUp ">
                        <span
                          style={{
                            fontSize: "20px",
                            letterspacing: "0px",
                            lineHeight: "29px",
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam
                          <br /> nonummy nibh euismod tincidunt ut laoreet
                          dolore .
                        </span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="text-center">
                      <button class="px-5 py-3 bg-info border-info fs-6 text-white font-weight-bold h1  animate__animated  animate__bounceInUp ">
                        FIND OUT MORE
                      </button>
                      <button
                        className="px-5 py-3 border border-light fs-6 bg-transparent text-white font-weight-bold h1 animate__animated  animate__bounceInUp  "
                        style={{ marginLeft: "10px" }}
                      >
                        FIND OUT MORE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <div className="portfolio_banner_img">
            <img
              className="d-block w-100"
              src={image4}
              width={900}
              height={900}
              alt="Third slide"
            />
            </div>

            <Carousel.Caption>
              <div className="container mb-5">
                <div className="row pb-5 portfolio_heading     ">
                  <div className="text-center">
                    <div className="">
                      <h2 className=" mb-3 mt-3   animate__animated  animate__fadeInUpBig ">
                        <span
                          className=" "
                          style={{
                            fontSize: "95px",
                            letterspacing: "-2px",
                            marginBottom: "6px",
                            lineHeight: "85px",
                          }}
                        >
                          The Shop Theme
                        </span>
                      </h2>
                    </div>
                    <div>
                      <p className=" text-white animate__animated  animate__bounceInUp ">
                        <span
                          style={{
                            fontSize: "20px",
                            letterspacing: "0px",
                            lineHeight: "29px",
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam
                          <br /> nonummy nibh euismod tincidunt ut laoreet
                          dolore .
                        </span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="text-center">
                      <button class="px-5 py-3 bg-info border-info fs-6 text-white font-weight-bold h1  animate__animated  animate__bounceInUp ">
                        FIND OUT MORE
                      </button>
                      <button
                        className="px-5 py-3 border border-light fs-6 bg-transparent text-white font-weight-bold h1 animate__animated  animate__bounceInUp  "
                        style={{ marginLeft: "10px" }}
                      >
                        FIND OUT MORE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div className="portfolio_banner_img">
            <img
              className="d-block w-100"
              src={image5}
              width={900}
              height={900}
              alt="Third slide"
            />
            </div>

            <Carousel.Caption>
              <div className="container mb-5">
                <div className="row pb-5 portfolio_heading     ">
                  <div className="text-center">
                    <div className="">
                      <h2 className=" mb-3 mt-3   animate__animated  animate__fadeInUpBig ">
                        <span
                          className=" "
                          style={{
                            fontSize: "95px",
                            letterspacing: "-2px",
                            marginBottom: "6px",
                            lineHeight: "85px",
                          }}
                        >
                          The Shop Theme
                        </span>
                      </h2>
                    </div>
                    <div>
                      <p className=" text-white animate__animated  animate__bounceInUp ">
                        <span
                          style={{
                            fontSize: "20px",
                            letterspacing: "0px",
                            lineHeight: "29px",
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam
                          <br /> nonummy nibh euismod tincidunt ut laoreet
                          dolore .
                        </span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="text-center">
                      <button class="px-5 py-3 bg-info border-info fs-6 text-white font-weight-bold h1  animate__animated  animate__bounceInUp ">
                        FIND OUT MORE
                      </button>
                      <button
                        className="px-5 py-3 border border-light fs-6 bg-transparent text-white font-weight-bold h1 animate__animated  animate__bounceInUp  "
                        style={{ marginLeft: "10px" }}
                      >
                        FIND OUT MORE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default PortfolioBanner;
