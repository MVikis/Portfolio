import StyleCard from './StyleCard.png'
import Card from './Card'


export default function Gallery(props){

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }
     

    return(
        <div id="gallery" className="background" style={{backgroundColor: '#282c34'}}>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
  <path fill="#282c34" fillOpacity="1" d="M0,32L80,48C160,64,320,96,480,117.3C640,139,800,149,960,149.3C1120,149,1280,139,1360,133.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>
                <h2 id="galleryTitle" className="title text-style">Projects</h2>
                <div className="projects">
                {shuffle(props.projects).map((project,index) => 
                  <Card aosData='fade-up' aosDelay={100*(index+1)} key={index} index={index} project={project}/>
                     
                    )}
                </div>
               
                
               
        </div>
    )
}