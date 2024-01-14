import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Casebanner from '../../components/Casestudybanner/Casebanner';
import Ourclient from '../../components/Casestudy/Ourclient';
import Clientabout from '../../components/Casestudy/Clientabout';
import Productgoal from '../../components/Casestudy/Productgoal';
import Richtext from '../../components/Casestudy/Richtext';
import Process from '../../components/Casestudy/Process';
import Sucessmatrix from '../../components/Casestudy/Sucessmatrix';
import Clientreview from '../../components/Casestudy/Clientreview';
import Relatedcasestudy from '../../components/Relatedcasestudy/Relatedcasestudy';
import Calltoaction from '../../components/Calltoaction/Calltoaction';


// import Storysection from'../../components/Storysection/Story';
// import Whycodecrack from '../../components/Whycodecrack/Whycode';
// import Ourteam from '../../components/Ourteam/Ourteam'


const Casestudy = () =>{
    return(
       <>
        <Header></Header>
        <Casebanner></Casebanner>
        <Ourclient></Ourclient>
        <Clientabout></Clientabout>
        <Productgoal></Productgoal>
        <Process></Process>
        <Sucessmatrix></Sucessmatrix>
        <Clientreview></Clientreview>
        <Richtext></Richtext>
        <Relatedcasestudy></Relatedcasestudy>
        <Calltoaction></Calltoaction>
        


 
        <Footer></Footer>
       </>
       
    )
}
 export default Casestudy;