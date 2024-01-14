import React from 'react';
import Servicebanner from '../../components/Services/Servicebanner';
import Overviewtext from '../../components/Services/Overview';
import Mobileappdev from '../../components/Services/Mobileapp';
import Mobileappintroduction from '../../components/Services/Mobileappintro';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Contactform from '../../components/Services/Contactform'

const Service = () =>{
    return(
       <>
        <Header></Header>
        <Servicebanner></Servicebanner>
        <Overviewtext></Overviewtext>
        <Mobileappdev></Mobileappdev>
        <Mobileappintroduction></Mobileappintroduction>
        <Contactform></Contactform>
        <Footer></Footer>
       </>
       
    )
}
 export default Service;