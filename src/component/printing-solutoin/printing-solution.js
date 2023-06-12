import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../../assets/css/styles.css"


 const  PrintingSolution =() =>  {
  return (
    <>
   
      <div className='mrt70  mrb70'>
        <Container>
          <Row  >
            <Col className='printing-image'>
              <img src="https://sktperfectdemo.com/demos/sktresort/wp-content/uploads/2022/04/holiday-resort.jpg" width="100%" />
            </Col>
            <Col >
            <div className='printing-about'>
             
                
                <Row className='pdtop50'>
                  <Col className='painting-sellers '>
                    <h2 className='text-black '>
                  About Us
                    </h2>
                  </Col>
                </Row>
                <div className='printing-heading'>


                <h2 >Enjoy Your Holiday With Us</h2>
                </div>

           
            
             
            
              {/* <div className='d-flex  patting-paragraph1'>
                <h1 className='justify-content-center text-black'>We are a young and creative company and we offer you fresh printing-press ideas.</h1>
               
              </div> */}
              <div  className='patting-paragraph2'>
                <p>
                From finance, retail, and travel, to social media, cybersecurity, adtech, and more, market leaders are leveraging web data to maintain their advantage. Discover how it can work for you.
                </p>
              </div>

              <div className="banner-button button1-printing ">
                      
                        <button className="   rounded  color">
                         READ MORE
                        </button>
             </div>
            
            </div>
            </Col>

          

          </Row>
        </Container>
      </div>
   
    
    </>
  )
}

export default PrintingSolution


