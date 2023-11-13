import Chatboat from "./Chatboat/chatboat"
import Connect from "./Connect/connect"
import './cards.css'


const Cards =()=>{
    return(
        <div className="cards">
             <Chatboat/>
            <Connect/>
        </div>
    )
}
export default Cards;
