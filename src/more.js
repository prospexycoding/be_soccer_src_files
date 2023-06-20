import mic from "./images/mic.png"
import search from "./images/search.png"
import square from "./images/square.png"
import { Link } from "react-router-dom"
import "./Styling/more.css"
import play from "./images/playstore.png"
import bes from "./images/Logo_besoccer_th.png"
import dot from "./images/dot.png"
import HomepageFooter from "./homepageFooter"

export default function More(){
    return(
        <div className="container">

            < div className="open">
                <img src={dot}/>
            </div>
           <header>
           <img width={210} src={bes}/>

                <nav>
                    <Link to='/'>MATCHES</Link>
                    <Link to='/news'>NEWS</Link>
                    <Link to='/explore'>EXPLORE</Link>
                    <Link to='/transfer'>TRANSFERS</Link>
                </nav>

                <div className="more">
                    <Link to='/more' style={{borderBottom: "3px solid green"}}>: MORE</Link>
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
            </header>

            <div className="more-main">
                <h1>Update On Playstore</h1>
                <img src={play}/>
            </div>

           

            
            <HomepageFooter/>
        </div>
    )
}