import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import './Footer.css';
const Footer = () =>{
    return(
        <div className="footer-component">
            <Container>
                <Row>
                    <Col xs={12} md={6} className="text-left">
                    <Link href="#home"><img className="footer-logo" src={process.env.PUBLIC_URL+"/images/footer-logo.png"} alt="logo" /></Link>
                    </Col>
                    <Col xs={12} md={6}>
                      <Row className="inner-row">
                        <Col xs={6} md={4}>
                            <h5>Company</h5>
                        <ListGroup>
                            <ListGroup.Item>About</ListGroup.Item>
                            <ListGroup.Item>Services</ListGroup.Item>
                            <ListGroup.Item>Work</ListGroup.Item>
                            <ListGroup.Item>Resources</ListGroup.Item>
                            <ListGroup.Item>Contact</ListGroup.Item>
                        </ListGroup>
                         </Col>
                        <Col xs={6} md={4}>
                        <h5>Services</h5>
                        <ListGroup>
                            <ListGroup.Item>Web Development</ListGroup.Item>
                            <ListGroup.Item>App Development</ListGroup.Item>
                            <ListGroup.Item>DevOps</ListGroup.Item>
                            <ListGroup.Item>Loreum Ipsum</ListGroup.Item>
                            <ListGroup.Item>Loreum Ipsum</ListGroup.Item>
                        </ListGroup>
                        </Col>
                        <Col xs={12} md={4} className="mob-center">
                        <h5>Other</h5>
                        <ListGroup>
                            <ListGroup.Item>Blog</ListGroup.Item>
                            <ListGroup.Item>Team</ListGroup.Item>
                            <ListGroup.Item>Clients</ListGroup.Item>
                            <ListGroup.Item>Loreum Ipsum</ListGroup.Item>
                            <ListGroup.Item>Loreum Ipsum</ListGroup.Item>
                        </ListGroup>
                        </Col>
                      </Row>
                    </Col>
                </Row>
             
                    <Container className="pt-5">
                    <Row>
                        <Col md={6} className="text-left font-weight-500"><p>CCS © 2023 All rights reserved</p></Col>
                        <Col md={6}>
                            <ListGroup className="d-flex footer-link">
                            <Link>Privacy Policy</Link>
                            <Link>Terms and conditions</Link>
                        
                           
                        </ListGroup>
                        </Col> 
                        </Row>
                    </Container>
                
            </Container>
         
        </div>
    )
}
export default Footer;