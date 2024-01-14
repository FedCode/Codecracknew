import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Newslatter from '../../components/Newslatter/Newslatter';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Blogs from '../../components/Blogs/Blogs'
import {Link} from "react-router-dom"; 
// import {useParams} from "react-router-dom"
import'./Blog.css'
// import {bloglistingData} from '../../data/Data'

const Blogdetails = () =>{
    // const {BlogId} = useParams()
    // const thisBlog = bloglistingData.content.find(prod => prod.id === thisBlog)

    return(
       <div className='blog-page-wrapper'>
         <Header></Header>
          <div className='Singleblogpage'>
               <Container> 
                  
                  <Row>
                     <Col md={12}>
                        <div className='detail-header'>
                            <div className='blog-toitle'>
                              <h3>Breaking into Product Design: Insights from Codecrack Founder</h3>
                              <Link><img src={process.env.PUBLIC_URL+"/images/share-icons.svg"} alt=""/></Link>
                             </div>
                            <div className='date-time'>
                                <span>31 March 2023</span><span>Written by Alex rude.</span>
                            </div>
                        </div>
                     </Col>
                     <Col md={12}>
                        <div className='blog-single-image'>
                            <img className="img-fluid" src={process.env.PUBLIC_URL+"/images/singleblog.svg"} alt="" />
                        </div>
                     </Col>
                     <Col md={7} className='mx-auto'>
                        <div className='detail-content'>
                             <p>Lorem ipsum dolor sit amet consectetur. Est massa id quam tortor quam blandit sit dui. Diam pulvinar 
                                ligula augue massa.
                                 Pellentesque nisi pretium egestas tempor sit porttitor pellentesque massa.</p>
                                 <p>Lorem ipsum dolor sit amet consectetur. Est massa id quam tortor quam blandit sit dui. Diam pulvinar 
                                ligula augue massa.
                                 Pellentesque nisi pretium egestas tempor sit porttitor pellentesque massa.</p>

                                 <h4>Contents</h4>
                                 <ol>
                                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                                    <li>A nulla risus amet massa.</li>
                                    <li>Elementum porta nunc fames fames turpis neque.</li>
                                    <li>A consectetur sapien vulputate malesuada commodo nec. </li>
                                    <li>Duis est sed sed quam et.</li>
                                </ol>
                                <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                                <p>Lorem ipsum dolor sit amet consectetur. Varius enim pellentesque nunc velit. Nisi 
                                    sapien gravida odio sed tincidunt nunc enim enim. Turpis dolor cursus at euismod 
                                    tristique sit. Gravida proin etiam sollicitudin sit bibendum mauris mol
                                    estie libero. Arcu porta nisi nulla sed. Semper sed ultrices ultrices ni
                                    bh sed. Proin turpis ornare vulputate viverra placerat quisque non fringilla 
                                    urna. Volutpat ultricies turpis suspendisse diam ac lacus habitasse vulputate 
                                    massa. Cursus elit vulputate facilisi nulla ante natoque. Gravida parturient 
                                    augue quis imperdiet. Mauris turpis aenean sed aliquet aliquet tincidunt non.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur. Varius enim pellentesque nunc velit. Nisi 
                                        sapien gravida odio sed tincidunt nunc enim enim. Turpis dolor cursus at euismod
                                         tristique sit. Gravida proin etiam sollicitudin sit bibendum mauris molestie 
                                         libero. Arcu porta nisi nulla sed. Semper sed ultrices ultrices nibh sed
                                         . Proin turpis ornare vulputate viverra placerat quisque non fringilla urna.
                                          Volutpat ultricies turpis suspendisse diam ac lacus habitasse vulputate
                                           massa. Cursus elit vulputate facilisi nulla ante natoque. Gravida part
                                           urient augue quis imperdiet. Mauris turpis aenean sed aliquet aliquet 
                                           tincidunt non.</p>

                                           <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                                <p>Lorem ipsum dolor sit amet consectetur. Varius enim pellentesque nunc velit. Nisi 
                                    sapien gravida odio sed tincidunt nunc enim enim. Turpis dolor cursus at euismod 
                                    tristique sit. Gravida proin etiam sollicitudin sit bibendum mauris mol
                                    estie libero. Arcu porta nisi nulla sed. Semper sed ultrices ultrices ni
                                    bh sed. Proin turpis ornare vulputate viverra placerat quisque non fringilla 
                                    urna. Volutpat ultricies turpis suspendisse diam ac lacus habitasse vulputate 
                                    massa. Cursus elit vulputate facilisi nulla ante natoque. Gravida parturient 
                                    augue quis imperdiet. Mauris turpis aenean sed aliquet aliquet tincidunt non.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur. Varius enim pellentesque nunc velit. Nisi 
                                        sapien gravida odio sed tincidunt nunc enim enim. Turpis dolor cursus at euismod
                                         tristique sit. Gravida proin etiam sollicitudin sit bibendum mauris molestie 
                                         libero. Arcu porta nisi nulla sed. Semper sed ultrices ultrices nibh sed
                                         . Proin turpis ornare vulputate viverra placerat quisque non fringilla urna.
                                          Volutpat ultricies turpis suspendisse diam ac lacus habitasse vulputate
                                           massa. Cursus elit vulputate facilisi nulla ante natoque. Gravida part
                                           urient augue quis imperdiet. Mauris turpis aenean sed aliquet aliquet 
                                           tincidunt non.</p>

                                           <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                                <p>Lorem ipsum dolor sit amet consectetur. Varius enim pellentesque nunc velit. Nisi 
                                    sapien gravida odio sed tincidunt nunc enim enim. Turpis dolor cursus at euismod 
                                    tristique sit. Gravida proin etiam sollicitudin sit bibendum mauris mol
                                    estie libero. Arcu porta nisi nulla sed. Semper sed ultrices ultrices ni
                                    bh sed. Proin turpis ornare vulputate viverra placerat quisque non fringilla 
                                    urna. Volutpat ultricies turpis suspendisse diam ac lacus habitasse vulputate 
                                    massa. Cursus elit vulputate facilisi nulla ante natoque. Gravida parturient 
                                    augue quis imperdiet. Mauris turpis aenean sed aliquet aliquet tincidunt non.</p>
                                    
                        </div>
                     </Col>
                  </Row>
               </Container>
          <Blogs></Blogs>
          </div>
       
         <Newslatter></Newslatter>
        <Footer></Footer>
       </div>
       
    )
}
 export default Blogdetails;