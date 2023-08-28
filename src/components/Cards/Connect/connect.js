import './connect.css'
import { AiFillGithub,AiFillLinkedin,AiFillInstagram,AiFillMail } from 'react-icons/ai'

const Connect=()=>{
    return(
        <>
        
        <div className="contact" id='contact'>
            <div className="cover">
                <p>Connect With Me</p>
            </div>
            
            <div className="contactContent">
                <h4>All Social Medial Hendals Are Here</h4>
            </div>
            <button className="btn1" ><a  className='ancherTag2' href='https://wa.me/+918766263593'>Message Me</a></button>
            <button className="btn1" ><a  className='ancherTag2' href='https://drive.google.com/file/d/1qAS3UsHIjC1QNuhmnkNnjALoiJNrtEwF/view?usp=sharing'>RESUME</a></button>
        
            <div className="icons">
                <a className='ancherTag' href='https://github.com/jaswant2111058'><AiFillGithub/></a>
                <a className='ancherTag' href='https://www.linkedin.com/in/jaswant-kushwaha-037281252/'><AiFillLinkedin/></a>
                <a className='ancherTag' href='https://www.instagram.com/jassi_maurya/'><AiFillInstagram/></a>
                <a className='ancherTag' href='mailto:jkstart0123@gmail.com'><AiFillMail/></a>
            </div>
           </div>

        </>
    )
}
export default Connect;