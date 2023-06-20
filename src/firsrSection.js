import news1 from "./images/news1.jpg"
import news2 from "./images/news2.jpg"
import news3 from "./images/news3.jpg"
import news1mg from "./images/newsimg.jpg"
export default function FirstSection(){
    return(
        <div className="firstSection-container">
            <div className="first-tin">

                <div className="left-tin">
                    <img src={news1mg}/>

                    <div className="writing">
                        <h3>LA LIGA</h3>
                        <h1>Europe's team of the week</h1>
                        <h4>1 hour ago 62,7k</h4>
                        <h2>BeSoccer brings you the best eleven of each day of the big European leagues: Bundesliga, Serie A, Premier League, Ligue 1 and La Liga. A list of all the professionals who are performing at their best in Europe.</h2>
                    </div>
                </div>

                <div className="right-tins">
                    <div className="right-tins-box">
                        <img src={news2}/>
                        <div className="dort">
                            <h1>B. DORTMUND - MAINZ 05</h1>
                            <h4 className="p">Dortmund and Bayern, all or nothing: what results do each need to win the title?</h4>
                            <h2>4 minutes ago 75k</h2>
                        </div>

                    </div>

                    <div className="right-tins-box">
                        <img src={news1}/>
                        <div className="dort">
                            <h1>B. DORTMUND - MAINZ 05</h1>
                            <h4 className="p">Dortmund and Bayern, all or nothing: what results do each need to win the title?</h4>
                            <h2>4 minutes ago 75k</h2>
                        </div>

                    </div>

                    <div className="right-tins-box">
                        <img src={news3}/>
                        <div className="dort">
                            <h1>B. DORTMUND - MAINZ 05</h1>
                            <h4 className="p">Dortmund and Bayern, all or nothing: what results do each need to win the title?</h4>
                            <h2>4 minutes ago 75k</h2>
                        </div>

                    </div>

                    <div className="right-tins-box">
                        <img src={news2}/>
                        <div className="dort">
                            <h1>B. DORTMUND - MAINZ 05</h1>
                            <h4 className="p">Dortmund and Bayern, all or nothing: what results do each need to win the title?</h4>
                            <h2>4 minutes ago 75k</h2>
                        </div>

                    </div>
                </div>

            </div>

           
        </div>
    )
}