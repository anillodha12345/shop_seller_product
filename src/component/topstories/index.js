import React from "react";
import topstore1 from "../../assets/images/topstoreimage1.jpg";
import topstore2 from "../../assets/images/topstoreimage.2.jpg";
import topstore3 from "../../assets/images/topstoreimage3.jpg";
import { TbMathGreater } from "react-icons/tb";

const TopStories = () => {
  return (
    <>
      <div className="wrapper_topstories">
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-12">
              <h6 className="text-center">Latest Posts</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-center">Read Our Top Stories</h3>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-md-4">
              <div>
                <img src={topstore1} alt="no_image" width="100%" />
                <div>
                  <div className="text-black pt-4">
                    <h5 >10 Innovative Playlist Apps</h5>
                  </div>
                  <div>
                    <span className="text-info">February 12, 2016</span>
                  </div>
                  <div className="pt-2 pb-2">
                    <span className="text-secondary" style={{fontSize:"13px"}}>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut..
                    </span>
                  </div>
                  <div className="pt-3 pb-2">
                    <h6 style={{fontSize:"13px"}}>Continue reading <span className="text-secondary" > <TbMathGreater/></span></h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <img src={topstore2} alt="no_image" width="100%" />
              </div>
              <div>
                <div className="text-black pt-4">
                  <h5>15 Best Coffee Shops In LA</h5>
                </div>
                <div>
                  <span className="text-info">February 12, 2016</span>
                </div>
                <div className="pt-2 pb-2">
                  <span className="text-secondary" style={{fontSize:"13px"}}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut..
                  </span>
                </div>
                <div className="pt-3 pb-2">
                  <h6 style={{fontSize:"13px"}}>Continue reading <span className="text-secondary"><TbMathGreater/></span></h6>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <img src={topstore3} alt="no_image" width="100%" />
              </div>
              <div>
                <div className="text-black pt-4">
                  <h5 >Gabriele Jones</h5>
                </div>
                <div>
                  <span className="text-info">February 12, 2016</span>
                </div>
                <div className="pt-2 pb-2">
                  <span className="text-secondary" style={{fontSize:"13px"}}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut..
                  </span>
                </div>
                <div className="pt-3 pb-2" >
                  <h6 style={{fontSize:"13px"}}><b>Continue reading</b> <span className="text-secondary"> <TbMathGreater/></span></h6>
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
