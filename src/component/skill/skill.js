import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import "../../assets/css/styles.css"
import ProgressBar from 'react-bootstrap/ProgressBar';

 const  Skill = () =>  {
    const num1 = 90;
    const num2 = 95;
    const num3 = 85;
    const num4 = 80;
  return (
    <div>
        <div>
            <Container>
                <Row>
                    <Col md={5}>
                    <h6>Skills</h6>
                    <div className='skill-heading'> <h2>Smart and powerful web design tools for the future</h2></div>
                  <div className='skill-paragraph'>
                  <p>Proin feugiat diam vitae ligula imperd dapibus vestibul tellus libero, at fermentum mi euismod ut. Vivamvitaey dui vitae turpis sollicitudin rutrum.</p>
                    </div> 
                    <div className='d-flex justify-content-between' >
                        <p>Business Consulting</p>
                        <p>90%</p>
                    </div>
                    <div >
                        <ProgressBar now={num1}  className='progress-bar'/>
                    </div> <br/>

                    <div className='d-flex justify-content-between' >
                        <p>Market Analysis</p>
                        <p>95%</p>
                    </div>
                    <div >
                        <ProgressBar now={num2}  />
                    </div> 
                    <br/>
                    <div className='d-flex justify-content-between' >
                        <p>Business Growth</p>
                        <p>85%</p>
                    </div>
                    <div >
                        <ProgressBar now={num3}  />
                    </div> 
                    <br/>
                    <div className='d-flex justify-content-between' >
                        <p>Marketing Strategy</p>
                        <p>80%</p>
                    </div>
                    <div >
                        <ProgressBar now={num4}  />
                    </div> 
                    </Col>
                    <Col xs={7}>
                    <img src="https://sktperfectdemo.com/demos/sktfse/wp-content/themes/skt-fse-pro/assets/images/skill-image.png" width="100%"  height="700vh"/>
                    </Col>
                </Row>
            </Container>

        </div>
    </div>
  )
}



export default Skill