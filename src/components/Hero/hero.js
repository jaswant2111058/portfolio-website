 import './hero.css'
 import Projects from "../Cards/Projects/projects"
 
const Hero=()=>{

        return(
            <>
             <div className="image">
        <img className="dpimg" src="./images/JACK.jpg" alt="img"/>
    </div>
        <div className="midline">
        <h4>WEB DEVLOPER </h4>
    </div>
    <div className="constrain">
        <h1>Jaswant kushwaha</h1>
        <h3>Full Stack Devloper</h3>
        <p>Motivated and aspiring Web Developer seeking an
             internship opportunity to gain practical experience
              and apply acquired knowledge in web development.
               Eager to contribute to a dynamic team, learn
                from experienced professionals, and enhance 
                skills in HTML, CSS, JavaScript, and other web
                 technologies.
                 
        </p>
    </div>
    <hr/>
            <div className='prjt'>
            <Projects/>
            </div>
        
            
            </>
        )





 }

 export default Hero;