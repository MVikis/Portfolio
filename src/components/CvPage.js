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
            <div className="row-column">
           
        <div style={{width:'50%'}}>
        <h2 id="cvTitle" className="title text-style">About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                 eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                   Duis aute irure dolor in reprehenderit in 
                   voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa
                     qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <Button href={props.cv} text="Download CV"/>
            </div>
           
            
        </div>
    )
}