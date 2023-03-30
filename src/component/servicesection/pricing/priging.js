import React from "react";
import "../services.css"

const Pricing = (props) => {
  
  return (
    <>
      <div className="wrapper_services_card_all">
        <div className="container-fluid ">
          <div className="row ">
            <div className="col-lg-6 column_reverse_img  pb-3">
              <img
                src={props.images}
                width="100%"
              />
            </div>
            <div className="col-lg-6 p-5 column_reverse_text">
              <div className="px-5">
                {" "}
                <h3 className="justify-content-center text-black px-5 py-3">
                 {props.title}
                </h3>{" "}
              </div>
              <div className="px-5">
                <p className="justify-content-center px-5 text-secondary">
                  {props.paragraph}
                </p>
              </div>
              <div className="px-5">
                <div className="px-5">
                  <button
                    class="px-5 py-3  border-0 fs-6 text-white font-weight-bold " style={{background:"#0cc3ce"}}
                  >
                    {props.button}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-6 column_reverse_img  pb-3">
              <img
                src={props.images}
                width="100%"
              />
            </div>
            <div className="col-lg-6 p-5 column_reverse_text">
              <div className="px-5">
                {" "}
                <h3 className="justify-content-center text-black px-5 py-3">
                 {props.title}
                </h3>{" "}
              </div>
              <div className="px-5">
                <p className="justify-content-center px-5 text-secondary">
                  {props.paragraph}
                </p>
              </div>
              <div className="px-5">
                <div className="px-5">
                  <button
                    class="px-5 py-3  border-0 fs-6 text-white font-weight-bold " style={{background:"#0cc3ce"}}
                  >
                    {props.button}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Pricing;
