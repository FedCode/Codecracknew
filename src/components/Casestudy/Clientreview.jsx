import React from "react";
import {clientreviewData} from '../../data/Data';
import './Clientabout.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Clientreview = () =>{
    return (
        <div className="client-review-component client-padding">
            <Container>
                <Row >
                  
                  <Col md={6} className="mx-auto text-center">
                    <div className="section-client">
                       {
                        clientreviewData.map((item, i)=>{
                            return(
                                <>
                                 <img src={item.icon} alt="" />
                                 <h4 className="my-4">{item.paragraph}</h4>
                                 <h5>{item.clintName}</h5>
                                 <p>{item.desig}</p>
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

export default Clientreview;