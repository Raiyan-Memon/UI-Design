import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Typewriter from "typewriter-effect";
import myImage from './images/Raiyan.png';
import myResume from './resume/resume.pdf';
import "./style/home.css"

const home = () => {
    return (
        <div className='home-page'>
            <Zoom top cascade>
                <img src={myImage} className="myimage" alt="logo" />
                <div className='mydetails'>
                    <h2>Hello There, </h2>
                    <h2>I'm <span className='myname'>Raiyan Memon, </span></h2>
                    <p>I am a <span className='role'><Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("Full Stack Developer")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString("Frontend Developer")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString("Backend Developer")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString("Web Developer")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString("Full Stack Developer")
                                .start()
                        }}
                    /></span></p>
                    <div className='logo'>
                        <ul>
                            <a href='https://www.linkedin.com/in/raiyan-memon/' target='_blank'><li className="social-logo" ><ion-icon name="logo-linkedin"></ion-icon></li></a>
                            <a href='https://github.com/Raiyan-Memon' target='_blank'><li className="social-logo"><ion-icon name="logo-github"></ion-icon></li></a>
                            <a href='//www.google.com' target='_blank'><li className="social-logo"><ion-icon name="logo-gitlab"></ion-icon></li></a>
                            <a href='//www.google.com' target='_blank'><li className="social-logo"><ion-icon name="logo-instagram"></ion-icon></li></a>
                            <a href='//www.google.com' target='_blank'><li className="social-logo"><ion-icon name="logo-linkedin"></ion-icon></li></a>
                        </ul>
                    </div>
                    {/* <a download="Raiyan's Resume" href={myResume} className="">download</a> */}
                </div>
            </Zoom >
            <div className='scroll'>
                <ul>
                    <li>Scroll</li>
                    <li><ion-icon name="chevron-down-outline"></ion-icon></li>
                </ul>
            </div>
        </div >

    )
}

export default home
