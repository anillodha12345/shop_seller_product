import React from "react";
import "./portfoliobackground.css";

const PortfolioBackground = () => {
  return (
    <>
      <div className="background_wrapper pt-5 mt-5 mb-5">
        <div className="container pb-2 pt-5">
            <div className="row">
                    <div className="col-lg-6 pt-5">
                        <div className="px-5 pb-3 "><h2 className="px-5 text-black">Discover Awesome Features.</h2></div>
                        <div  className="px-5">
                        <p className="px-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod 
                            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo conse.
                             Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat</p>
                    </div>
                    <div className="px-5">
                        <div className="px-5">
                        <button class="px-5 py-3  border-0 fs-6 text-white font-weight-bold h1  animate__animated  animate__bounceInUp "  style={{background:"#0cc3ce"}}>
                      FIND OUT MORE
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

export default PortfolioBackground;
