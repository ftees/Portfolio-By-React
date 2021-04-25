
import './App.css';
import Header from './components/header/header';
import Banner from './components/banner/banner';
import About from './components/about/about';
import Service from './components/service/service';
import Skill from './components/skills/skill';
import Experience from './components/experience/experience';
import Project from './components/project/project';
function App() {
  
  return (
    
    <div className="App">
        <Header></Header>
        <Banner id="banner"></Banner>
        <About id="about"></About>
        <Service id="service"></Service>
        <Skill id="skill"></Skill>
        <Experience id="exp"></Experience>
        <Project id="prj"></Project>
    </div>
    
  );
}

export default App;
