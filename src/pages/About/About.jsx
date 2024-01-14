import React from 'react';
import Banner from '../../components/Banner/Banner';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Ourmissions from '../../components/Ourmission/Ourmission';
import Storysection from'../../components/Storysection/Story';
import Whycodecrack from '../../components/Whycodecrack/Whycode';
import Ourteam from '../../components/Ourteam/Ourteam'


const Aboutus = () =>{
    return(
       <>
        <Header></Header>
        <Banner></Banner>
         <Ourmissions></Ourmissions>
         <Storysection></Storysection>
         <Whycodecrack></Whycodecrack>
         <Ourteam></Ourteam>
        <Footer></Footer>
       </>
       
    )
}
 export default Aboutus;