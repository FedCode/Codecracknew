import React from "react";
import './Banner.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {aboutBanner} from "../../data/Data";


const Banner = () => {
    return(<>
       
       
             <section className="banner-component"  style={{ 
                backgroundImage: `url(${process.env.PUBLIC_URL + '/images/banner.jpg'})` 
              }}>
                 {
                 aboutBanner.map((item, index)=>{
                    return(
                    <Container className="banner-container">
                        <Row>
                            <Col className="banner-title">
                            <h1 className="banner-text">{item.heading}</h1>
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
export default Banner;