import './connect.css'
import { AiFillGithub,AiFillLinkedin,AiFillInstagram,AiFillMail } from 'react-icons/ai'

const Connect=()=>{
    return(
        <>
        <div className="contact">
            <div className="cover">
                <p>Connect With Me</p>
            </div>
            
            <div className="contactContent">
                <h4>All Social Medial Hendals Are Here</h4>
            </div>
            <button className="btn1">Message Me</button>
        
            <div className="icons">
                <AiFillGithub/>
                <AiFillLinkedin/>
                <AiFillInstagram/>
                <AiFillMail/>
            </div>
           </div>
        

        </>
    )
}
export default Connect;