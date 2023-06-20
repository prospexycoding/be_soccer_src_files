import { TransferArrey } from "./TransferArray"
import TransferBox from "./transferBox"



export default function TransferContainer(){

    const done = TransferArrey.map((vvv)=>{
        return <TransferBox logo={vvv.logo}
                             date={vvv.date}
                             clubname={vvv.clubname}
                             clublogo={vvv.clublogo}
                             playername={vvv.playername}
                             renewal={vvv.renewal}/>
    })


    return(
        <div>
            <div>
                 {done}
            </div>
        </div>
    )
}