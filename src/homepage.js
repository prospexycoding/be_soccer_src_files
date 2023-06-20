import { Link } from "react-router-dom";
import mic from "./images/mic.png"
import search from "./images/search.png"
import square from "./images/square.png"
import "./Styling/homepage.css"
import DateContainer from "./datecontainer";
import Live from "./live";
import dot from "./images/dot.png"
import HeadsContainer from "./headscontainer";
import egland from "./images/egland.png"
import FixturesContainer from "./fiturescontainer";
import LaligaFixturesContainer from "./laligacontainer";
import laliga from "./images/laliga.png"
import HomepageFooter from "./homepageFooter";
import bes from "./images/Logo_besoccer_th.png"

import { useState } from "react";


export default function Homepage(){

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
                    <Link to='/' style={{borderBottom: "3px solid green"}}>MATCHES</Link>
                    <Link to='/news'>NEWS</Link>
                    <Link to='/explore'>EXPLORE</Link>
                    <Link to='/transfer'>TRANSFERS</Link>
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
            <div className="homepage-main">

                <DateContainer/>
                <Live/>
                <div className="date">
                        <h3>Return To Todays Match</h3>
                        <h4 className="h4-input">See Other Dates 
                            <input type="date"/>
                        </h4>

                </div>
                <HeadsContainer/>

                <div className="premier-league-container">
                    <div className="premier-league">
                        <h1 className="premier-h1"><img src={egland}/> PREMIER LEAGUE</h1>
                        <img src={dot} className="dot"/>
                    </div>
                    <FixturesContainer/>

                </div>

                <div className="premier-league-container">
                    <div className="premier-league">
                        <h1 className="premier-h1"><img src={laliga}/>LALIGA</h1>
                        <img src={dot} className="dot"/>
                    </div>
                    <LaligaFixturesContainer/>
                </div>

                <HomepageFooter/>

            </div>
        </div>
          
    )
}