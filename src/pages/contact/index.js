import React from "react";
import AboutBanner from "../../component/aboutsection/aboutbanner/aboutbanner";
import { Container, Row, Col } from "react-bootstrap";
import "../../assets/css/styles.css";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneVolume, FaFax } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import image1 from "../../assets/images/about1.jpg"





const Contact = () => {
  return (
    <>
      <AboutBanner image={image1} name="Contact Us" page="Contact " />
      <div className="mrt70">
        <div>
          <Container>
            <Row>
              <Col>
                <h2>Contact Info</h2>
                <div className="contact-paragraph pdtop20 ">
                  <p>
                    We enjoy discussing new projects and design challenges.
                    Please share as much info, as possible so we can get the
                    most out of our first catch-up.
                  </p>
                </div>
                <div className="contact_address pdtop20  ">
                  <p>
                    <span>
                      <AiOutlineMail />
                    </span>
                    Example@test.com
                  </p>

                  <p>
                    <span>
                      <FaPhoneVolume />
                    </span>
                    +91 (0) 101 0000 000
                  </p>

                  <p>
                    {" "}
                    <span>
                      <FaFax />
                    </span>
                    +91 (0) 202 0000 001
                  </p>
                  <br/>
                  <div>
                    <h4 className="text-black">Follow Us</h4>
                  </div>
                  <div className="contact-social-icon">
             
                    <span><AiOutlineTwitter  size="22"/></span>
                    <span><BsFacebook   size="22"/></span>
                    <span><GrLinkedinOption   size="22"/></span>
                    <span><AiOutlineInstagram   size="22"/></span>
                  </div>
                </div>
              </Col>
              <Col>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Your Name*" className="py-2" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Your Email*"  className="py-2"/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Subject*"  className="py-2" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Website URL*"  className="py-2" />
                  </Form.Group>

                  <InputGroup>
                    <Form.Control as="textarea" aria-label="With textarea"  className="py-3" />
                  </InputGroup>
                  <br/>

                  
                  <div className="banner-button">
                    <button class="   banner-button1 color rounded">Submit</button>
                  </div>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col><div className="map mrt70 ">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14718.03136813648!2d75.88608449999998!3d22.74652725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd584d617663%3A0x7ddfc9619bc0d038!2sIndore%2C%20Madhya%20Pradesh%20452011!5e0!3m2!1sen!2sin!4v1680612403324!5m2!1sen!2sin"
                    width="100%"
                    height="490"
                    style={{ border: "1px solid silver" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="My Location"
                  ></iframe>
                </div></Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Contact;
