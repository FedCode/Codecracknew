import React from "react";
import './Projectheader.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {projectHeader} from "../../data/Data";


const Projectbanner = () => {
    return(<>
       
       
             <section className="projectheader-component section-spacing">
                 {
                 projectHeader.map((item, index)=>{
                    return(
                    <Container>
                        <Row>
                            <Col className="banner-title text-center mx-auto mx-900">
                            <h1 className="banner-heading dark-color">{item.heading}</h1>
                            <p className="mx-500">{item.paragraph}</p>
                            </Col>
                        </Row>
                    </Container>
                        )
                    })
            }
            </section>
        
   
    </>
        
    )
}
export default Projectbanner;