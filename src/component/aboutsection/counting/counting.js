import React from "react";
import CountUp from "react-countup";
import "../abouts.css";

const Counting = () => {
  return (
    <>
      <div className="wrapper_counting">
        <div className="container-fluid w-100">
          <div className="row">
            <div className="row ">
              <div className="text-center counting-show  d-flex justify-content-center">
                <span className="count  ">
                  <CountUp start={0} end={250} duration={5} />
                  <h6>Happy Clients </h6>
                </span>
                <span className="count ">
                  <CountUp start={0} end={18} duration={5} />
                  <h6>Awards Won </h6>
                </span>
                <span className="count ">
                  <CountUp start={0} end={120} duration={5} />
                  <h6>Cups of Coffee </h6>
                </span>
                <span className="count ">
                  <CountUp start={0} end={27} duration={5} />
                  <h6>Projects Finished </h6>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counting;
