import './navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { AiOutlineBars,AiOutlineClose } from 'react-icons/ai'
const  Navbar =()=>{
    
      
        return(
                <>
        
        <div className="navbar" id="navbar">
        <div className='navBtn' onClick={()=> {document.getElementById('nav2').style.height='220px'}} ><AiOutlineBars/></div>
        <div className="nav1">
            <AnchorLink id='ancher1' href="#navbar">HOME</AnchorLink>
            <AnchorLink id='ancher1' href="#Project"> PROJECT</AnchorLink>
            <AnchorLink id='ancher1' href="#contact"> MASSAGE ME</AnchorLink>
            <AnchorLink id='ancher1' href="#chatbot"> CHAT BOT</AnchorLink>
            <p  id='ancher1' onClick={()=>{window.alert("Your are Not Admin")}}>ADMIN LOGIN</p>
        </div>
        <div className="nav2" id='nav2'>
            <h3><AiOutlineClose onClick={()=>{document.getElementById('nav2').style.height='0px'}}/></h3> 
            <AnchorLink id='ancher' href="#navbar">HOME</AnchorLink>
            <AnchorLink id='ancher' href="#Project"> PROJECT</AnchorLink>
            <AnchorLink id='ancher' href="#contact"> MASSAGE ME</AnchorLink>
            <AnchorLink id='ancher' href="#chatbot"> CHAT BOT</AnchorLink>
            <p id='ancher' onClick={()=>{window.alert("Your are Not Admin")}}>ADMIN LOGIN</p>
        </div>
        </div>
        
            </>
            )
}
export default Navbar