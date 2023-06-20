
export default function Nations(props){
    return(
            <div className="nation-box">
                <img className="box-img" src={props.image}/>
                <h2>{props.name}</h2>
                <h3>{props.text}</h3>
            </div>
           
    )
}