import homePic from "../pictures/home.png"
import aboutPic from "../pictures/information.png"
import codePic from "../pictures/coding.png"
import projectPic from "../pictures/layers.png"
import photoPic from "../pictures/photography.png"
import profilePic from "../pictures/me/photo2.JPG"

function Card() {
    return(
        <div className="card">
            <div className="sub-card"></div>
            <div className="sub-card">
                <div className="page-title">
                    <h4 id="coding-notes">ABOUT ME</h4>
                    <h4 id="programming">BIOGRAPHY</h4>
                </div>
                <div className="base-container">
                    <div className="container1">
                        <div className="container2">
                            <div className="container3l">
                                <h1>Education</h1>
                                <div className="para-card">
                                    <h3>Borough of Manhattan Community College</h3>
                                    <p> 
                                        Computer Science - Associate in Science AS.<br/>
                                        Confer Date: Feb 1, 2024
                                    </p>
                                </div>
                                <div className="para-card">
                                    <h3>Hunter College<br/></h3>
                                    <p>
                                        Computer Science - Bachelors of Science BS<br/>
                                        Confer Date: June 13, 2024
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="container2">
                                <img alt="profile picture" src={profilePic} ></img>
                        </div>
                        <div className="container2">
                            <div className="container3r">
                                <h1>Who is David?</h1>
                                <div className="para-card">
                                    <p>
                                        Hey, welcome to my page! I am David Baker, a software engineer and a Cybersecurity beginner.
                                        Everything about computers grabs my interest, ever since I was a kid, it was all I interacted with.
                                        We live in a world where technology is not just a luxury but a necessity. My goal is to create safe, 
                                        reliable programs that bring convenience or entertainment to the community.<br/><br/>

                                        On my page, my goal is to update those who follow me on my travels and to provide for the computer 
                                        science community with notes and modules. It would be great to network and help each other out, so 
                                        you can reach out to me on my instagram @nazayni or e-mail me, davidmbaker233@gmail.com. Let's connect
                                        and create a community together!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sub-card">
                <header>
                    <nav className="nav-bar-button">
                        <div className={`menu-content`}>
                            <a href='main.html'><img alt="profile picture" src={homePic} ></img></a>
                            <a href='about.html'><img alt="profile picture" src={aboutPic} ></img></a>
                            <a href='code.html'><img alt="profile picture" src={codePic} ></img></a>
                            <a href='projects.html'><img alt="profile picture" src={projectPic} ></img></a>
                            <a href='photography.html'><img alt="profile picture" src={photoPic} ></img></a>
                        </div>
                    </nav>
                </header>
            </div>
        </div>
    );
}

export default Card