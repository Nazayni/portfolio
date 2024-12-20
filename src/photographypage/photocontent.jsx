import homePic from "../pictures/home.png"
import aboutPic from "../pictures/information.png"
import codePic from "../pictures/coding.png"
import projectPic from "../pictures/layers.png"
import photoPic from "../pictures/photography.png"
import Photoslot from "../modules/photoslot.jsx"
import * as cars from "../pictures/cars/carsfile.jsx"

function Card() {
    return(
        <div className="card">
            <div className="sub-card"></div>
            <div className="sub-card">
                <div className="ed-exp">
                    <h3 id="coding-notes">PHOTOS</h3>
                    <h3 id="programming">PHOTOGRAPHY</h3>
                </div>
                <div className="parent-container">
                    <div className="container">
                        <Photoslot imageSrc={cars.car1}/>
                        <Photoslot imageSrc={cars.car2}/>
                        <Photoslot imageSrc={cars.car3}/>
                        <Photoslot imageSrc={cars.car4}/>
                        <Photoslot imageSrc={cars.car5}/>
                        <Photoslot imageSrc={cars.car6}/>
                        <Photoslot imageSrc={cars.car7}/>
                        <Photoslot imageSrc={cars.car8}/>
                        <Photoslot imageSrc={cars.car9}/>
                        <Photoslot imageSrc={cars.car10}/>
                        <Photoslot imageSrc={cars.car11}/>
                        <Photoslot imageSrc={cars.car12}/>
                        <Photoslot imageSrc={cars.car13}/>
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