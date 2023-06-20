import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./homepage"
import News from "./news"
import Explore from "./explore"
import Transfers from "./transfer"
import More from "./more"
import "./Styling/app.css"

export default function App(){
    return(
        <div className="container">
       <BrowserRouter>
             <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="news" element={<News/>}/>
                <Route path="explore" element={<Explore/>}/>
                <Route path="transfer" element={<Transfers/>}/>
                <Route path="more" element={<More/>}/>
             </Routes>
        </BrowserRouter>
        </div>
       
    )
}