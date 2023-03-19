import React from 'react'
import "./banner_background.css"

const BannerBackground  = () => {
  return (
   <>
   <div className='background_wrapper'>
    <div className='container pb-5 pt-5'>
        <div className='row pb-3'>
            <div className='background_banner_heading' >
                <h1 className='text-white' style={{fontSize: "58px", letterspacing: "-1px",marginBottom: "6px",lineHeight: "60px",
        fontWeight:"600px",textTransform:"capitalize",textAlign:"center"
        }}>Shop Limited Edition.</h1></div>
        </div>
        <div className='row'>
            <div className='background_banner_paragraph'>
                <p className="text-center  text-white"
                 style={{
                    fontSize: "20px",
                    letterspacing: "0px",
                    lineHeight: "29px",
                  }}
                >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy <br/>
                      nibh euismod tincidunt ut laoreet dolore.

                </p>
            </div>
        </div>
        <div className='row mt-3 mb-5 pb-5'>
        <div className="text-center">
                    <button class="px-5 py-3 bg-info border-info fs-6 text-white font-weight-bold h1  " >
                      FIND OUT MORE
                    </button>
                    <button className="px-5 py-3 border border-light fs-6 bg-transparent text-white font-weight-bold h1 " style={{marginLeft : "10px"}}>
                      FIND OUT MORE
                    </button>

        </div>
        </div>
        </div>
   </div>
   </>
  )
}


export default  BannerBackground

