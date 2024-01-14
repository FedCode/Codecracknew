import React from "react";
import {ProductgoalData} from '../../data/Data';
import './Clientabout.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Productgoal = () =>{
    return (
        <div className="productgoal-component bg-grey section-spacing">
            <Container>
                <Row >
                   <Col md={12} className="productgoal">
                    {ProductgoalData.map((item, index)=>{
                        return (
                        <>
                        {item.titles? <h3 className="title-h3 text-left">{item.titles}</h3>: <div className="product-card innerproductcard">
                        <h4 className="title-h4">{item.heading}</h4>
                        <h5>{ item.paragraph}</h5>
                     </div> }
                     
                    </>
                        )
                    })}
                    </Col>
                  <Col md={12}>
                    <div className="sections-img">
                        <img className="img-fluid" src={process.env.PUBLIC_URL+"/images/section.png"} alt="" />
                    </div>
                  </Col>
            
                       
                 </Row>
            </Container>
        </div>
    )
}

export default Productgoal;