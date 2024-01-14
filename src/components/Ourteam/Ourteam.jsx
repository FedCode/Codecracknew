import React from "react";
import './Ourteam.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";
import {ourteamDataheader,ourteamData } from '../../data/Data';

const Ourteam = () => {
     return (
          <section className="ourmission-component section-spacing">
            
             <Container className="">
               <Row className="custom-rowinline">
                 <Col md={2} className="aligncenter">
                 {ourteamDataheader.map((item, index) =>{
                    return(
                      <div className="title-header">
                      <h2 className="h2-meatting-title">{item.heading}</h2>
                       <Link className="learn-more-btn" to={item.link}>{item.linkName}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path></svg> </Link>
                       
                      </div> 
                   )
                 })}
                 </Col>
                {ourteamData.map((item, index) =>{
                    return(
                        <Col md={3} sm={4} className={item.class}>
                         <div className="team-card">
                            <div className="card-header">
                               <img src={item.teamImg} alt="service item"/>
                            </div>
                             <div className="card-body">
                             <h4>{item.Name}</h4>
                                <p>{item.Desig}</p>
                             </div>
                            
                         </div> 
                          
                        </Col>
                    )
                })}
             </Row>
           </Container>
          </section>
          )
}
export default Ourteam;