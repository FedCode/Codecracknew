import React from "react";
import './Relatedcasestudy.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Link} from "react-router-dom";
import Projectssectiontwo from '../../components/Projectsectiontwo/Projectsectiontwo'


const Relatedcasestudy = () =>{
    return (
        <div className="Relatedcasestudy bg-white section-spacing">
             <Container>
                <Row className="custom-padding">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className="section-title">Related Case study</h2>
                        <Link className="learn-more-btn">See all Case study <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 12.4185L20 12.4185M20 12.4185L14 18.4185M20 12.4185L14 6.41846" stroke="#4450F2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </Link>
                    </div>
                </Row>
            </Container>
            <Projectssectiontwo></Projectssectiontwo>
        </div>
    )
}

export default Relatedcasestudy;