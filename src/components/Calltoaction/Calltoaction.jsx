import React from "react";
import './Colltoaction.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Link} from "react-router-dom";
import {calltoactionData} from '../../data/Data'


const Calltoaction = () =>{
   
    return (
        <div className="Projects-components Relatedcasestudy section-spacing">
             <Container>
                <Row className="custom-padding">
                    <div className="d-flex-inline">
                        {calltoactionData.map((item, index)=>{
                        return(
                            <>
                             <h2 className="">{item.heading}</h2>
                            <h6 className="my-5">
                            <Link className="menu-link primary-link-btn" to={item.LinkUrl}>{item.linkText}  </Link>
                            </h6> 
                           </>
                        )
                        })}
                       
                     
                        
                    </div>
                </Row>
            </Container>
            {/* <Projectssectiontwo></Projectssectiontwo> */}
        </div>
    )
}

export default Calltoaction;