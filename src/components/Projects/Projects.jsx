import React from "react";
import './Projects.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom"; 

const Projects = () =>{
    return (
        <div className="Projects-components">
             <Container>
                <div className="section-header d-flex ">
                <h2 className="section-title ">Projects</h2>
                <Link className="learn-more-btn">See all projects <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg></Link>
                </div>
            </Container>
            <Container>
                <Row className="custom-padding">
                    <Col md={4}>
                       <div className="section-image">
                       <img src={process.env.PUBLIC_URL+"/images/iPhonePro.png"} alt="habit" />
                       
                       </div>
                    </Col>
                    <Col md={8}>
                         <div className="section-content">
                             <div className="section-text mb-3 pad-5"> 
                               <h2> <span className=""><img src={process.env.PUBLIC_URL+"/images/healthicons_gym.png"} alt="habit" /></span> <span class="color">Habit </span>App</h2>
                             </div>
                             <h2 className="heading-h2 mb-4 pad-5">
                             How we created the innovative fitness app, revolutionizing health and wellness routines. </h2>
                             <p className="para-size-2">Our team collaborated with fitness experts, nutritionists, and technology specialists to develop a holistic approach to wellness. The app offers a
                                 range of features tailored to individual needs, including personalized workout plans, real-time progress tracking, 
                                 and interactive coaching sessions.</p>
                                 <hr className="line my-4"></hr>
                                 <Link className="learn-more-btn"> Case study <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                                </svg></Link>
                         </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Projects;