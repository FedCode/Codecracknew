import React from "react";
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";
import {dataItems, statitcMenus} from "../../data/Data";



const Header = () =>{
  return (
        <Navbar expand="lg" className="bg-body-white py-3 bg-grey">
        <Container>
          <Navbar.Brand href="#home"><img  src={process.env.PUBLIC_URL+"/images/crack-logo.png"} alt="logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
             <div className="ml-4 flex w-max flex-wrap justify-end">
             </div>
                {
                    statitcMenus.map((menu, i)=>{
                      return(<>
                        {menu.content.map((li, i)=><>    <Link to={li.linkUrl} className="menu-link">{li.linkTitle}</Link></>)}
                      </>)
                    })
                  }
               <NavDropdown title="Services" id="basic-nav-dropdown" className="menu-link">
               
              <Container className="py-4 px-4 meni-sub-links">
                <Row>
                 {
                     dataItems.map((item, index) => {
                      return ( 
                      
                        <Col xs={12} lg="3" >
                        {/* <h3 >{item.title}</h3> */}
                        { item.content.map((c, i) => 
                          <div className="mega-menu">
                          <h3 className="mb-3">{c.title}</h3>
                         <p>{c.description}</p>
                         {c.linkUrl && c.linkTitle?<Link to={c.linkUrl}>{c.linkTitle} {c.icons}</Link>:""}
                         {c.imageUrl && c.subtitle?<div className="mega-menu-bg bg-prime-color">
                         <h3 className="mb-3">{c.heading}</h3>
                          <Row>
                            <Col xs={12} lg={6}>
                            <img src={c.imageUrl} alt="icon"/>
                            </Col>
                            <Col xs={12} lg={6}>
                            <h4>
                              {c.subtitle}</h4>
                            </Col>
                          </Row>
                         </div>:""}
                         </div>
                         
                            )}
                      </Col>
                        
                        
                         
                     
                   
                      
                      // <div>
                      //     <h1>{item.title}</h1>
                      //     { item.content.map((c, i) => <div>
                      //     <h3>{c.title}</h3>
                      //     <h3>{c.description}</h3>
                      //     </div>)}
                      //   </div>
                      )
                    })
                  }

                    {/* <Col xs lg="3">
                     <div className="mega-menu mb-4">
                     <h3 className="mb-3">App development</h3>
                     <p>We specialize in crafting tailored web and app solutions that drive success for our clients.</p>
                      </div> 
                      <div className="mega-menu">
                     <h3>App development</h3>
                     <p>We specialize in crafting tailored web and app solutions that drive success for our clients.</p>
                      </div> 
                     
                     
                    </Col> */}
                    {/* <Col xs lg="3">
                    <div className="mega-menu">
                       <h3 className="mb-3">App development</h3>
                       <p>We specialize in crafting tailored web and app solutions that drive success for our clients.</p>
                       <Link className="mega-menu">Explore all Services <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path></svg></Link>
                      </div> 
                    </Col> */}
                    {/* <Col xs lg="3">
                     <div className="mega-menu-bg bg-prime-color">
                     <h3 className="mb-3">What’s new</h3>
                          <Row>
                            <Col lg={6}>
                            <img src={process.env.PUBLIC_URL+"/images/menu-img.png"} alt="icon"/>
                            </Col>
                            <Col lg={6}>
                            <h4>
                              How to Create a responsive design?
                            </h4>
                            </Col>
                          </Row>
                     </div>
                    </Col> */}
                </Row>
              </Container>

              </NavDropdown>    
              
            </Nav>
            <Link href="#home" className="menu-link primary-link-btn">Contact us</Link>
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
    )
}

export default Header;