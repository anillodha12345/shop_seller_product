import React from "react";
import image1 from "../../../assets/images/testimonialimage1.png";
import image2 from "../../../assets/images/testimonial-image-2.png";
import image3 from "../../../assets/images/testimonial-image-3.png";
import Slider from "react-slick";
import image4 from "../../../assets/images/testimonial-image-4.png";
import "../portfoliobackground/portfoliobackground.css";

const Testimonial = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <>
      <div className="wrapper_testimonial mt-5  pb-3">
        <div className="container">
          <div className="row">
            <div className="mb-5">
              <h3 className=" text-black text-center">Testimonial</h3>{" "}
            </div>
          </div>
          <Slider {...settings}>
            <div className="testimonial_card">
              <div className="  pb-5">
                <img src={image1} alt="no-image" width={100} />
              </div>
              <div className="px-5 ">
                <p className="justify-content-center">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim .
                </p>
              </div>
              <div>
                <h5>Ed Williams</h5>
              </div>
              <div>
                <p> White Space</p>
              </div>
            </div>

            <div className="testimonial_card">
              <div className=" pb-5">
                <img src={image2} alt="no-image" width={100} />
              </div>
              <div className="px-5 ">
                <p className="justify-content-center">
                  Nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie.
                </p>
              </div>
              <div>
                <h5>Simon Smith</h5>
              </div>
              <div>
                <p>  Pure Water</p>
              </div>
            </div>

            <div className="testimonial_card">
              <div className=" pb-5">
                <img src={image3} alt="no-image" width={100} />
              </div>
              <div className="px-5 ">
                <p className="justify-content-center">
                  Dolore eu feugiat nulla facilisis at vero eros et accumsan et
                  iusto odio dignissim qui blandit praesent luptatum zzril
                  delenit augue duis dolore te feugait nulla facilisi. Nam liber
                </p>
              </div>
              <div>
                <h5>Sandra Levis</h5>
              </div>
              <div>
                <p> Black Pearl</p>
              </div>
            </div>

            <div className="testimonial_card">
              <div className=" pb-5">
                <img src={image1} alt="no-image" width={100} />
              </div>
              <div className="px-5 ">
                <p className="justify-content-center">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim .
                </p>
              </div>
              <div>
                <h5>Ed Williams</h5>
              </div>
              <div>
                <p> White Space</p>
              </div>
            </div>

            <div className="testimonial_card">
              <div className=" pb-5">
                <img src={image2} alt="no-image" width={100} />
              </div>
              <div className="px-5 ">
                <p className="justify-content-center">
                  Nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie.
                </p>
              </div>
              <div>
                <h5>Simon Smith</h5>
              </div>
              <div>
                <p>  Pure Water</p>
              </div>
            </div>

            <div className="testimonial_card">
              <div className=" pb-5">
                <img src={image3} alt="no-image" width={100} />
              </div>
              <div className="px-5 ">
                <p className="justify-content-center">
                  Dolore eu feugiat nulla facilisis at vero eros et accumsan et
                  iusto odio dignissim qui blandit praesent luptatum zzril
                  delenit augue duis dolore te feugait nulla facilisi. Nam liber.
                </p>
              </div>
              <div>
                <h5>Sandra Levis</h5>
              </div>
              <div>
                <p> Black Pearl</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      <div className="container ">
        <div className="row mt-5 wrapper_protofolio_awesome_thems">
          <div className="pt-5">
            <img src={props.image} alt="no-image" width="100%" />
          </div>
        </div>

        <div className="row mt-5"> 
          <div className="col-lg-6">
            <div  className="text-center pb-4">
              <h4 className="text-black">WooCommerce Compatible</h4>
            </div>
            <div className="pb-2">
              <p className="text-center px-5 text-secondary">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna.
              </p>
            </div>
            <div className="text-center">
              <p className="px-5  text-secondary">
                
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
               quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
               Duis autem vel eum iriure dolor in hendrerit in vulputate
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-center pb-3">
              <h3 className="text-black">Import with 1 Click</h3>
            </div>
            <div className="text-center pb-2">
              <p className="px-5 text-secondary">
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea consequat.
              </p>
            </div>
            <div className="text-center pb-2">
              <p className="px-5 text-secondary">
                Molestie consequat, vel illum dolore eu feugiat nulla facilisis
                at vero eros et accumsan et iusto odio dignissim qui blandit
                praesent luptatum zzril delenit augue duis dolore te feugait
                nulla facilisi. Nam liber tempor cum soluta nobis eleifend
                option congue nihil imperdiet doming id quod mazim placerat
                facer possim assum typi non habent
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
