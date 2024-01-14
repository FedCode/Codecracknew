import React from "react";
import {devOpsheader} from '../../data/Data';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom"; 


const Devopsbanner = () =>{
    return (
        <div className="Casebanner-components section-spacing">
            <Container>
                <Row >
                    <Col md={12} className="casebanner-content text-center">
                        {devOpsheader.map((item, index)=>{
                            return(
                                <>
                               
                                <h1 className="title-h1 mb-2 mx-800 mx-auto">{item.heading}</h1>
                                <p className="my-4">{item.paragarh}</p>
                                <Link className="menu-link primary-link-btn w-auto my-2" to={item.linkUrl}>{item.linktext}</Link>
                                <p><img className="img-fluid" src={item.bnImage} alt="our img"/></p>
                                </>
                            )
                        })}
                    </Col>
                 </Row>
            </Container>
        </div>
    )
}

export default Devopsbanner;