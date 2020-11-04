import Button from './Button'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

export default function Card(props){
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
    
    const gridChild = `card grid-child${props.index + 1}`
    return(
        <div data-aos={props.aosData} className={gridChild}>
             <h2 className="card-title">{props.project.name}</h2>
        
        <div className="row button-container">
        <Button Link={props.project.linkWeb} text="Website"/>
        <Button Link={props.project.linkGit} text="Github"/>
        </div>
    </div>
    )
}