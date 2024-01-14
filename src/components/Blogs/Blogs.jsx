import React from "react";
import './Blogs.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom"; 
import Card from 'react-bootstrap/Card';
import {blogHeader, bloglistingData} from '../../data/Data'

const Blogs = () =>{
    return (
        <div className="blog-components py-5 my-2">
             <Container>
                <div className="section-header d-flex  mb-5">
                 {
                    blogHeader.map((item, index) =>{
                        return(<>
                         <h2 className="section-title ">{item.heading}</h2>
                       <Link className="learn-more-btn" to={`/Blogs`}>{item.linktext}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg></Link>
                        </>)
                    })
                 } 
                </div>
            </Container>
            <Container className="mt-5 pt-4">
                <Row >
                    {bloglistingData.slice(0, 2).map((item, index)=>{
                        return( 
                        <> {item.content.map((data, i)=>
                            <Col md={6} gap={15} key={data.id}>
                              <Card className="blog-card b-0" >
                                <Card.Img variant="top" src={data.image} className="border-corner img-fluid" alt="blog image"/>
                                <Card.Body className="p-0">
                                    <div className="card-header b-0 px-0 my-2 mt-3"> 
                                    <Card.Subtitle className="mb-2"><span className="blog-icon"><img src={data.icon} alt="icon" /></span><span className="blog-category">{data.category}</span></Card.Subtitle>
                                    <h4 className="heading-5">{`${data.date} ${data.month} ${data.year}`}</h4>
                                    </div>
                                    <Card.Title className="heading-2 mb-4">{data.title}
                                        
                                    </Card.Title>
                                    <Card.Text className="para-size-2">
                                     {data.description}
                                    </Card.Text>
                                    <hr class="line my-4"></hr>
                                    <Link className="learn-more-btn" to={`/Blog/${data.id}`}>{data.linktext} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                                    </svg></Link>
                                </Card.Body>
                                </Card>
                        </Col> 
                            
                        )}
                          
                        </>)
                    })}
                   
                </Row>
            </Container>
        </div>
    )
}

export default Blogs;