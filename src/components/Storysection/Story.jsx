import React from "react";
import './Story.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {storysectionData, storyimages} from '../../data/Data';

const Storysection = () => {
     return (
          <section className="ourmission-component section-spacing">
             <div className="section-header text-center mx-900 mx-auto">
              {
                storysectionData.map((item, index)=>{
                    return(
                        <>
                       
                         <h3 className="title-h3">{item.heading}</h3>
                        <p>{item.paragraph}</p>
                        </>
                     
                    )
                })
              }  
             </div>
             <Container  fluid className="">
               
              <Row className="custom-rowinline rowinlineflex mt-5">
                {storyimages.map((item, index) =>{
                    return(
                        <div className="custom-col" >
                          <div className={item.class}>
                            <img src={item.abtImage} alt="" />
                         </div> 
                          
                        </div>
                    )
                })}
                 
              </Row>
           </Container>
          </section>
          )
}
export default Storysection;