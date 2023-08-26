import './projects.css'


const Projects=()=>{
    return(
        <>
        <div className="project" >
            <div className="cove" >
                <h2 id="Project">Projects : </h2>
            </div>
            <div className='projectDisplay'>
                <div className='coatpiece'>
                    <div className='content'>
                    <h3>Coat Piece</h3>
                    <p><b>Description:</b>
                     
                    It is a multiplayer Card Game which played among only 4 players
                    It has 6 screens, 2 for the creating a room space to connecting all four players, 2 four selecting the trump sui, 1 for the playing Card game, 1 for the restart the game After ending 
                    Technologies Used: React, Node JS, WEB Socket (socket.io), HTML, CSS
                    <br></br>Link: 
                    <a href='https://coatpeicebyjassi.onrender.com'> See live</a>
                    <br></br>
                    Git-repo: 
                    <a href='https://github.com/jaswant2111058/Trump_React.js'>Visit</a>
                    </p>
                    </div>
                    <div className='img'>
                    <img className='img1' src='./images/img1.jpg'/>
                    </div>
                    <div className='img'>
                    <img className='img1' src='./images/img2.jpg'/>
                    </div>
                    <div className='img'>
                    <img className='img1' src='./images/img3.jpg'/>
                    </div>
                    <div className='img'>
                    <img className='img1' src='./images/img4.jpg'/>
                    </div>
                </div>
                <br></br>
                <hr></hr>
                <br></br>
                <div className='videochat'>
                    <div className='content'>
                    <h3>video chat</h3>
                    <p><b>Description:</b>
                    It is a Video calling app which can handle 10 request at a time (according to the server).
                    It Create Room, Join room page and a calling space which is based on WEB RTC and uses the FIREBASE for real time communication.
                    Technologies Used: React ,Fire Base, JS, CSS
                    <br></br>Link: 
                    <a href='https://videochatbyjassi.onrender.com'> See live</a>
                    <br></br> Git-Repo:
                   <a href='https://github.com/jaswant2111058/videochat_reactApp'>Visit</a>
                    </p>
                    </div>
                    <div className='img'>
                    <img className='img1' src='./images/img5.jpg'/>
                    </div>
                    <div className='img'>
                    <img className='img1' src='./images/img6.jpg'/>
                    </div>
                    <div className='img'>
                    <img className='img1' src='./images/img7.png'/>
                    </div>
                    <div className='img'>
                    <img className='img1' src='./images/img8.png'/>
                    </div>
                    
                    
                </div>
                    <br></br>
                    <hr></hr>
                    <br></br>
                {/* <div className='chatboats'>
                <div className='content'>
                    <h3>Chat Boat</h3>
                    <p><b>Description:</b>
                    It is a Video calling app which can handle 10 request at a time (according to the server).
                    It Create Room, Join room page and a calling space which is based on WEB RTC and uses the FIREBASE for real time communication.
                    Technologies Used: React ,Fire Base, JS, CSS
                    <br></br>Link: 
                    <a href='https://videochatbyjassi.onrender.com'> See live</a>
                    <br></br> Git-Repo:
                    <a href='https://github.com/jaswant2111058/videochat_reactApp'>Visit</a>
                    </p>
                    </div>
                    <div className='img'>
                    <img className='img1' src='./images/img9.png'/>
                    </div>
                    
                    <div className='img'>
                    <img className='img1' src='./images/img10.png'/>
                    </div>
                    <div className='img'>
                    <img className='img1' src='./images/img11.png'/>
                    </div>
                    <div className='img'>
                    <img className='img1' src='./images/img12.png'/>
                    </div>
                    
                   
               
               
                </div> */}
            </div>
            <br></br>
            
            <br></br>
        </div>

        </>
    )
}
export default Projects;