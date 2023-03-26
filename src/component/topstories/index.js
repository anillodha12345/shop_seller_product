import React from "react";

import { TbMathGreater } from "react-icons/tb";
import "./topstories.css";

const TopStories = (props) => {
  return (
    <>
      <div className="wrapper_topstories mb-5">
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-10">
              <div>
                <img src={props.image} alt="no_image" width="100%" />
                <div>
                  <div className="text-black pt-4">
                    <h5>{props.title}</h5>
                  </div>
                  <div>
                    <span className="text-info">{props.date}</span>
                  </div>
                  <div className="pt-2 pb-2">
                    <span
                      className="text-secondary"
                      style={{ fontSize: "13px" }}
                    >
                      {props.paragraph}
                    </span>
                  </div>
                  <div className="pt-3 pb-2">
                    <h6 style={{ fontSize: "13px" }}>
                      {props.readmore}{" "}
                      <span className="text-secondary">
                        {" "}
                        <TbMathGreater />
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopStories;
