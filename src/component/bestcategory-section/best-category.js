import React from "react";
import { Carousel, Row, Col, Container } from "react-bootstrap";

import category1 from "../../assets/images/category1.avif";
import category2 from "../../assets/images/category2.avif";
import category3 from "../../assets/images/category3.avif";
import "../../assets/css/styles.css";

function BestCategory() {
  return (
    <>
      <section>
        <div className="div-bg mrt70  ">
          <Container>
            <Row>
              <Col>
                <div className="main_heading mrt30">
                  <h6 className="text-center">Category</h6>

                  <h3 className="text-center">
                    Browse Through Our Best Category
                  </h3>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="carousel_div  pdtop20">
            <Carousel>
              <Carousel.Item interval={2000}>
                <Container>
                  <Row>
                    <Col sm={6} className="p-0">
                      <div className=" bg_img carousel_content_img">
                        <div className="carousel_content color">
                          <h1 className="color">Sports Wear</h1>
                          <p className=" text-start color">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Nesciunt iure dolore dicta voluptatibus itaque
                            quasi eius cum quisquam error necessitatibus.
                          </p>
                          <div className="banner-button ">
                            <button class="     banner-button1 color rounded ">
                              READ MORE
                            </button>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6} className="p-0">
                      <div className="carousel_img_div">
                        <img
                          className="carousel_img"
                          src={category1}
                          alt="First slide"
                        />
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Item>

              <Carousel.Item interval={2000}>
                <Container>
                  <Row>
                    <Col sm={6} className="p-0">
                      <div className="bg_img carousel_content_img">
                        <div className="carousel_content color">
                          <h1>Sneaker Shoe</h1>
                          <p className=" text-start color">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Nesciunt iure dolore dicta voluptatibus itaque
                            quasi eius cum quisquam error necessitatibus.
                          </p>
                          <div className="banner-button ">
                            <button class="  rounded   banner-button1 color ">
                              READ MORE
                            </button>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6} className="p-0">
                      <div className="carousel_img_div">
                        <img
                          className="carousel_img"
                          src={category2}
                          alt="First slide"
                        />
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Item>

              <Carousel.Item interval={3000}>
                <Container>
                  <Row>
                    <Col sm={6} className="p-0">
                      <div className=" bg_img carousel_content_img">
                        {/* <img
                        className="carousel_img"
                        src={kurti}
                        alt="First slide"
                      /> */}
                        <div className="carousel_content color ">
                          <h1>Accessories</h1>
                          <p className="text-start color">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Nesciunt iure dolore dicta voluptatibus itaque
                            quasi eius cum quisquam error necessitatibus.
                          </p>
                          <div className="banner-button">
                            <button class="  rounded   banner-button1  color">
                              READ MORE
                            </button>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6} className="p-0">
                      <div className="carousel_img_div">
                        <img
                          className="carousel_img"
                          src={category3}
                          alt="First slide"
                        />
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
}

export default BestCategory;
