import { Headsarray } from "./headsarray"
import Heads from "./heads"


export default function HeadsContainer(){

    const done = Headsarray.map((aaa)=>{
        return <Heads rona={aaa.imgg}/>

    })



    return(
        <div className="Headscontainer">
            <div className="ronado-box">
                {done}

            </div>
        </div>
    )
}