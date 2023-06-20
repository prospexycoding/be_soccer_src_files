import "./Styling/homepage.css"

export default function Fixtures(props){
    return(
        <div className="fixtures-box">
            <h1>{props.round}</h1>
            <div className="scores">
                <h2>{props.team1}<img className="score-logo" width={30} src={props.team1logo}/></h2>
                <h3>{props.scores}</h3>
                <h2><img className="score-logo" width={30} src={props.team2logo}/>{props.team2}</h2>

            </div>
        </div>
    )
}