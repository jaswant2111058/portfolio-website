import './navbar.css'

import { AiOutlineBars,AiOutlineClose } from 'react-icons/ai'
const  Navbar =()=>{
    
      
        return(
                <>
        
        <div className="navbar">
        <div className='navBtn' onClick={()=> {document.getElementById('nav2').style.height='250px'}} ><AiOutlineBars/></div>
        <div className="nav1">
            <p>HOME</p>
            <p>PROJECT</p>
            <p>MASSAGE ME</p>
            <p>CHAT BOAT</p>
            <p>ADMIN LOGIN</p>
        </div>
        <div className="nav2" id='nav2'>
            <h3><AiOutlineClose onClick={()=>{document.getElementById('nav2').style.height='0px'}}/></h3> 
            <p> HOME</p>
            <p>PROJECT</p>
            <p>MASSAGE ME</p>
            <p>CHAT BOAT</p>
            <p>ADMIN LOGIN</p>
        </div>
        </div>


                </>
            )
}
export default Navbar