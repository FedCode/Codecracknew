import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Blogbanner from '../../components/Blogbanner/Blogbanner';
import Blogtabs from '../../components/Blogtabs/Blogtab';
import Newslatter from '../../components/Newslatter/Newslatter';
import'./Blog.css'



const Blog = () =>{
    return(
       <div className='blog-page-wrapper'>
         <Header></Header>
         <Blogbanner></Blogbanner>
         <Blogtabs></Blogtabs>
         <Newslatter></Newslatter>
        <Footer></Footer>
       </div>
       
    )
}
 export default Blog;