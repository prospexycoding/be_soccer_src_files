import { DateArray } from "./dateArray"
import Date from "./date"


export default function DateContainer(){

    const Finished = DateArray.map((dddd)=>{
        return(
            <Date week={dddd.week}
                    day={dddd.day}
                    month={dddd.month}/>
        )

    })




    return(
        <div className="date-container">
            <div className="dating">
                {Finished}

            </div>
        </div>
    )
}