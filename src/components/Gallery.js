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
     const aosData=['fade-right','fade-left','fade-up','fade-up']

    return(
        <div id="gallery" className="background" style={{backgroundColor: '#282c34'}}>
            <div className="grid">
                
                {shuffle(props.projects).map((project,index) => 
                  <Card aosData={aosData[index]} key={index} index={index} project={project}/>
                     
                    )}
                
               
            </div>
        </div>
    )
}