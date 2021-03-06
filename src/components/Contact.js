import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'

export default function Contact(){
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
    return(
        <footer id="contact">
           
            
            <div className="row">
            <svg id="contact-background" viewBox="0 0 500 150" preserveAspectRatio="none" >
                <path d="M-0.90,34.83 C0.23,152.26 535.77,25.95 286.34,312.14 L255.30,251.94 L-5.98,168.05 Z"></path></svg>
                <div className="background">
                <h2 id="contactTitle" className="title text-style">Kontakt</h2>
                    <div id="contact-row-column" className="row-column">
                            <p className="cv-text">Om du är nyfiken och vill veta mer om mig och vad jag kan erbjuda ditt företag så tveka inte - släng iväg ett mejl så kan vi prata mer! </p>
                            
                                <div data-aos-offset="50px" data-aos="fade-right" className="row">
                                    <FontAwesomeIcon icon="user"/>
                                    <div className="row-column">
                                        <span className="font-large">Namn</span>
                                        <span>Martin Viksten</span>

                                    </div>
                                </div>
                                <div data-aos-offset="50px" data-aos="fade-right" className="row">
                                    <FontAwesomeIcon icon="map-marker-alt"/>
                                    <div className="row-column">
                                        <span className="font-large">Adress</span>
                                        <span>Linköping, Sweden</span>
        
                                    </div>
                                </div>
                                <div data-aos-offset="50px" data-aos="fade-right" className="row">
                                    <FontAwesomeIcon icon="envelope"/>
                                    <div className="row-column">
                                        <span className="font-large">Email</span>
                                        <span>vikstenmartin@gmail.com</span>
        
                                    </div>
                                </div>
                            
                      
                    </div>
                    {/* <div id="contact-row-column" className="row-column">
                        <h4>Message me</h4>
                        <div className="contact-form">
                        <form>
                            <input type="text"></input>
                            <input></input>
                        </form>
                            
                        </div>
                        <Button/>
                    </div> */}

                </div>
               

              <div className="credits">
                  
              Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a>,
                 <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>,
                <a href="https://www.flaticon.com/authors/becris" title="Becris">Becris</a>  <a href="https://www.flaticon.com/" title="Flaticon"> from www.flaticon.com</a>
                
                </div>
                </div>
            
        </footer>
    )
}