import React, { useState } from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "../../slider-animations.css";
import "../../styles.css";
import Headers from "../layout/header";
import { Productslider } from "../products/productData";
import "./newstore.css";
import Product from "../products";

const Newstore = () => {
  const [data, setData] = useState(Productslider);

  return (
    <>
      <div className="wrapper_products_header  ">
        <div className="container-fluid w-100  header_bar">
          <div className="row ">
            <Headers />
          </div>{" "}
        </div>
      </div>

      <Slider className="slider-wrapper product" autoplay={1000} >
        {data.map((item, index) => (
          <div className="row h-100">
            <div
              key={index}
              className="slider-content  "
              style={{
                background: `url('${item.image}') no-repeat center center `,
              }}
            >
              <div className="inner">
                <h1>{item.title}</h1>
                <p className="text-white">{item.paragraph}</p>
                <p className="text-white px-2">{item.paragraph1}</p>
                <button className="mx-5">{item.button}</button>
                <button>{item.button1}</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <Product/>
      
    </>
  );
};

export default Newstore;
