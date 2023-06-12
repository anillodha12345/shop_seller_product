import React from "react";
import "../../assets/css/styles.css";
import { Col, Container } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";

const Content = (props) => {
  return (
    <>
      <div>
        <div className=" ">
          <Container>
            <Col className="col-md-">
              <div className="content-card">
                <div className="text-center content-image">
                  <img src={props.image} width={50} height={50} />
                </div>
                <div className="text-center ">
                  <h6 className="content-image">{props.title}</h6>
                  <p className="content-paragraph1">{props.paragraph}</p>
                  <p className=" content-paragraph ">
                    {props.text} <BsArrowRight />
                  </p>
                </div>
              </div>
            </Col>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Content;
