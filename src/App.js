
import './App.css';
import Header from './components/header/header';
import Banner from './components/banner/banner';
import About from './components/about/about';
import Service from './components/service/service';
import Skill from './components/skills/skill';
import Experience from './components/experience/experience';
import Project from './components/project/project';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
function App() {
  
  return (
    
    <div className="App">
        <Header></Header>
        <Banner id="banner"></Banner>
        <About id="about"></About>
        <Service id="service"></Service>
        <Skill id="skill"></Skill>
        <Experience id="experience"></Experience>
        <Project id="prj"></Project>
        <Contact id="contact"></Contact>
        <Footer></Footer>
    </div>
    
  );
}

export default App;
