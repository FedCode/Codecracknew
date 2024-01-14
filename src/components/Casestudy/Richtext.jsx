import React from "react";
import {richtextData} from '../../data/Data';
import './Clientabout.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Richtext = () =>{
    return (
        <div className="client-review-component bg-grey section-spacing">
            <Container>
                <Row >
                  
                  <Col md={8} className="mx-auto text-center">
                    <div className="section-card">
                       {
                        richtextData.map((item, i)=>{
                            return(
                                <>
                                  <h2 className="title-h3">{item.heading}</h2>
                                 <p>{item.paragraph}</p>
                                 <p>{item.paragraph1}</p>
                                 <p>{item.paragraph2}</p>
                               
                                </>
                            )
                        })
                       } 
                    </div>
                  </Col>
            
                       
                 </Row>
            </Container>
        </div>
    )
}

export default Richtext;