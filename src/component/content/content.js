import React from "react";
import { Link } from "react-router-dom";
import "./content.css";

const Content = (props) => {
  return (
    <>
      <div className="wrapper-content  ">
        <div className="container   pt-5 pb-5 ">
          <div className="row">
            <div>
              <h5 className="text-center text-red">{props.title}</h5>
            </div>
            <div className="pt-3">
              <p
                className="text-black px-5 text-center"
                style={{ fontSize: "13px", fontFamily: "sans-serif" }}
              >
                {props.paragraph}{" "}
              </p>
            </div>
            <div className="text-center pt-3">
              <h6>
                <Link style={{ color: "#0cc3ce" }}>{props.text}</Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
