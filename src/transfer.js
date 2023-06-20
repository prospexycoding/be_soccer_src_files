import mic from "./images/mic.png"
import search from "./images/search.png"
import square from "./images/square.png"
import { Link } from "react-router-dom"
import "./Styling/transfer.css"
import meu from "./images/menu.png"
import TransferContainer from "./transferContainer"
import HomepageFooter from "./homepageFooter"
import bes from "./images/Logo_besoccer_th.png"
import dot from "./images/dot.png"

import { useState } from "react";

export default function Transfers(){
    const [show, setshow] = useState(false)

    function handleshow(){
        setshow((evv)=>{
            return ! evv
            
        })
    }
    return(
        <div className="container">
           
            
           <header>
                <img width={210} src={bes}/>

                <nav className={show ? "slide" : "noslide"}>
                    <Link to='/' >MATCHES</Link>
                    <Link to='/news'>NEWS</Link>
                    <Link to='/explore'>EXPLORE</Link>
                    <Link to='/transfer'  style={{borderBottom: "3px solid green"}}>TRANSFERS</Link>
                </nav>
               
                <div className="more">
                    <Link to='/more'>: MORE</Link>
                </div>

                <div className="input-area">
                    <input placeholder="Search..."/>
                    <img src={mic} className="mic"/>
                    <img src={search} className="search"/>
                </div>

                <div className="icon">
                    <img src={square} className="square"/>
                    <select>
                        <option>ENG</option>
                        <option>ARB</option>
                        <option>CHI</option>
                    </select>
                </div>
                <div className="open">
                    <img src={dot} onClick={handleshow}/>
                 </div>

            </header>
            <div className="transfer-contain">
                <div className="offical">
                    <h1>OFFICIAL-SIGNINGS</h1>
                </div>
                <div className="latest">
                    <h1>Latest Transfers</h1>
                    <img src={meu}/>
                </div>
                <div className="trensfer-arr">
                        <TransferContainer/>
                </div>

                <HomepageFooter/>
            </div>
        </div>
    )
}