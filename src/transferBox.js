
import arrow from "./images/arrow.png"


export default function TransferBox(props){
    return(
        <div className="t-box">
            <div className="t-date">
                <h3>{props.date}</h3>
            </div>
            <div className="t-stuff">
                <img src={props.logo}/>
                <div className="t-middle">
                    <h4>{props.playername}</h4>
                    <div className="midd">
                        <h2>{props.clubname}</h2>
                        <img src={props.clublogo}/>
                        <img className="arrow" src={arrow}/>
                        <h5>{props.renewal}</h5>
                    </div>
                </div>
                <h1 className="renew">{props.renewal}</h1>
            </div>
        </div>
    )
}