import React from 'react';
import Devopsbanner from '../../components/Devops/Devopsbanner';
import Overviewcontent from '../../components/Devops/Overviewcontent';
import Devopservice from '../../components/Devops/Devopsservices';
import Devopsintroduction from '../../components/Devops/Devopsintro'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Contactform from '../../components/Services/Contactform';
import './Devops.css';

const Devopsfun = () =>{
    return(
       <>
        <Header></Header>
        <Devopsbanner></Devopsbanner>
        <Overviewcontent></Overviewcontent>
        <Devopservice></Devopservice>
        <Devopsintroduction></Devopsintroduction>
        <Contactform></Contactform>
        <Footer></Footer>
       </>
       
    )
}
 export default Devopsfun;