import './projects.css'


const Projects = () => {
    return (
        <>
            <div className="project" >
                <div className="cove" >
                    <h2 id="Project">Projects : </h2>
                </div>
                <div className='projectDisplay'>


                    <div className='videochat'>
                        <div className='content'>
                            <h3>Booking Office</h3>
                            <p>
                                It is a web app Use to book or post events shows
                                and movies. After confirming the payment, it
                                generates a ticket QR Code of the show, which can
                                be verified during entrance of the show by the
                                verification Page of the app.
                                <p>
                                    <p> KEY FEATURES</p>
                                    It uses own storage to store the images at
                                    the server through Multer.
                                    Project Is based on MERN STACK
                                </p>

                                <a href=' https://master.d37qc6pc4ktdml.amplifyapp.com/'> See live</a>
                                <br></br>
                                Git-repo:
                                <a href=' https://github.com/jaswant2111058/eventManegme'>Visit</a>
                            </p>
                        </div>
                        <div className='img'>
                            <img className='img1' src='./images/img5.png' alt="img"/>
                        </div>
                        <div className='img'>
                            <img className='img1' src='./images/img6.png' alt="img"/>
                        </div>
                        <div className='img'>
                            <img className='img1' src='./images/img7.png' alt="img"/>
                        </div>
                        <div className='img'>
                            <img className='img1' src='./images/img8.png' alt="img"/>
                        </div>


                    </div>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <div className='chatboats'>
                        <div className='content'>
                            <h3> Food Order App</h3>
                            <p>
                                Food Order App
                                It is a mobile Application based on react native
                                having 5 screens with signup-login authentication
                                with JWT, and have field specific search-bar and
                                generate QR code of Hashed order ID on placing
                                order which can further verify by the backend
                                <p>TECH USED</p>
                                Mongoose,
                                Express js,
                                React Native,
                                Node js
                                <br></br>Link:
                                <a href=' https://drive.google.com/file/d/1e3dqm5Wr3of8kcaT
                            4f0CcuPtXAaC9AMP/view'> See live</a>
                                <br></br> Git-Repo:
                                <a href='https://github.com/jaswant2111058/foodorder-react-native'>Visit</a>
                            </p>
                        </div>
                        <div className='img'>
                            <img className='img2' src='./images/img12.jpg' alt="img" />
                        </div>
                        <div className='img'>
                            <img className='img2' src='./images/img11.jpg' alt="img" />
                        </div>
                        <div className='img'>
                            <img className='img2' src='./images/img9.jpg' alt="img" />
                        </div>
                        <div className='img'>
                            <img className='img2' src='./images/img10.jpg' alt="img" />
                        </div>
                    </div>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <div className='coatpiece'>
                        <div className='content'>
                            <h3>Coat Piece</h3>
                            <p>
                                It is a multiplayer Card Game which played among only 4 players
                                It has 6 screens, 2 for the creating a room space to connecting all four players, 2 four selecting the trump sui, 1 for the playing Card game, 1 for the restart the game After ending
                                Technologies Used: React, Node JS, WEB Socket (socket.io), HTML, CSS
                                <br></br>
                                <a href='https://coatpeicebyjassi.onrender.com'> See live</a>
                                <br></br>
                                Git-repo:
                                <a href='https://github.com/jaswant2111058/Trump_React.js'>Visit</a>
                            </p>
                        </div>

                        <div className='img'>
                            <img className='img1' src='./images/img1.jpg' alt="img" />
                        </div>
                        <div className='img'>
                            <img className='img1' src='./images/img2.jpg' alt="img" />
                        </div>
                        <div className='img'>
                            <img className='img1' src='./images/img3.jpg' alt="img" />
                        </div>
                        <div className='img'>
                            <img className='img1' src='./images/img4.jpg' alt="img" />
                        </div>
                    </div>
                </div>

                <br></br>
            </div>

        </>
    )
}
export default Projects;