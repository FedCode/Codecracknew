import React from "react";
import {overviewContent} from '../../data/Data';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Overviewcontent = () =>{
    return (
        <div className="client-review-component bg-grey section-spacing">
            <Container>
                <Row >
                  <Col md={8} className="mx-auto text-center">
                    <div className="section-card">
                       {
                        overviewContent.map((item, i)=>{
                            return(
                                <>
                                {item.title?<h2 className="title-h3 mb-5">{item.title}</h2>: <><h4 className="text-left title-h4">{item.heading}</h4>
                                 <p className="text-left">{item.paragarh}</p>
                                 
                                  </>}
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

export default Overviewcontent;