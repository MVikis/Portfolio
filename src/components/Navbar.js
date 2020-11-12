import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
 


export default function Navbar(){

    return(
        <nav>
            <ul>
                <li>
                    <a href="#header"><FontAwesomeIcon className="icons" icon="home" /> <span>Hem</span></a>
                </li>
                <li>
                    <a href="#cvTitle"> <FontAwesomeIcon className="icons" icon="user" /> <span>Om</span></a>
                </li>
                <li>
                    <a href="#galleryTitle"><FontAwesomeIcon className="icons" icon="project-diagram" /> <span>Projekt</span></a>
                </li>
                <li>
                    <a href="#contactTitle"><FontAwesomeIcon className="icons" icon="envelope" /> <span>Kontakt</span></a>
                </li>
            </ul>
        </nav>
    )
}