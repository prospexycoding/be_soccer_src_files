import premierLogo from "./images/premier league.png"
import bundesliga from "./images/bundesliga.png"
import seria from "./images/seria a.png"
import segunda from "./images/segunda.png"
import laligalogo from "./images/laligalogo.png"
import mancity from "./images/mancity.png"
import madrid from "./images/madrid.png"
import bayern from "./images/bayern.png"
import wolves from "./images/wolves.png"
import everton from "./images/everton.png"
import arsenal from "./images/aresenal.png"
import liverpool from "./images/liverpool.png"
import totth from "./images/tottenham.png"
import chelsea from "./images/chelsea.png"
import manu from "./images/man u.png"
import NationsContainer from "./nationscontainer"



export default function ExploreMain(){
    return(
        <div className="explore-container">
{/* first */}
            <div className="the">
              <div className="standout-box">
                  <h1>STANDOUT</h1>

                  <div className="round">
                      <img src={premierLogo}/>
                      <h3>PREMIER LEAGUE</h3>
                  </div>
                  <div className="round">
                      <img src={bundesliga}/>
                      <h3>BUNDESLIGA</h3>
                  </div>
                  <div className="round">
                      <img src={seria}/>
                      <h3>SERIA A</h3>
                  </div>
                  <div className="round">
                      <img src={segunda}/>
                      <h3>SEGUNDA</h3>
                  </div>
                  <div className="round">
                      <img src={laligalogo}/>
                      <h3>LALIGA</h3>
                  </div>
               </div>
{/* second */}
               <div className="standout-box">

                  <div className="round">
                      <img src={mancity}/>
                      <h3>MAN CITY</h3>
                  </div>
                  <div className="round">
                      <img src={madrid}/>
                      <h3>MADRID</h3>
                  </div>
                  <div className="round">
                      <img src={bayern}/>
                      <h3>BAYERN</h3>
                  </div>
                  <div className="round">
                      <img src={wolves}/>
                      <h3>WOLVES</h3>
                  </div>
                  <div className="round">
                      <img src={totth}/>
                      <h3>TOTTENHEM</h3>
                  </div>
               </div>
{/* third */}
               <div className="standout-box">

                  <div className="round">
                      <img src={liverpool}/>
                      <h3>LIVERPOOL</h3>
                  </div>
                  <div className="round">
                      <img src={everton}/>
                      <h3>EVERTON</h3>
                  </div>
                  <div className="round">
                      <img src={arsenal}/>
                      <h3>ARSENAL</h3>
                  </div>
                  <div className="round">
                      <img src={chelsea}/>
                      <h3>CHELSEA</h3>
                  </div>
                  <div className="round">
                      <img src={manu}/>
                      <h3>MAN.U</h3>
                  </div>
               </div>


            </div>

            <div className="iss">
               <NationsContainer/>
            </div>


          

        </div>
    )
}