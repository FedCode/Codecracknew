import React from "react";
import './Projectsectiontwo.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";
import {projectSectiondata} from "../../data/Data";

const Projectssectiontwo = () =>{
    return (
        <div className="Projects-components projectSectiontwo">
             <Container>
                <Row className="custom-padding">
                    {
                      projectSectiondata.map((item, index)=>{
                        return(
                            <>
                            <Col md={7}>
                           <div className="section-content">
                             <div className="section-text mb-2 pad-5"> 
                               <h2> <span className=""><img src={item.picon} alt="habit" /></span></h2>
                             </div>
                             <h2 className="heading-h2 mb-3 pad-5">{item.heading} </h2>
                             <p className="para-size-2">{item.paragraph}</p>
                                 <hr className="line my-4"></hr>
                                 <Link className="learn-more-btn">{item.linktext}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                                </svg></Link>
                          </div>
                      </Col>
                            </>
                        )
                      })
                    }
                    {
                        projectSectiondata.map((item, index)=>{
                        return(
                        <Col md={5}>
                         <div className="section-image">
                            <img src={item.prjImg} alt="habit" />
                        </div>
                      </Col>
                        )
                    })
                     
                    }
                     
                   
                </Row>
            </Container>
        </div>
    )
}

export default Projectssectiontwo;