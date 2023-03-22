import React, { useState } from "react";

// import Header from './header';
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "../../slider-animations.css";
import "../../styles.css";
import Contacted from "./serviceData";
import Headers from "../../component/layout/header";
import "./services.css"

const Service = () => {
  const [data, setData] = useState(Contacted);

  return (
    <>
    
        <Headers/>
        <div className="wrapper"></div>
        <Slider className="slider-wrapper services" autoplay={1000} >
          {data.map((item, index) => (
            <div
              key={index}
              className="slider-content "
              style={{
                background: `url('${item.image}') no-repeat center center`,
              }}
            >
              <div className="inner">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button className="mx-5">{item.button}</button>
                <button>{item.button1}</button>
              </div>
             
            </div>
          ))}
        </Slider>
      
    </>
  );
};

export default Service;