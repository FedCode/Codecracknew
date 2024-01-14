import React from "react";
import {ClientaboutData} from '../../data/Data';
import './Clientabout.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Clientabout = () =>{
    return (
        <div className="ourclient-components section-spacing">
            <Container>
                <Row >
                       
                        
                <Col md={6}>
                  <div className="section-img">
                    <img src={process.env.PUBLIC_URL+"/images/iPhone14Pro.png"} alt="" />
                  </div>
                </Col>
                    <Col md={6} className="ourclient-card">
                    {ClientaboutData.map((item, index)=>{
                        return (<div className="client-card">
                        <h4 className="title-h2">{item.heading}</h4>
                        <h5  className="title-h5">{item.paragraph}</h5>
                    </div>
                        )
                        })}
                    </Col>
            
                       
                 </Row>
            </Container>
        </div>
    )
}

export default Clientabout;