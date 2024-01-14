import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Ourclient.css'

const Ourclient = () => {

    return(
          <div className="ourclent-component grey-bg py-5">
              <Container className="half-container">
                 <Row className="custom-row">
                   <Col md={5} className="bo-right">
                     <h4 className="h4-title">Trusted By clients all<br/> over the world.</h4>
                   </Col>
                   <Col md={7}>
                    <div className="client-image"> <img src={process.env.PUBLIC_URL+"/images/facebook-logo.svg"} alt="facebook icon" /></div>
                   </Col>
                </Row> 
            </Container>
          </div>
    )
}

export default Ourclient;