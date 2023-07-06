import React from "react";
import { Container, Row, Col, Nav, Form } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { ImFacebook2, ImVimeo2, ImInstagram, ImLinkedin } from "react-icons/im";
import { AiFillCopyrightCircle } from "react-icons/ai";
import shoe from "../../../assets/images/footerimage1.jpg";
import insta from "../../../assets/images/footerimage2.jpg";
import shadow from "../../../assets/images/footerimage5.jpg";
import { TfiAngleRight } from "react-icons/tfi";
import visa from "../../../assets/images/visa.png";
import master from "../../../assets/images/master.png";
import paypal from "../../../assets/images/paypal.png";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneVolume, FaFax } from "react-icons/fa";
import "../../../assets/css/styles.css";

function Footer() {
  return (
    <>
      <section className="footer_bg footer-wrapper color  mrt70">
        <div>
          <Container fluid>
            <Row className="pdtop50 ">
              <Col xm={12} md={6} lg={3}>
                <div className=" footer-heading_logo  ">
                  <h1>Logo</h1>

                  <div>
                    <div className="footer_address ">
                      <p className="color">
                      
                        GuruNanak Colony ,Guna, <br />
                        Madhya Pradesh 473001.
                      </p>
                      <p className="color">
                        <span>
                          <AiOutlineMail />
                        </span>
                        Example@test.com
                      </p>

                      <p className="color">
                        <span>
                          <FaPhoneVolume />
                        </span>
                        +91 (0) 101 0000 000
                      </p>

                      <p className="color">
                        {" "}
                        <span>
                          <FaFax />
                        </span>
                        +91 (0) 202 0000 001
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xm={12} md={6} lg={3}>
                <div className="footer-heading ">
                  <h5 className="color">Latest Post</h5>
                  <div className="pdtop20">
                    <div className="media d-flex ">
                      <div className="media-left">
                        <Link to="#/">
                          <img
                            src={shoe}
                            alt=""
                            className="media-object pt-1"
                            style={{ width: "60px" }}
                          />{" "}
                        </Link>
                      </div>
                      <div className="media-body  ps-3">
                        <h6 className="media-heading d-flex justify-content-start color">
                          John Doe{" "}
                        </h6>
                        <p className="footer_date">
                          <Link to="#/">
                            <i>Posted onFebruary 12, 2016 </i>
                          </Link>
                          <p>Lorem ipsum dolorsit amet...</p>
                        </p>
                      </div>
                    </div>

                    <div className="media d-flex">
                      <div className="media-left">
                        <Link to="#/">
                          <img
                            src={insta}
                            alt=""
                            className="media-object"
                            style={{ width: "60px" }}
                          />{" "}
                        </Link>
                      </div>
                      <div className="media-body ps-3">
                        <h6 className="media-heading d-flex justify-content-start  ">
                          John Doe{" "}
                        </h6>
                        <p className="footer_date">
                          <Link to="#/">
                            <i>Posted onFebruary 12, 2016 </i>
                          </Link>
                          <p>Lorem ipsum dolorsit amet...</p>
                        </p>
                      </div>
                    </div>

                    <div className="media d-flex">
                      <div className="media-left">
                        <Link to="#/">
                          <img
                            src={shadow}
                            alt=""
                            className="media-object"
                            style={{ width: "60px" }}
                          />{" "}
                        </Link>
                      </div>
                      <div className="media-body ps-3">
                        <h6 className="media-heading d-flex justify-content-start color">
                          John Doe{" "}
                        </h6>
                        <p className="footer_date">
                          <Link to="#/">
                            <i>Posted onFebruary 12, 2016 </i>
                          </Link>
                          <p>Lorem ipsum dolorsit amet...</p>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xm={12} md={6} lg={3}>
                <div className="page_links footer-heading ">
                  <h5 className="color">Location</h5>

                  <div className="pdtop20">
                    <div className="map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14718.03136813648!2d75.88608449999998!3d22.74652725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd584d617663%3A0x7ddfc9619bc0d038!2sIndore%2C%20Madhya%20Pradesh%20452011!5e0!3m2!1sen!2sin!4v1680612403324!5m2!1sen!2sin"
                        width="100%"
                        height="230"
                        style={{ border: "1px solid silver" }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        title="My Location"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xm={12} md={6} lg={3}>
                <div className="footer-heading color">
                  <h5 className="color" >Newsletter</h5>
                  <div className="pdtop20">
                    <Form>
                      <div className="ftr_email_div">
                        <div className="ftr_subscribe  ">
                          <label htmlFor="subscribe ">
                            Get E-mail updates about our latest shop and special
                            offers.:
                          </label>
                        </div>
                        <div className="ftr_email_div  pdtop20">
                          <input
                            type="email "
                            className="ftr_email"
                            placeholder="E-mail"
                          />
                          <span className="ftr_email_arrow_btn">
                            <TfiAngleRight color="white" />
                          </span>
                        </div>
                      </div>
                    </Form>

                    <h5 className="footer_heading pdbottom20  pdtop20 color">
                      Follow Us
                    </h5>
                    <div className="social-icons footer_social_icons d-flex justify-content-start  ">
                      <span>
                        <ImFacebook2 size={22} />
                      </span>
                      <span>
                        <ImLinkedin size={22} />
                      </span>
                      <span>
                        <ImVimeo2 size={22} />
                      </span>
                      <span>
                        <ImInstagram size={22} />
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <div className=" pdtop50 pdbottom50 d-flex justify-content-center ">
                  <Nav>
                    <NavLink className="footer_page_link color" to="/">
                      Home
                    </NavLink>
                    <NavLink className="footer_page_link  color" to="/about">
                      About Us
                    </NavLink>
                    <NavLink className="footer_page_link color" to="/product">
                      Product
                    </NavLink>
                    <NavLink className="footer_page_link color" to="/services">
                      Services
                    </NavLink>
                    <NavLink className="footer_page_link color" to="/blog">
                      Blog
                    </NavLink>
                    <NavLink className="footer_page_link color" to="/contact">
                      Contact Us
                    </NavLink>
                    <NavLink className="footer_page_link color" to="/policy">
                      Privacy Policy
                    </NavLink>
                    <NavLink className="footer_page_link color" to="/condition">
                      Terms & Condition
                    </NavLink>
                  </Nav>
                </div>
              </Col>
            </Row>
            <hr className="footer_line" />
          </Container>
        </div>
        <div className="footer_bottom">
          <Container fluid>
            <Row>
              <Col sm={6}>
                <div className="footer_bottom_left">
                  <p className="color">
                    <span>
                      <AiFillCopyrightCircle />
                    </span>
                    {new Date().getFullYear()} Suprema India,Inc.All rights
                    reserved.
                  </p>
                </div>
              </Col>
              <Col sm={6}>
                <div className="footer_bottom_right d-flex justify-content-end">
                  <div className="ftr_debit_cards pe-3">
                    <NavLink to="#">
                      {" "}
                      <img src={visa} alt="debit-cards" width={50} />
                    </NavLink>
                  </div>
                  <div className="ftr_debit_cards pt-2 pe-3">
                    <NavLink to="#">
                      <img src={master} alt="debit-cards" width={50} />
                    </NavLink>
                  </div>
                  <div className="ftr_debit_cards">
                    <NavLink to="#">
                      <img src={paypal} alt="debit-cards" width={50} />
                    </NavLink>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
}

export default Footer;
