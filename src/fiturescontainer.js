import { FixturesArray } from "./fituresarray"
import Fixtures from "./fixtures"
import "./Styling/homepage.css"


export default function FixturesContainer(){

    const done = FixturesArray.map((aaa)=>{
        return <Fixtures round={aaa.round}
                         team1={aaa.team1}
                         team2 ={aaa.team2}
                         scores ={aaa.scores}
                         team1logo={aaa.team1Logo}
                         team2logo={aaa.team2Logo}/>
    })



    return(
        <div className="fix">
            <div className="fix-box">
                {done}
            </div>
        </div>
    )
}