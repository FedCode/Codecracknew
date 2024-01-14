import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom"; 
import Card from 'react-bootstrap/Card'; 
import {allservicebannerData} from '../../data/Data';
import '../Banner/Banner.css';

const Allservicebanner = () =>{
    return(
        <section className="allservicebanner section-spacing bg-grey">
       <Container>
        <Row className="g-4">
            <Col  md={12} lg={7}  className="mx-auto text-center">
         
           <Card.Body className="text-left hero-content text-center padingtop">
            {
                allservicebannerData.map((btext, i)=>{
                    return(
                        <>
                        <h1 className="banner-heading dark-color mb-5">{btext.heading}</h1>
              <h5 className="mb-5 pb-4">
              {btext.paragraph}
              </h5>
              <Link className="primary-link-btn lgbtn big-btn" to={btext.contactLink}>{btext.btnContact}</Link>
                </>
                    )
                })
            }
              
            </Card.Body>
         
        </Col>
       
     </Row>
    </Container>
        </section>
    )
}

export default Allservicebanner;