import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../assets/css/styles.css"
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import image1 from "../../assets/images/team1.jpg"
import image2  from "../../assets/images/team2.jpg";
import image3 from "../../assets/images/team3.jpg"
import image4 from "../../assets/images/team4.jpg"

const Ourteam = () => {
  return (
    <>
      <div className="mrt70  ">
        <Container>
          <Row  >
            <Col className="text-center  ">
              <h6>Creative Team</h6>
            </Col>
          </Row>
         
            <Col className="team-heading">
              <h1 className="ourteam-paragraph text-center">
              Meet Our Dedicated Team Members
              </h1>
            </Col>
      
          <Row className="pdtop20 ">
            <Col className="col-md-3 ourteam-image">

              <img src={image1}  width="100%"  className="rounded"/>
              <div className="member_info">
                    <div className="member_info_content">
                      <h4 className=" text-center">Saraha Jhonson</h4>
                      <p className=" text-center">Product Manager</p>
                    </div>
                    <div className="our-team-socialicon text-center ">
                      <Link to="">
                        <BsTwitter  />
                      </Link>
                      <Link to="">
                        <BsFacebook  />
                      </Link>
                      <Link to="">
                        <BsInstagram    />
                      </Link>
                      <Link to="">
                        <BsLinkedin   />
                      </Link>
                    </div>
              </div>
            </Col>
            <Col className="col-md-3 ourteam-image">
              <img src={image2} width="100%" className="rounded" alt="no-image"/>
              <div className="member_info">
                    <div className="member_info_content">
                      <h4 className=" text-center">Saraha Jhonson</h4>
                      <p className=" text-center">Product Manager</p>
                    </div>
                    <div className="our-team-socialicon text-center ">
                      <Link to="">
                        <BsTwitter  />
                      </Link>
                      <Link to="">
                        <BsFacebook  />
                      </Link>
                      <Link to="">
                        <BsInstagram    />
                      </Link>
                      <Link to="">
                        <BsLinkedin   />
                      </Link>
                    </div>
              </div>
            </Col>
            <Col className="col-md-3 ourteam-image">
              <img src={image3} width="100%"  className="rounded"/>
              <div className="member_info">
                    <div className="member_info_content">
                      <h4 className="  text-center">Saraha Jhonson</h4>
                      <p className="  text-center">Product Manager</p>
                    </div>
                    <div className="our-team-socialicon text-center ">
                      <Link to="">
                        <BsTwitter  />
                      </Link>
                      <Link to="">
                        <BsFacebook  />
                      </Link>
                      <Link to="">
                        <BsInstagram    />
                      </Link>
                      <Link to="">
                        <BsLinkedin   />
                      </Link>
                    </div>
              </div>
            </Col>
            <Col className="col-md-3 ourteam-image">
              <img src={image4}  width="100%" className="rounded"/>
              <div className="member_info">
                    <div className="member_info_content">
                      <h4 className="  text-center">Saraha Jhonson</h4>
                      <p className="  text-center">Product Manager</p>
                    </div>
                    <div className="our-team-socialicon text-center ">
                      <Link to="">
                        <BsTwitter  />
                      </Link>
                      <Link to="">
                        <BsFacebook  />
                      </Link>
                      <Link to="">
                        <BsInstagram    />
                      </Link>
                      <Link to="">
                        <BsLinkedin   />
                      </Link>
                    </div>
              </div>
            </Col>
           
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Ourteam;
