import React from "react";
import "./footer.css";
import logo from "../../../assets/images/logo-footer.png";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiOutlineDribbbleSquare } from "react-icons/ai";
import { FaVimeo } from "react-icons/fa";
import { RiCamera2Line } from "react-icons/ri";
import image1 from "../../../assets/images/footerimage1.jpg";
import image2 from "../../../assets/images/footerimage2.jpg";
import image3 from "../../../assets/images/footerimage3.jpg";
import image4 from "../../../assets/images/footerimage4.jpg";
import { TbMathGreater } from "react-icons/tb";
import footercard from "../../../assets/images/footer-imagecard.png"

const Footer = () => {
  return (
    <>
      <div className="footer_wrapper bg-black mt-5  pb-5">
        <div className="container-fluid  mt-3 text-white ">
          <div className="row pt-5">
            <div className="col-md-3">
              <div className=" p-2">
                <img src={logo} />
              </div>
              <div className="p-2">
                <span style={{ fontSize: "13px" }}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet.
                </span>
              </div>
              <div className="p-2">
                <address style={{ fontSize: "13px" }}>
                  198 West 21th Street, Suite 721, New York NY 10010
                  <p className="pt-2">
                    {" "}
                    <Link href="mailto:webmaster@example.com">
                      Email: suprema@qodeinteractive.com:
                    </Link>
                    .
                  </p>
                  <p>Phone: +88 (0) 101 0000 000</p>
                  <p>Fax: +88 (0) 202 0000 001</p>
                </address>
              </div>
              <div className="p-1">
                <FaFacebookSquare size={25} /> <AiFillTwitterSquare size={27} />{" "}
                <AiOutlineDribbbleSquare size={25} /> <FaVimeo size={25} />{" "}
                <RiCamera2Line size={30} />
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="pb-3">
                <h4>Latest Posts</h4>
              </div>

              <div className="" style={{ fontSize: "13px" }}>
                <p>Where Music Is Headed Next</p>
                <p className="text-info">February 12, 2016</p>

                <p>Sports Brand New Advertising Campaign</p>
                <p className="text-info">February 12, 2016</p>

                <p>Snippets From The Tech Mobile Conference</p>
                <p className="text-info">February 12, 2016</p>

                <p>New Music Video Will Blow Your Mind</p>
                <p className="text-info">February 12, 2016</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="pb-3">
                <h4>Twitter Feed</h4>
              </div>
              <div style={{ fontSize: "13px" }}>
                <ul className="list-unstyled">
                  <li   ><Link  to="/" className="text-decoration-none text-white p-2 ">Home</Link></li>
                  <li className="pt-4"><Link to="/products"  className="text-decoration-none text-white p-2 ">Products</Link></li>
                  <li className="pt-4"><Link to="/services"  className="text-decoration-none text-white p-2 ">Services</Link></li>
                  <li className="pt-4"><Link  to="/portfolio" className="text-decoration-none text-white p-2 ">Portfolio</Link></li>
                  <li className="pt-4"><Link  to="/about" className="text-decoration-none text-white p-2 ">About</Link></li>
                  <li className="pt-4"><Link to="/contact"  className="text-decoration-none text-white p-2 ">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="pb-3">
                <h4>Instagram Feed</h4>
              </div>
              <div>
                <img src={image1} alt="no-image" width={50} className="mx-2" />
                <img src={image2} alt="no-image" width={50} />
                <img src={image3} alt="no-image" width={50} className="mx-2" />
                <img src={image4} alt="no-image" width={50} />
              </div>
              <div>
                <hr />
              </div>
              <div className="d-flex ">
                <div className="col-md-6">
                  <p>Subscribe to our newsletter, get 10% off:</p>
                </div>
                <div className="col-md-6 ">
                  <div className="input-group mb-3">
                    
                    <input
                      type="text"
                      className="form-control rounded-0"
                      aria-label="Amount (to the nearest dollar)"
                      placeholder="E-mail"
                      
                      style={{marginTop:"2px",}}
                    />
                    <div className="input-group-append pt-2 ">
            
                      <span className="  border border-white bg-black p-2 px-2"><TbMathGreater size={10}/></span>
                    </div>
                  </div>
                </div>
                <div>
                
                </div>
              </div>
              <textarea className="form-control rounded-0 border border-warning" id="exampleFormControlTextarea1" rows="2">Validation errors occurred. Please confirm the fields and submit it again.</textarea>
              <hr/>
              <div><img src ={footercard} width="100%"/></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
