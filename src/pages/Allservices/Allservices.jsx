import React from 'react';
import Allservicebanner from '../../components/Allservices/Allservicesbanner';
import Mobileappdevelopment from '../../components/Allservices/Mobileappdevelopment';
import  Mobileappdevtwo from '../../components/Allservices/Mobileappdeve2';
import Websitedevtwo from '../../components/Allservices/Websitedev2';
import Ecommerce from '../../components/Allservices/Ecommerce';
import Websitedevelopment from '../../components/Allservices/Websitedvelopment';
import Devopsdevelopment from '../../components/Allservices/Devopsdevelopment';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Contactform from '../../components/Services/Contactform';
import './Allservices.css';

const Allservices = () =>{
    return(
       <>
        <Header></Header>
        <Allservicebanner></Allservicebanner>
        <Mobileappdevelopment></Mobileappdevelopment>
        <Websitedevelopment></Websitedevelopment>
        <Devopsdevelopment></Devopsdevelopment>
        <Mobileappdevtwo></Mobileappdevtwo>
        <Websitedevtwo></Websitedevtwo>
        <Ecommerce></Ecommerce>
        <Contactform></Contactform>
        <Footer></Footer>
       </>
       
    )
}
 export default Allservices;