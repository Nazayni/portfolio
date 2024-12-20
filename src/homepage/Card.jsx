import profilePic from "../pictures/profilePic.jpg"
import homePic from "../pictures/home.png"
import aboutPic from "../pictures/information.png"
import codePic from "../pictures/coding.png"
import projectPic from "../pictures/layers.png"
import photoPic from "../pictures/photography.png"
import React, { useState } from "react"

function Card() {
    return(
        <div className="card">
            <div className="sub-card">
                <img alt="profile picture" src={profilePic} ></img>
            </div>

            <div className="sub-card">
                <h2>
                    DAVID BAKER<br />
                    A SOFTWARE ENGINEER
                </h2>
                <p>
                    I am a software developer, web developer, and web designer.
                    There are some of my projects in the following links as well
                    as some coding notes. I am passionate about gaming, traveling,
                    and photography! In the links to the right you can know more 
                    about me or even see some of my photos!
                </p>
            </div>

            <div className="sub-card">
                <header>
                    <nav className="nav-bar-button">
                        <div className={`menu-content`}>
                            <a href='index.html'><img alt="profile picture" src={homePic} ></img></a>
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