import Carousel from "react-bootstrap/Carousel";
import image1 from "../../../src/assets/images/image1.png";
import image2 from "../../../src/assets/images/image2.png";
import image3 from "../../../src/assets/images/image3.png";
import image4 from "../../../src/assets/images/image4.png";
import "../../assets/css/styles.css"

import "animate.css";
import { Container } from "react-bootstrap";

function Banner() {
  return (
    <>
      <div>
        <div>
          
            <Carousel  indicators ={false}>
              <Carousel.Item>
                <img src={image1} height={500} alt="First slide" />
                <Carousel.Caption>
                  <div className="row banner-text ">
                    <div className="">
                      <div  className=" banner-heading d-flex justify-content-start " >
                        <h1 className=" animate__animated  animate__fadeInUpBig  ">
                         Best Sellers
                        </h1>
                      </div>
                      <div className="d-flex justify-content-start">
                        <p className="banner-paragraph animate__animated  animate__bounceInUp d-flex justify-content-start ">
                          <p className="color">
                            Stock up on sportswear and limited edition
                            collections on our <br /> awesome mid-season sale .
                          </p>
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="banner-button  d-flex justify-content-start ">
                        <button class="     animate__animated  animate__bounceInUp banner-button1 color ">
                          READ MORE
                        </button>
                        <button className=" bg-transparent  animate__animated  animate__bounceInUp banner-button2 color  ">
                        SHOP NOW
                        </button>
                      </div>
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={image2} alt="Second slide" height={500} />

                <Carousel.Caption>
                  <div className=" row  banner-text">
                    <div className="">
                      <div className=" banner-heading d-flex justify-content-start">
                        <h1 className="  animate__animated  animate__fadeInUpBig">
                          Mid Season Sale
                        </h1>
                      </div>
                      <div>
                        <p className=" banner-paragraph animate__animated  animate__bounceInUp d-flex justify-content-start">
                          <p className="color">
                            Stock up on sportswear and limited edition
                            collections on our <br /> awesome mid-season sale .
                          </p>
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="banner-button d-flex justify-centent-start">
                        <button class="  animate__animated  animate__bounceInUp banner-button1 color">
                         READ MORE
                        </button>
                        <button className=" bg-transparent t  animate__animated  animate__bounceInUp banner-button2 color">
                        SHOP NOW
                        </button>
                      </div>
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={image3} height={500} alt="Third slide" />

                <Carousel.Caption>
                  <div className=" row banner-text">
                    <div className="">
                      <div className=" banner-heading d-flex justify-content-start ">
                        <h1 className=" animate__animated  animate__fadeInUpBig ">
                         Seasonal Offers
                        </h1>
                      </div>
                      <div>
                        <p className=" banner-paragraph animate__animated  animate__bounceInUp d-flex justify-content-start">
                          <p className=" color">
                            Stock up on sportswear and limited edition
                            collections on our <br /> awesome mid-season sale .
                          </p>
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <div className="banner-button d-flex justify-content-start">
                        <button class="  animate__animated  animate__bounceInUp banner-button1 color rounded">
                         READ MORE
                        </button>
                        <button className=" bg-transparent   animate__animated  animate__bounceInUp  banner-button2 color rounded">
                        SHOP NOW
                        </button>
                      </div>
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={image4} height={500} alt="Third slide" />
            
                <Carousel.Caption>
                <div className="row banner-text">
                
                   
                      <div className=" banner-heading  d-flex justify-content-start">
                        <h1 className="  animate__animated  animate__fadeInUpBig">
                         Outwear Picks
                        </h1>
                      </div>
                      <div>
                        <p className=" banner-paragraph animate__animated  animate__bounceInUp d-flex justify-content-start">
                          <p className="color">
                            Stock up on sportswear and limited edition
                            collections on our <br /> awesome mid-season sale .
                          </p>
                        </p>
                      </div>
                    
                    <div className="">
                      <div className="banner-button d-flex justify-content-start">
                        <button class=" animate__animated  animate__bounceInUp banner-button1 color">
                         READ MORE
                        </button>
                        <button className="   animate__animated  animate__bounceInUp banner-button2 color ">
                        SHOP NOW
                        </button>
                      </div>
                    </div>
                 </div>
                </Carousel.Caption>
              
              </Carousel.Item>
            </Carousel>
        </div>
      </div>
    </>
  );
}

export default Banner;
