import { NationsArray } from "./nationsarray"
import Nations from "./nations"

export default function NationsContainer(){

    const done = NationsArray.map((vvv)=>{
          return <Nations name={vvv.name}
                           image={vvv.image}
                           text ={vvv.text}/>
    })



    return(
        <div className="array-con">
            <div className="array-box">
                 {done}
            </div>
        </div>
    )
}