import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom"; 
import {contractcycleData} from '../../data/Data'
import './Contractcycle'
import Video from '../Video/Video';

const Contractcycle = () =>{
  
    return(
        <div className="our-contract ourstroy-component section-spacing">
        <Container>
       <Row className="g-4">
       <Col  md={12} lg={6} className="order2">
         <div className="right-content-card text-left inner-flex">
           {contractcycleData.map((item, index)=>{
             return(<div className="inner-card-flex">
            <h2 className="title-margin main-tittle">{item.heading}</h2>
            <ul className="ul-listing">
            {
             
              item.list.map((data,i)=> <li><h4>{data.title}</h4><p>{data.paragraph}</p></li>

              )
              
            }
            </ul>
            
           <Link className="learn-more-btn" to={item.LinkUrl}>{item.linkText} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
            </svg></Link>
              </div>)
           })}
     
   
         </div>
        </Col>
        <Col md={12} lg={6} >
           <div className="lef-Image video-card custom-padding-video">
           <Row className="">
              <Col md={7} >
                <div className="video-box">
                <div className="experience-box d-flex">
                  <div className="user-img">
                    <img src="/images/user-one.png" alt=""/>
                    </div>
                    <div className="user-text">
                     {
                        contractcycleData.map((item, index)=>{
                            return(<>
                             <h4 className="text-black"> <img src={process.env.PUBLIC_URL+"/images/growth-arrow.svg"} alt="grow icon"/>{item.percentage}</h4>
                             <h5>{item.subtitle}</h5>
                            </>)
                     })}
                    
                  
                     </div>
                      </div>
                  </div>  
                  <div className="website-box m-0 ml-4 mt-5">
                 <img src={process.env.PUBLIC_URL+"/images/grey-bar.png"} alt="" />
                  <div className="hundered-box image-size">
                  <img src={process.env.PUBLIC_URL+"/images/web-img.png"} alt="grow icon"/>
                  </div>
               
                  </div>

              </Col>
              <Col md={5} className="pl-0">
                 <div className="website-box m-0 mb-5">
                 <img src={process.env.PUBLIC_URL+"/images/dots.png"} alt="" />
                  <div className="hundered-box">
                  <Video></Video>
                  </div>
               
                  </div>
                  <div className="image-size bottom-img">
                  <img src={process.env.PUBLIC_URL+"/images/counter-img.png"} alt="" />
                  </div>

              </Col>
              </Row>
          
             </div>
        </Col>
        
     </Row>
     </Container>
   </div>
    )
}

export default Contractcycle;