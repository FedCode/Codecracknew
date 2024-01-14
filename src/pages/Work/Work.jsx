import React from 'react';
import Projectbanner from '../../components/Projectheader/Projectheader';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Projectssectiontwo from '../../components/Projectsectiontwo/Projectsectiontwo';
import Projectssectionthree from '../../components/Projectsectionthree/Projectsectionthree';
import Projectssectionone from '../../components/Projectsectionone/Projectsectionone'
// import Storysection from'../../components/Storysection/Story';
// import Whycodecrack from '../../components/Whycodecrack/Whycode';
// import Ourteam from '../../components/Ourteam/Ourteam'


const Work = () =>{
    return(
       <>
        <Header></Header>
        <Projectbanner></Projectbanner>
        <Projectssectionone></Projectssectionone>
      
        <Projectssectiontwo></Projectssectiontwo>
        <Projectssectionthree></Projectssectionthree>
        <Projectssectiontwo></Projectssectiontwo>
        <Projectssectionone></Projectssectionone>
        <Footer></Footer>
       </>
       
    )
}
 export default Work;