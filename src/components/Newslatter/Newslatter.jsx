import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Newslatter.css';

const Newslatter = () =>{
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  

    return(
        <div className="newslatter-component">
            <Container>
                <Row>
                  <Col md={6} className="order2">
                    <div className="newslatter-form">
                        <figure>
                        <img src={process.env.PUBLIC_URL+"/images/newslatter.png"} className="border-corner img-fluid" alt="blog"/>
                        </figure>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} className="form-style">
                      <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationCustom02">
                        <Form.Control required type="email"placeholder="email" defaultValue=""/>
                        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                        </Form.Group>
                     </Row>
                    <Button type="submit" className="subscribe">Subscribe</Button>
                 </Form>
                    </div>
                  </Col>
                  <Col md={6} className="newslatter-text">
                  <div className="newslatter-content">
                     <p>Stay Updated With us</p>
                     <h4>Join for insider access to our latest news, events, and promotions</h4>
                  </div>
                  </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Newslatter;