import Button from './Button'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

export default function Card(props){
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
    
    const delay = props.aosDelay + 'ms'
    return(
        <div data-aos-duration={delay} data-aos={props.aosData} className="card">
            <h2 className="card-title">{props.project.name}</h2>
            <div className="circle-buttons-container">
        <div className="circle">
            
        <img src={props.project.icon}></img>
        
        </div>
        <div className="row button-container">
        <Button Link={props.project.linkWeb} text="Website"/>
        <Button Link={props.project.linkGit} text="Github"/>
        </div>
        </div>
    </div>
    )
}