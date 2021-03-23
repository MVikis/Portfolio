
import './App.css';
import cvImage from './testCV.png'
import testCV from '../src/imgs/CvPix.png'
import CV from './CV.pdf'
import Header from './components/Header'
import CvPage from './components/CvPage'
import Gallery from './components/Gallery'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Neural from '../src/imgs/neural.svg'
import Css from '../src/imgs/css-3.svg'
import Chrome from '../src/imgs/chrome-brands.svg'
import Briefing from '../src/imgs/briefing.svg'
import IconCards from '../src/imgs/straight-poker.svg'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faProjectDiagram, faEnvelope, faUser, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
 
library.add( faHome, faProjectDiagram, faEnvelope, faUser, faMapMarkerAlt)




function App() {
  const projects = [{name:'Stylized Components',linkWeb:'https://mvikis.github.io/Stylized-React-Components/',linkGit:'https://github.com/MVikis/Stylized-React-Components', icon:Css},
  {name:'Small Projects',linkWeb:'https://mvikis.github.io/Small-Projects/',linkGit:'https://github.com/MVikis/Small-Projects',icon:Briefing},
  {name:'Machine Learning',linkWeb:'https://mvikis.github.io/ML-Projects/',linkGit:'https://github.com/MVikis/ML-Projects', icon:Neural},
  {name:'Card-Generator',linkWeb:'https://mvikis.github.io/Card-Generator/',linkGit:'https://github.com/MVikis/Card-Generator',icon:IconCards},
  {name:'Safehome Chrome-extension',linkGit:'https://github.com/MVikis/SafeHome-Chrome-Extension',icon:Chrome}]
 
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
