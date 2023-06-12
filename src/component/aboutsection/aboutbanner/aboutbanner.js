import React from "react";
import "../../../assets/css/styles.css";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const AboutBanner = (props) => {
  return (
    <>
      <div>
        <Container fluid>
          <Row  >
            <Col className="p-0">
              <div className="position-relative p-0">
                <img src={props.image} width="100%" height="500px" />
                <div className="position-absolute about-heading ">
                  <h2>{props.name}</h2>
                  <ul className="list-unstyled d-flex about-link">
                    <li>
                      <Link to="/" className="text-decoration-none">
                       
                        Home
                      </Link>
                    </li>
                    <li className="links">{props.page}</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        
      </div>
    </>
  );
};

export default AboutBanner;
