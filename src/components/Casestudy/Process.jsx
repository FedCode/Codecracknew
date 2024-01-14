import React from "react";
import {ProcessData, ProcessdataHeader} from '../../data/Data';
import './Clientabout.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Process = () =>{
    return (
        <div className="ourclient-components our-process section-spacing">
            <Container>
                <Row >
                       
                        
                <Col md={6}>
                  <div className="section-img">
                    <img src={process.env.PUBLIC_URL+"/images/iPhone14Pro.png"} alt="" />
                  </div>
                </Col>
                    <Col md={6} className="ourclient-card">
                    {ProcessdataHeader.map((item, index)=>{
                        return (
                         <div className="inner-header text-left">
                         <h4 className="title-h3 text-left">{item.titles}</h4>
                         </div>
                        )
                        })}
                    
                     {ProcessData.map((item, index)=>{
                        return (
                         
                        <div className="client-card mb-4">
                        <h4>{item.heading}</h4>
                        <h5>{item.paragraph}</h5>
                    </div>
                   
                        )
                        })}
                    </Col>
            
                       
                 </Row>
            </Container>
        </div>
    )
}

export default Process;