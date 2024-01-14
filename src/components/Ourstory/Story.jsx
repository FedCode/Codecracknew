import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom"; 
import {storyData} from '../../data/Data'
import './Story.css'
//  import { BiArrowRight} from 'react-bootstrap-icons';
// import { BiCheck} from 'react-bootstrap-icons';


const Story = () => {

  return(

    <div className="ourstroy-component section-spacing">
         <Container>
        <Row className="g-4">
         <Col md={6} >
            <div className="lef-Image">
              <Row className="">
              <Col md={5} >
                <div className="app-box">
                   <div className="img-box">
                     <div className="circle-card">
                     <img src={process.env.PUBLIC_URL+"/images/mobile-img.png"} alt="circle" />
                     </div>
                   </div>
                  <div className="app-developed">
                    {storyData.map((item, index)=>{
                       return(<>
                             <h4>{item.percentage}</h4>
                             <h5>{item.subtitle}</h5>
                             </>)
                    })}
                  </div> 
                  </div>  
              </Col>
              <Col md={7} >
                 <div className="website-box">
                 <img src={process.env.PUBLIC_URL+"/images/dots.png"} alt="" />
                  <div className="hundered-box">
                  <img src={process.env.PUBLIC_URL+"/images/websites.png"} alt="" />
                      {/* <h4>100+</h4> 
                      <h5>Websites Developed</h5> */}
                  </div>
               
                  </div>
              </Col>
              </Row>
               <div className="experience-box d-flex">
                        <div className="user-img">
                         <img src={process.env.PUBLIC_URL+"/images/user-img.png"} alt="" />
                      </div>
                      <div className="user-text">
                      {storyData.map((item, index)=>{
                       return(<>
                             <h4>{item.percentage1}</h4>
                             <h5>{item.subtitle1}</h5>
                             </>)
                         })}
                          
                      </div>
                  
               </div>
             
              </div>
         </Col>
         <Col md={6} >
          <div className="right-content-card text-left">
            {
              storyData.map((item, index)=>{
                return(<>
                    <p className="story-title">{item.tags}</p>
                      <h2 className="title-margin">{item.heading}</h2>
                     </>)
                  })
            }
             <ul>
             {
              storyData.map((item, index)=>{
                return(item.List.map((data , i)=><><li><img src={data.icons} alt="icon"/>{data.list}</li>
                
                </>) ) })
            }
            </ul>
          <Link className="learn-more-btn">Learn more about us <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
          </svg>
          </Link>
          </div>
         </Col>
      </Row>
      </Container>
    </div>
  )  

}

export default Story;