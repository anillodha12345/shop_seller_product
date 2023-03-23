import React from "react";
import "../services.css"

const Pricing = (props) => {
    console.log(props,"adjadja");
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
                  Lorem ipsum dolor sit amet, consectetuer erat.
                </h3>{" "}
              </div>
              <div className="px-5">
                <p className="justify-content-center px-5 text-secondary">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie consequat,
                  vel illum dolore eu feugiat nulla
                </p>
              </div>
              <div className="px-5">
                <div className="px-5">
                  <button
                    class="px-5 py-3 bg-info border-info fs-6 text-white font-weight-bold " style={{background:"#0cc3ce"}}
                  >
                    CONTINUE READING
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
