import React from "react";
import './Blogbanner.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom"; 
import Card from 'react-bootstrap/Card';
import {blogbannerData} from '../../data/Data'

const Blogbanner = () =>{
    return (
        <div className="blog-components blog-banner-component py-5"  style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL+"/images/blog-full.webp"})` 
          }}>
            <Container>
                <Row >
                    <Col md={12} className="blog-content">
                        {blogbannerData.map((item, index)=>{
                            return(
                                <>
                                <p>{item.tags}</p>
                                <h1>{item.heading}</h1>
                                <p>{item.paragraph}</p>
                                </>
                            )
                        })}
                       
                    </Col>
                 </Row>
            </Container>
        </div>
    )
}

export default Blogbanner;