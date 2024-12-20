import homePic from "../pictures/home.png"
import aboutPic from "../pictures/information.png"
import codePic from "../pictures/coding.png"
import projectPic from "../pictures/layers.png"
import photoPic from "../pictures/photography.png"


function Card() {
    return(
        <div className="card">
            <div className="sub-card">
            </div>
            <div className="sub-card">
                <div className="ed-exp">
                    <h3 id="coding-notes">PROJECTS</h3>
                    <h3 id="programming">PROGRAMMING</h3>
                </div>
                <div className="parent-container">
                    <div className="container">
                        Comming Soon!
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