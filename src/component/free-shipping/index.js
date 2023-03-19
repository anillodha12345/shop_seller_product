import React from "react";

const FreeShipping = () => {
  return (
    <>
      <div className="free_shipping_wrapper">
        <div className="container-fluid bg-info">
          <div className="row pt-5 pb-5">
            <div className="col-lg-6 pt-2 pb-2 ">
              <h1 className="text-white text-center">
                Free Shipping Wordwide.
              </h1>
            </div>
            <div className="col-lg-6 text-center">
              <button
                className="px-5 py-3 border border-light fs-6 bg-transparent text-white font-weight-bold h1   "
                style={{ marginLeft: "10px" }}
              >
                SHOP NOW!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeShipping;
