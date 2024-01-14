import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom"; 
import Card from 'react-bootstrap/Card'; 
import './Servicebanner.css';
import {servicebannerData} from '../../data/Data'

const Servicebanner = () =>{
    return(
        <div className="Hero-component servicebanner-component section-spacing">
       <Container>
        <Row className="g-4">
      <Col  md={12} lg={7} >
         
           <Card.Body className="text-left py-5 hero-content">
            {
                servicebannerData.map((btext, i)=>{
                    return(
                        <>
                        <h1 className="mb-5">{btext.heading}</h1>
              <h5 className="mb-5 pb-4">
              {btext.paragraph}
              </h5>
              <Link className="primary-link-btn lgbtn w-100 big-btn" to={btext.contactLink}>{btext.btnContact}</Link>
                </>
                    )
                })
            }
              
            </Card.Body>
         
        </Col>
        <Col md={12} lg={5} >
             {
                servicebannerData.map((btext, i)=>{
                    return(
                    <>
                      <Card.Img variant="top" src={btext.banImage} alt="hero img" />
                    </>
                    )
            
                })
            }
          
        </Col>
     </Row>
    </Container>
        </div>
    )
}

export default Servicebanner;