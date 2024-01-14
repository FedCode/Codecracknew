import React from "react";
import {caseStudyheader} from '../../data/Data';
import './Casebanner.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Casebanner = () =>{
    return (
        <div className="Casebanner-components section-spacing">
            <Container>
                <Row >
                    <Col md={12} className="casebanner-content text-center">
                        {caseStudyheader.map((item, index)=>{
                            return(
                                <>
                                <p><img className="mb-4" src={item.bnIcon} alt="" /></p>
                                <h1 className="title-h1 mb-5 pb-5">{item.heading}</h1>
                                <p><img className="img-fluid" src={item.bnImage} alt=""/></p>
                                </>
                            )
                        })}
                    </Col>
                 </Row>
            </Container>
        </div>
    )
}

export default Casebanner;