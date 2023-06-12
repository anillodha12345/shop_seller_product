import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { Col, Container, Row } from "react-bootstrap";
import { FaPhoneVolume } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import "../../../assets/css/styles.css";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import Nav from "react-bootstrap/Nav";

const TopBar = () => {
  return (
    <>
      <div>
        <div className="topheader-section">
          <Container>
            <div className="top-main">
              <Row>
                <Col>
                  <div className="left-top">
                    <Nav.Item className="d-flex justify-content-center ">
                      <Nav.Link href="/home" className="right-top color"> 
                        <FaPhoneVolume /> <span > +88(0)1010000000</span> |{" "}
                      </Nav.Link>
                      <Nav.Link href="/home" className="right-top color">
                        <GoMail />
                        <span className="color">suprema@qodeinteractive.com</span>
                      </Nav.Link>
                    </Nav.Item>
                  </div>
                </Col>
                <Col>
                  <div className="left-top">
                    <Nav.Item className="d-flex justify-content-end color">
                      <Nav.Link href="/home" className="right-top">
                        <span>
                          <GrFacebookOption size={14} />
                        </span>
                      </Nav.Link>
                      <Nav.Link href="/home" className="right-top">
                        <span>
                          <AiOutlineInstagram size={14} />
                        </span>
                      </Nav.Link>

                      <Nav.Link href="/home" className="right-top">
                        <span>
                          <AiOutlineTwitter size={14} />
                        </span>
                      </Nav.Link>
                      <Nav.Link href="/home" className="right-top">
                        <span>
                          <GrLinkedinOption size={14} />
                        </span>
                      </Nav.Link>
                    </Nav.Item>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default TopBar;
