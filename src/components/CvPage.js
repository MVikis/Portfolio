import Button from './Button'

export default function CvPage(props){
    
    return(
        <div id="cv" className="background">
             <img alt='' className="cv-image" src={props.cvImage} />
            <div className="row-column">
           
        <div className="cv-text">
        <h2 id="cvTitle" className="title text-style">About</h2>
            <p>Martin är en driven och resultatinriktad person med tidigare
erfarenheter inom interaktiv webbprogrammering. Han har
under sin studietid haft en ledande roll i ett flertal projekt med
tydliga krav på produktivitet, problemlösning och
kommunikation. Det gör honom väl rustad inför ett
tempoväxlande arbete där specifika problem måste lösas
snabbt och effektivt. Martin har via sina projekt även haft
ansvar över personalfrågor och rekrytering, och trivs bra i en
roll där han tillsammans med en grupp utvecklas mot ett
gemensamt mål.</p>
        </div>
        <Button href={props.cv} text="Download CV"/>
            </div>
           
            
        </div>
    )
}