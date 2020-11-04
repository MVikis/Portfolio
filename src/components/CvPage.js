import Button from './Button'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

export default function CvPage(props){
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
    return(
        <div id="cv" className="background">
             <img className="cv-image" src={props.cvImage} />
            <div className="row">
           
        <div className="text-container" style={{width:"90%"}}>
        <h3>About me</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                 eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                   Duis aute irure dolor in reprehenderit in 
                   voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa
                     qui officia deserunt mollit anim id est laborum.</p>
        </div>
            </div>
            <Button href={props.cv} text="Download CV"/>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
  <path fill="#282c34" fillOpacity="1" d="M0,32L80,48C160,64,320,96,480,117.3C640,139,800,149,960,149.3C1120,149,1280,139,1360,133.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>
        </div>
    )
}