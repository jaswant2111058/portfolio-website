import './hero.css'
import Projects from "../Cards/Projects/projects"

const Hero = () => {

    return (
        <>
            <div className="image-wrapper">
                <img className="dpimg" src="./images/JACK.jpg" alt="img" />
                <div className="constrain">
                    <h1>Jaswant kushwaha</h1>
                    <h3>Full Stack Developer</h3>
                    <p>Motivated and aspiring Web Developer seeking for
                        batter opportunity to gain practical experience
                        and apply acquired knowledge in web development.
                        Eager to contribute to a dynamic team, learn
                        from experienced professionals, and enhance
                        skills in HTML, CSS, JavaScript, and other web
                        technologies.
                    </p>
                </div>
            </div>
            <div className='prjt'>
                <Projects />
            </div>


        </>
    )





}

export default Hero;