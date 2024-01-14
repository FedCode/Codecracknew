import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {devopServicesData, devopHeader} from '../../data/Data';

const Devopservice = () => {
     return (
          <section className="ourmission-component mobileapp-component section-spacing">
             <div className="section-header text-center mx-900 mx-auto">
              {
                devopHeader.map((item, index)=>{
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
                {devopServicesData.map((item, index) =>{
                    return(
                        <Col md={4} sm={6}>
                         <div className="service-card bg-grey">
                            <div className="card-header flex-columns">
                                <span><img src={item.icon} alt="service item"/></span>
                                <h4 className="mt-3">{item.heading}</h4>
                             </div>
                             <div className="card-body mt-4 text-center">
                               
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
export default Devopservice;