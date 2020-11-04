import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Button from './Button'

export default function Contact(){

    return(
        <footer id="contact">
            <h2>Contact me</h2>
            <div className="row">
                
                    <div id="contact-row-column" className="row-column">
                       
                            <h4>Get in Touch</h4>
                            <span>If you have any questions, please do contact me!</span>
                            
                                <div className="row">
                                    <FontAwesomeIcon icon="user"/>
                                    <div className="row-column">
                                        <span className="font-large">Name</span>
                                        <span>Martin Viksten</span>

                                    </div>
                                </div>
                                <div className="row">
                                    <FontAwesomeIcon icon="map-marker-alt"/>
                                    <div className="row-column">
                                        <span className="font-large">Address</span>
                                        <span>Linköping, Sweden</span>
        
                                    </div>
                                </div>
                                <div className="row">
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
               

                

          
            
        </footer>
    )
}