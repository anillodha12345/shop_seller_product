import React from "react";

const Sectionprice = () => {
  return (
    <>
      <div className="wrapper_services_price">
        <div className="container mt-5 mb-5">
          <div className="row mt-3 mb-3">
            <div>
              {" "}
              <h3 className="text-center pb-3 ">Pricing & Packages</h3>
            </div>
            <div className="text-center pb-5">
              <p className="text-secondary pb-5">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 text-center ">
              <button
                className="px-5 py-3 border border-light fs-6  text-black font-weight-bold h1  "
                style={{ marginLeft: "10px", background: "#efefef" }}
              >
                Premium Plan
              </button>
              <div className="pt-4">
                <h2 className="text-center"><span style={{fontSize:"25px"}}>$</span>10.95</h2>
              </div>
              <div>
                <ul className = "list-unstyled text-secondary">
                    <li className="p-3" >Lorem ipsum dolor sit</li>
                    <li className="p-3">Consectetuer adipiscing</li>
                    <li className="p-3">Sed diam nonummy</li>
                    <li className="p-3">Euismod tincidunt</li>
                </ul>
              </div>
              <div>
              <button
                className="px-5 py-3 border border-light fs-6  text-white font-weight-bold h1  "
                style={{ marginLeft: "10px", background: "#0cc3ce" }}
              >
               LEARN MORE
              </button>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <button
                className="px-5 py-3 border border-light fs-6  text-black font-weight-bold h1  "
                style={{ marginLeft: "10px", background: "#efefef" }}
              >
                Basic Plan
              </button>
              <div className="pt-4 ">
                <h2 className="text-center"><span style={{fontSize:"25px"}}>$</span>45.00</h2>
              </div>
              <div>
                <ul className = "list-unstyled text-secondary">
                <li className="p-3" >Lorem ipsum dolor sit</li>
                    <li className="p-3">Consectetuer adipiscing</li>
                    <li className="p-3">Sed diam nonummy</li>
                    <li className="p-3">Euismod tincidunt</li>
                </ul>
              </div>
              <div>
              <button
                className="px-5 py-3 border border-light fs-6  text-white font-weight-bold h1  "
                style={{ marginLeft: "10px", background: "#0cc3ce" }}
              >
               LEARN MORE
              </button>
              </div>
            </div>
            <div className="col-md-3 text-center text-secondary">
              <button
                className="px-5 py-3 border border-light fs-6  text-black font-weight-bold h1  "
                style={{ marginLeft: "10px", background: "#efefef" }}
              >
                Business Plan
              </button>
              <div className="pt-4">
                <h2 className="text-center text-black"><span style={{fontSize:"25px"}}>$</span>72.00</h2>
              </div>
              <div>
                <ul className = "list-unstyled text-secondary">
                <li className="p-3" >Lorem ipsum dolor sit</li>
                    <li className="p-3">Consectetuer adipiscing</li>
                    <li className="p-3">Sed diam nonummy</li>
                    <li className="p-3">Euismod tincidunt</li>
                </ul>
              </div>
              <div>
              <button
                className="px-5 py-3 border border-light fs-6  text-white font-weight-bold h1  "
                style={{ marginLeft: "10px", background: "#0cc3ce" }}
              >
               LEARN MORE
              </button>
              </div>
            </div>
            <div className="col-md-3 text-center text-secondary">
              <button
                className="px-5 py-3 border border-light fs-6  text-black font-weight-bold h1  "
                style={{ marginLeft: "10px", background: "#efefef" }}
              >
                Premium Plan
              </button>
              <div className="pt-4">
                <h2 className="text-center text-black"><span style={{fontSize:"25px"}}>$</span>99.99</h2>
              </div>
              <div>
                <ul className = "list-unstyled text-secondary">
                <li className="p-3" >Lorem ipsum dolor sit</li>
                    <li className="p-3">Consectetuer adipiscing</li>
                    <li className="p-3">Sed diam nonummy</li>
                    <li className="p-3">Euismod tincidunt</li>
                </ul>
              </div>
              <div>
              <button
                className="px-5 py-3 border border-light fs-6  text-white font-weight-bold h1  "
                style={{ marginLeft: "10px", background: "#0cc3ce" }}
              >
               LEARN MORE
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sectionprice;
