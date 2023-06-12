import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image1 from "../../../src/assets/images/Portfolio-Gallery-5.jpg";
import image2 from "../../../src/assets/images/Portfolio-Gallery-6.jpg";
import image4 from "../../../src/assets/images/Portfolio-Gallery-4.jpg";
import "../../assets/css/styles.css";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdOutlineDesignServices } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaAmazonPay } from "react-icons/fa";

const Authentic = () => {
  return (
    <>
      <div className="mrt70    mrb70   ">
        <div>
          <Container>
            <Row>
              <Col>
                <Row>
                  <Col>
                    <img src={image1} width="100%" />
                  </Col>
                  <Col>
                    <img src={image2} width="100%" />
                  </Col>
                </Row>
                <br />
                <Col>
                  <img src={image4} width="100%" />
                </Col>
              </Col>
              <Col className=" authentic-about">
                <h1 className="colorblack pdtop20 ">
                  Creating a Business with Authentic Integrity
                </h1>
                <p className="colorblack pdtop20 ">
                  {" "}
                  Aenean pellentesque non elit vitae tristique. Nullam feugiat
                  nisl nec neque accumsan porta in at eros. Sed placerat
                  efficitur sem vitae blandit. Cras accumsan mattis elementum.
                  Vivamus at rutrum erat, sit amet consequat neque. Donec
                  gravida sapien ac ex rutrum dapibus. Duis est libero, pulvinar
                  id nulla ut, sagittis cursus lectus. Ut consequat aliquet urna
                  euismod consequat. Donec tristique, justo ut tempus finibus,
                  tellus justo sollicitudin sem, vitae ullamcorper neque urna et
                  enim. Nunc posuere.
                </p>
                <tr>
                  <th className="authentic-about-paragraph">
                    <AiOutlineUserAdd className="check" />
                    Create Account
                  </th>
                  <th>
                    <MdOutlineDesignServices className="check" />
                    Choose Design
                  </th>
                </tr>
                <tr>
                  <th className="authentic-about-paragraph">
                    <AiOutlineShoppingCart className="check" /> Add to Cart
                  </th>
                  <th>
                    <FaAmazonPay className="check" />
                    Order and Payment
                  </th>
                </tr>

                <div className="banner-button button1-printing  pdtop20 ">
                  <button className="   rounded  color">READ MORE</button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Authentic;
