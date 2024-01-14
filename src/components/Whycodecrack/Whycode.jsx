import React from "react";
import './Whycode.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {serviceCodecrack, whycodecrackData} from '../../data/Data';

const Whycodecrack = () => {
     return (
          <section className="ourmission-component bg-grey section-spacing">
             <div className="section-header text-center mx-900 mx-auto">
              {
                whycodecrackData.map((item, index)=>{
                    return(
                        <>
                        <h3 className="title-h3">{item.heading}</h3>
                        <p>{item.paragraph}</p>
                        </>
                  )
                })
              }  
             </div>
             <Container className="">
               <Row className="custom-rowinline pt-4">
                {serviceCodecrack.map((item, index) =>{
                    return(
                        <Col md={6} sm={6}>
                         <div className="service-card">
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
export default Whycodecrack;