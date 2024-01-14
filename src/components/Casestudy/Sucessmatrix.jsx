import React from "react";
import {sucessmatrixData, sucessmatrixDatatwo, sucessmatrixHeader} from '../../data/Data';
import './Clientabout.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Sucessmatrix = () =>{
    //const [img, heading, para] = sucessmatrixDatatwo;
    return (
        <div className="sucessmatrix-component bg-grey padding-5">
            <Container>
                <Row >
                    <Col md={12}>
                       <div className="section-header text-left mb-5">
                        {
                            sucessmatrixHeader.map((item, index)=>{
                                return(
                                    <>
                                     <h2 className="title-h3">{item.heading}</h2>
                                    </>
                                )
                            })
                        }
                         <h2 className="section-title">{}</h2>
                       </div>
                    </Col>
                   <Col  md={6} className="productgoal">
                    <Row>
                    {sucessmatrixData.map((item, index)=>{
                        return (
                        <Col xs={6} md={6}>
                        <div className="product-card">
                        <h4>{item.heading}</h4>
                        <h5>{ item.paragraph}</h5>
                        </div>
                        </Col>
                        )
                    })}
                       

                       
                    </Row>
                 </Col>
                  <Col md={6}>
                    <div className="section-appstore">
                       {
                        sucessmatrixDatatwo.map((item, i)=>{
                            return(
                                <>
                                 <img src={item.icon} alt="" />
                                 <h5>{item.heading}</h5>
                                 <p>{item.paragraph}</p>
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

export default Sucessmatrix;