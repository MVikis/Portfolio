

export default function Button(props){

  


    return(
        <a href={props.Link}  className="btn-primary" >{props.text}<span/>
        </a>
    )
}