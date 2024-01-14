import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {ourmobileappService, ourMobileappheader} from '../../data/Data';

const Mobileappdev = () => {
     return (
          <section className="ourmission-component mobileapp-component section-spacing">
             <div className="section-header text-center mx-900 mx-auto">
              {
                ourMobileappheader.map((item, index)=>{
                    return(
                        <>
                        <h3 className="title-h2">{item.heading}</h3>
                        </>
                  )
                })
              }  
             </div>
             <Container className="">
               <Row className="custom-rowinline pt-4">
                {ourmobileappService.map((item, index) =>{
                    return(
                        <Col md={6} sm={6}>
                         <div className="service-card bg-grey">
                            <div className="card-header d-flex">
                                <span><img src={item.icon} alt="service item"/></span>
                                <h4>{item.heading}</h4>
                             </div>
                             <div className="card-body mt-4">
                               
                                <p>{item.paragraph}</p>
                             </div>
                            
                         </div> 
                          
                        </Col>
                    )
                })}
             </Row>
           </Container>
          </section>
          )
}
export default Mobileappdev;