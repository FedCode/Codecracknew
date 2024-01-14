import React from "react";
import {overviewtextData} from '../../data/Data';
import './Servicebanner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Overviewtext = () =>{
    return (
        <div className="client-review-component bg-grey section-spacing">
            <Container>
                <Row >
                  <Col md={8} className="mx-auto text-center">
                    <div className="section-card">
                       {
                        overviewtextData.map((item, i)=>{
                            return(
                                <>
                                {item.title?<h2 className="title-h3 mb-5">{item.title}</h2>: <><h4 className="text-left title-h4">{item.heading}</h4>
                                 <p className="text-left">{item.paragarh}</p>
                                  <ul className="list-inline text-left">
                                    <li><p>{item.list1}</p></li>
                                    <li><p>{item.list2}</p></li>
                                    <li><p>{item.list3}</p></li>
                                    <li><p>{item.list4}</p></li>
                                    <li><p>{item.list5}</p></li>
                                    <li><p>{item.list6}</p></li>
                                  </ul>
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

export default Overviewtext;