import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { GrFormSearch } from "react-icons/gr";
import "../../assets/css/styles.css";
import AboutBanner from "../aboutsection/aboutbanner/aboutbanner";
import Badge from "@mui/material/Badge";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { TiSocialPinterest } from "react-icons/ti";
import { ImStumbleupon } from "react-icons/im";
import { AiOutlineTwitter } from "react-icons/ai";
import image1 from "../../assets/images/productbanner1.jpg"
import shoe from "../../assets/images/footerimage1.jpg";
import insta from "../../assets/images/footerimage2.jpg";
import shadow from "../../assets/images/footerimage3.jpg"

const BlogDetails = () => {
  const getblockdata = useSelector((state) => state.blogreducer.blog);
  console.log(getblockdata, "abjfhja");

  return (
    <>
     <AboutBanner image ={image1}name="Blog" page="Blog" />
      <div className="mrt70">
        <Container>
          <Row>
            <Col md={8}>
              <div>
                <img src={getblockdata.image} width="100%" height="380px" alt="no-image" />
              </div>
              <div className="pdtop20 ">
                <p>{getblockdata.title}</p>
              </div>
              <div >
                <h6>{getblockdata.heading}</h6>
              </div>
              <div className="pdtop20 "> 
                <p>{getblockdata.paragraph}</p>
              </div>
              <div >
                <p>{getblockdata.author}</p>
              </div>

              <div className="blog-card">
                <span>
                  <TiSocialFacebook />
                </span>
                <span>
                  <AiOutlineGooglePlus />
                </span>
                <span>
                  <TiSocialPinterest />
                </span>
                <span>
                  <ImStumbleupon />
                </span>
                <span>
                  <AiOutlineTwitter />
                </span>
              </div>
            </Col>
            <Col md={3}>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 rounded-0"
                  aria-label="Search"
                  disabled
                />
              </Form>
              <br />
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2  rounded-0"
                  aria-label="Search"
                />
                <Button className="block-details-search rounded-0">
                  <GrFormSearch size="20" className="color" />
                </Button>
              </Form>
              <br />

              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Category"
                  className="me-2 rounded-0"
                  aria-label="Search"
                  disabled
                />
              </Form>
              <br />
              <div className="d-flex justify-content-between">
                <p>
                  <Link className="block-detail-category" to="/">Construction</Link>
                </p>
                <p>
                  <Badge badgeContent={3} className="block-items" />
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p>
                  <Link className="block-detail-category" to="/">Factory</Link>
                </p>
                <p>
                  <Badge badgeContent={3} className="block-items" />
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p>
                  <Link className="block-detail-category" to="/">Industrial</Link>
                </p>
                <p>
                  <Badge badgeContent={3} className="block-items" />
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p>
                  <Link className="block-detail-category" to="/">Interior</Link>
                </p>
                <p>
                  <Badge badgeContent={3} className="block-items" />
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p>
                  <Link className="block-detail-category" to="/">Uncategorized</Link>
                </p>
                <p>
                  <Badge badgeContent={3} className="block-items" />
                </p>
              </div>


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
          </Row>
        </Container>
      </div>
    </>
  );
};

export default BlogDetails;
