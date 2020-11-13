import Button from './Button'

export default function CvPage(props){
    
    return(
        <div id="cv" className="background">
             <img alt='' className="cv-image" src={props.cvImage} />
            <div className="row-column">
           
        <div className="cv-text">
        <h2 id="cvTitle" className="title text-style">Om</h2>
            <p>Jag heter Martin Viksten och är en nyexaminerad C#.NET-utvecklare med en bred kompetens inom en rad olika områden. Jag är en driven och resultatinriktad person som ständigt arbetar aktivt med att utvecklas inom programmering. Den här hemsidan är ett exempel på det! <br/>

Jag har under min studietid haft en ledande roll i ett flertal projekt med tydliga krav på produktivitet, problemlösning och kommunikation. Det gör mig väl förberedd på ett tempoväxlande arbete där specifika problem måste lösas snabbt och effektivt. Tack vare projekten har jag även fått pröva på personalansvar och rekryteringsarbete, vilket var både roligt och utmanande. Jag är van vid att arbeta enskilt med stort eget ansvar men trivs egentligen som allra bäst när jag tillsammans med en grupp kan utvecklas mot ett gemensamt mål. 

Jag har goda kunskaper inom svenska och engelska, eftersom jag har bott och arbetat i Nya Zeeland ett år. </p>
        </div>
        <Button Link={props.cv} text="Ladda ner CV"/>
            </div>
        </div>
    )
}