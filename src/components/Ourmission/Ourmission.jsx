import React from "react";
import './Ourmission.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {ourmissionData, founderData} from '../../data/Data';

const Ourmissions = () =>{
    return (
          <section className="ourmission-component section-spacing">
             <div className="section-header container text-center mx-900 mx-auto">
              {
                ourmissionData.map((item, index)=>{
                    return(
                        <>
                       
                         <h3 className="title-h3">{item.heading}</h3>
                        <p>{item.paragraph}</p>
                        </>
                       
                
                    )
                })
              }  
             </div>
             <Container className="mx-900 mx-auto text-center">
                <div className="container-bgcolor"></div>
              <Row className="custom-margin">
                {founderData.map((item, index) =>{
                    return(
                        <Col sm={6} md={6}>
                          <div className="image-card">
                            <img src={item.fouderImg} alt="" />
                          </div> 
                          <div className="founder-card">
                            <h4>{item.name}</h4>
                            <p>{item.desginantion}</p>
                          </div>
                          
                        </Col>
                    )
                })}
                 
              </Row>
           </Container>
          </section>
          )
}
export default Ourmissions;