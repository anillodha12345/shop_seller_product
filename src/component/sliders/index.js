import React, { useState } from "react";
import Slider from "react-slick";

import { Cardsdata } from "./cardsdata";

import Card from "react-bootstrap/Card";

import { useDispatch } from "react-redux";
import { ADD } from "../../redux/action";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Col, Container, Row } from "react-bootstrap";

import "../../assets/css/styles.css";

const Sliders = () => {
  const [data, setData] = useState(Cardsdata);

  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(ADD(e));
    toast.success("successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // style: { background: '#00CC00' },
      color: "white",
    });
  };
  var settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="mrt70">
        <Container>
          <Row>
            <Col>
              <h6 className="text-center colorblack">Best Sellers</h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 className="text-center colorblack">
                Browse Through Our Best Selleres
              </h2>
            </Col>
          </Row>

          <Row className="pdtop50 pdbottom50 ">
            <Slider {...settings} autoplay={true} autoplaySpeed={2000}>
              {data?.map((items, index) => {
                return (
                  <>
                    <div className="mrb50  col-md-3 cards-items1 ">
                      <Card className="cards-items" style={{ width: "19rem" }}>
                        <Card.Img
                          variant="top"
                          src={items.imgdata}
                          width="100%"
                          height={280}
                        />

                        <Card.Body>
                          <p className="card-text">
                            <Card.Text>{items.address}</Card.Text>
                          </p>
                          <h6>
                            <Card.Title>
                              {" "}
                              <Link
                                to={`/cardsdetail/${items.id}`}
                                onClick={() => send(items)}
                                className="text-decoration-none text-black"
                              >
                                {items.rname}
                              </Link>{" "}
                            </Card.Title>
                          </h6>
                          <p>
                            <Card.Text>Price : ${items.price}</Card.Text>
                          </p>

                          <div className="card-bodies">
                            <button
                              className="addtocard border-0 text-white col-lg-12 py-2"
                              onClick={() => send(items)}
                            >
                              <span>ADD TO CARD</span>
                            </button>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  </>
                );
              })}
            </Slider>
            <div className="banner-button text-center">
              <Link to="/product">
                <button class="  banner-button1 color rounded">VIEW ALL</button>
              </Link>
            </div>
          </Row>
        </Container>
        <ToastContainer />
      </div>
    </>
  );
};

export default Sliders;
