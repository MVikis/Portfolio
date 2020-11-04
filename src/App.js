import logo from './logo.svg';
import './App.css';
import cvImage from './testCV.png'
import testCV from './CvPix.png'
import CV from './CV.pdf'
import { CSSTransition } from 'react-transition-group';
import Header from './components/Header'
import CvPage from './components/CvPage'
import Gallery from './components/Gallery'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faProjectDiagram, faEnvelope, faUser, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
 
library.add( faHome, faProjectDiagram, faEnvelope, faUser, faMapMarkerAlt)




function App() {
  const projects = [{name:'Stylized Cards',linkWeb:'',linkGit:''},
  {name:'Small Projects',linkWeb:'',linkGit:'https://github.com/MVikis/Small-Projects'},
  {name:'Tensor',linkWeb:'https://mvikis.github.io/ML-Projects/',linkGit:'https://github.com/MVikis/ML-Projects'},
  {name:'Card-Generator',linkWeb:'https://mvikis.github.io/Card-Generator/',linkGit:'https://github.com/MVikis/Card-Generator'}]
 
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
     <Header testCV={testCV} cvImage={cvImage}/>
      <CvPage cv={CV} cvImage={cvImage}/>
      <Gallery projects={projects}/>
      <Contact />
      </header>
    </div>
  );
}

export default App;
