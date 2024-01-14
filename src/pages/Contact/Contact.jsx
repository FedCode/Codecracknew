import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './Contact.css';

const Contact = () =>{
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
       <>
       <Header></Header>
        <div className="newslatter-component contact-component">
            <Container>
                <Row>
                <Col md={6} className="newslatter-text">
                  <div className="newslatter-content">
                    
                     <h4>Let’s discuss your idea</h4>
                     <p>Lorem ipsum dolor sit amet consectetur. Velit aliquam faucibus dapibus mauris. Vitae convallis sagittis phasellus ullamcorper.</p>
                  </div>
                  </Col>
                  <Col md={6} className="order2">
                    <div className="newslatter-form contactform p-0">
                     <Form noValidate validated={validated} onSubmit={handleSubmit} className="form-style">
                      <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationCustom01" className="mb-3">
                         <FloatingLabel controlId="floatingTextarea2" label="First name">
                          <Form.Control required type="text"placeholder="First name" defaultValue=""/>
                          </FloatingLabel>
                         <Form.Control.Feedback>Looks good!</Form.Control.Feedback> 
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationCustom02" className="mb-3">
                        <FloatingLabel controlId="floatingTextarea3" label="Last name">
                        <Form.Control required type="text"placeholder="Last name" defaultValue=""/>
                         <Form.Control.Feedback>Looks good!</Form.Control.Feedback> 
                         </FloatingLabel>
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationCustom03"className="mb-3" >
                        <FloatingLabel controlId="floatingTextarea4" label="email">

                        <Form.Control required type="email"placeholder="email" defaultValue=""/>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </FloatingLabel>
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationCustom04"className="mb-3" >
                        <FloatingLabel controlId="floatingTextarea5" label="Phone">
                        <Form.Control required type="number"placeholder="Phone" defaultValue=""/>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </FloatingLabel>
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationCustom01" className="mb-3">
                        <FloatingLabel controlId="floatingTextarea6" label="Company">

                        <Form.Control required type="text"placeholder="Company" defaultValue=""/>
                         <Form.Control.Feedback>Looks good!</Form.Control.Feedback> 
                         </FloatingLabel>
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationCustom01" className="mb-3">
                        <Form.Select  aria-label="Default select example">
                        <option>Budget</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                      </Form.Group>
                      
                      <Form.Group as={Col} md="12" controlId="validationCustom01" className="mb-3">
                            <FloatingLabel controlId="floatingTextarea2" label="Project description">
                          <Form.Control
                            as="textarea"
                            placeholder="Project description"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                      </Form.Group>
                     </Row>
                    <Button type="submit" className="subscribe">Submit</Button>
                 </Form>
                    </div>
                  </Col>
               

                </Row>
            </Container>
        </div>
        <Footer></Footer>
        </>
    )
}

export default Contact;