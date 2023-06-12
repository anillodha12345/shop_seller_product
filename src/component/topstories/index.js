import React from "react";
import "./topstories.css";
import { Card } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import "../../assets/css/styles.css";

const TopStories = (props) => {
  return (
    <>
      <div className="  pdtop20 col-md-3 cards-items1 ">
        <Card
          className="cards-items cards-image-stories"
          style={{ width: "25rem" }}
        >
          <Card.Img variant="top" src={props.image} width="100%" height={280} />

          <Card.Body>
            <p className="card-text">
              <Card.Text>{props.title}</Card.Text>
            </p>
            <h6>
              <Card.Title>{props.date} </Card.Title>
            </h6>
            <p>
              <Card.Text>{props.paragraph}</Card.Text>
            </p>
            <p>
              <Card.Text>
                {props.readmore} <BsArrowRight />{" "}
              </Card.Text>
            </p>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default TopStories;
