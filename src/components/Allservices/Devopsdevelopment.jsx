import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom"; 
import {devopSData} from '../../data/Data'
// import './Socialmedia.css';

const Devopsdevelopment = () => {
    return(
        <div className="our-contract ourstroy-component section-spacing">
        <Container>
       <Row className="g-4">
      
        <Col md={12} lg={6} className="order2">
         <div className="right-content-card text-left inner-flex">
                    {
                     devopSData.map((item, index)=>{
                          return(<div className="inner-card-flex">
                                       <h2 className="title-margin main-tittle">{item.heading}</h2>
                                       <p> {item.paragarh}</p>
                                       <hr className="my-5"></hr>
                                       <Link className="learn-more-btn" to={item.LinkUrl}>{item.linkText} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                                          </svg>
                                      </Link>
                                   </div>)
                            })
                }
          
          
    
         </div>
        </Col>
        <Col md={12} lg={6} >
        <div className="lef-Image pad-y pad-top">
                 <div className="experience-box d-flex w-100 top-media">
                    <div className="media-icons">
                        <ul className="list-inline">
                            <li>
                             <Link><img src={process.env.PUBLIC_URL+"/images/instagram.png"} alt="social media"/></Link>
                            </li>
                            <li>
                             <Link><img src={process.env.PUBLIC_URL+"/images/twiter.png"} alt="social media"/></Link>
                            </li>
                            <li>
                             <Link><img src={process.env.PUBLIC_URL+"/images/whatsapp.png"} alt="social media"/></Link>
                            </li>
                        </ul>
                    </div>
                 
                    <div className="user-text">
                    {
                            devopSData.map((item, index)=>{
                                return(<>
                                       <h4 className="text-black"> <img src={process.env.PUBLIC_URL+"/images/growth-arrow.svg"} alt="grow icon"/>{item.percentage}</h4>
                                       <h5> {item.subtitle}</h5>
                                      </>)
                            })
                        }
                  
                    </div>
                 </div>
            <div className="image-card-inline">
                <div className="websites socialmedia-card">
                    <div className="website-box">
                    <img src={process.env.PUBLIC_URL+"/images/dots.png"} alt="" />
                        <div className="hundered-box image-size">
                        <img src={process.env.PUBLIC_URL+"/images/manage-supl.png"} alt="grow icon" />
                        </div>
                </div>
               
                
                </div>
                <div className="black-box social-media">
                 <div className="card-content">
                    <div className="percentage-text">
                      {
                            devopSData.map((item, index)=>{
                                return(<>
                                          <h5>{item.Singletitle}</h5>
                                      </>)
                            })
                        }
                  
                    </div> 
                 </div> 
            </div>
                </div>
                <div className="right-imcrad m-0 bottom-card">
                <div className="experience-box d-flex">
                  <div className="user-img">
                    <img src="/images/user-one.png" alt=""/>
                    </div>
                    <div className="user-text">
                        {
                            devopSData.map((item, index)=>{
                                return(<>
                                       <h4 className="text-black"> <img src={process.env.PUBLIC_URL+"/images/growth-arrow.svg"} alt="grow icon"/>{item.percentage1}</h4>
                                       <h5> {item.subtitle1}</h5>
                                      </>)
                            })
                        }
                   </div>
                 </div>
                <div className="website-box m-0">
                     <div className="hundered-box image-size">
                        <img src={process.env.PUBLIC_URL+"/images/card-img.png"} alt="grow icon" />
                     </div>
                </div>

                </div>
                
                  
           </div>
               
        </Col>
        
     </Row>
     </Container>
   </div>
    )
}

export default Devopsdevelopment;