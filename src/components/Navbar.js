import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
 


export default function Navbar(){

    return(
        <nav>
            <ul>
                <li>
                    <a href="#header"><FontAwesomeIcon className="icons" icon="home" /> <span>Home</span></a>
                </li>
                <li>
                    <a href="#cvTitle"> <FontAwesomeIcon className="icons" icon="user" /> <span>About</span></a>
                </li>
                <li>
                    <a href="#galleryTitle"><FontAwesomeIcon className="icons" icon="project-diagram" /> <span>Projects</span></a>
                </li>
                <li>
                    <a href="#contactTitle"><FontAwesomeIcon className="icons" icon="envelope" /> <span>Contact</span></a>
                </li>
            </ul>
        </nav>
    )
}