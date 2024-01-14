import React from "react";
import {ourclientData} from '../../data/Data';
//import './Casebanner.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Ourclient = () =>{
    return (
        <div className="ourclient-components client-section bg-grey section-spacing">
            <Container>
                <Row >
                        {ourclientData.map((item, index)=>{
                            return(
                             <Col md={3} className="ourclient-card">
                                <div className="client-card">
                                    <h4>{item.heading}</h4>
                                    <h5>{item.subtitle}</h5>
                                </div>
                                
                             </Col>
                            )
                        })}
                    
                 </Row>
            </Container>
        </div>
    )
}

export default Ourclient;