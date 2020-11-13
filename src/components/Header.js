import { useEffect, useState } from "react"


export default function Header(props){
    const texts =['React utvecklare','C# utvecklare','Javascript utvecklare']
    const [count, setCount] =useState(0)
    const [index, setIndex] = useState(0)
    const [currentText, setText] = useState(texts[0])
    const [letter, setLetter] = useState('')
  function type(){
    if(count === texts.length ){
      setCount(0)
    }
    
    setIndex(index + 1)
    setLetter(currentText.slice(0, index))
    if(letter.length === currentText.length){
      setCount(count+1)
      setText(texts[count])
      setIndex(0)
      
    }
  }  
  useEffect(()=>{
   const timer = setTimeout(() => {
      type()
  },300);
  return ()=> clearTimeout(timer)
  },[index])
  

    return(
        <div id="header" className="header">
        
          <div className="text-container">
         <h3>Hej, jag är </h3><h1>Martin Viksten</h1> <h3> och jag är en</h3>
   <h2 id="text-effect">{letter}</h2>
         </div>
         
         
           <img alt='header img' className="header-img" src={props.testCV} />
        
        </div>
    )
}