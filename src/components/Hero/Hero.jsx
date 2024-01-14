import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom"; 
import Card from 'react-bootstrap/Card'; 
import './Hero.css';
import {bannerData} from '../../data/Data'

const Hero = () =>{
    return(
        <div className="Hero-component">
       <Container>
        <Row className="g-4">
      <Col md={8} >
         
           <Card.Body className="text-left py-5 hero-content">
            {
                bannerData.map((btext, i)=>{
                    return(
                        <>
                        <h1 className="mb-5">{btext.heading}</h1>
              <h5 className="mb-5 pb-4">
              {btext.paragraph}
              </h5>
              <Link className="primary-link-btn lgbtn" to={btext.contactLink}>{btext.btnContact}</Link>
              <Link class="primary-link-btn borderoutlinebtn" to={btext.explLink}>{btext.exploreBtn}</Link>
                </>
                    )
                })
            }
              
            </Card.Body>
         
        </Col>
        <Col md={4} >
             {
                bannerData.map((btext, i)=>{
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

export default Hero;