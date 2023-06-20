import "./Styling/homepage.css"
import { LaligaFixturesArray } from "./laligafixturesarray"
import LaligaFixtures from "./laliga.fixtures"

export default function LaligaFixturesContainer(){

    const done = LaligaFixturesArray.map((aaa)=>{
        return <LaligaFixtures round={aaa.round}
                         team1={aaa.team1}
                         team2 ={aaa.team2}
                         scores ={aaa.scores}
                         team1logo={aaa.team1Logo}
                         team2logo={aaa.team2Logo}/>
    })



    return(
        <div className="laliga-fix">
            <div className="laliga-fix-box">
                {done}
            </div>
        </div>
    )
}