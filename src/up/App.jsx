import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Story from'./components/Ourstory/Story';
import Ourclient from './components/Ourclients/Ourclient';
import Contractcycle from './components/Contractcycle/Contractcycle';
import Suppliers from './components/Suppliers/Suppliers';
import Deliver from './components/Deliver/Deliver';
import Socialmedia from './components/Socialmedia/Socialmedia';
import Projects from './components/Projects/Projects';
import Blogs from './components/Blogs/Blogs';
import Faq from './components/Faq/Faq';
import Newslatter from './components/Newslatter/Newslatter';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
       <Header></Header>
       <Hero></Hero>
       <Story></Story>
       <Ourclient></Ourclient>
       <Contractcycle></Contractcycle>
      <Suppliers></Suppliers>
      <Socialmedia></Socialmedia>
      <Deliver></Deliver> 
      <Projects></Projects>
      <Blogs></Blogs>
      <Faq></Faq>
      <Newslatter></Newslatter>
      <Footer></Footer>

  
    </div>
  );
}

export default App;
