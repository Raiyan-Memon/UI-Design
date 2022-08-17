import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Typewriter from "typewriter-effect";
import myImage from './images/Raiyan.png';
import "./style/home.css"

const home = () => {
    return (
        <div className='home-page'>
            <Zoom top cascade>
                <img src={myImage} className="myimage" alt="logo" />
                <div className='mydetails'>
                    <h3>Hello There, </h3>
                    <h3>I'm <span className='myname'>Raiyan Memon, </span></h3>
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
                                .start()
                        }}
                    /></span></p>
                    <div className='logo'>
                        <ul>
                            <li className="social-logo"><ion-icon name="logo-instagram"></ion-icon></li>
                            <li className="social-logo"><ion-icon name="logo-linkedin"></ion-icon></li>
                            <li className="social-logo"><ion-icon name="logo-linkedin"></ion-icon></li>
                            <li className="social-logo"><ion-icon name="logo-linkedin"></ion-icon></li>
                            <li className="social-logo"><ion-icon name="logo-linkedin"></ion-icon></li>
                        </ul>~
                    </div>
                </div>

            </Zoom>
            <div className='scroll'>
                <ul>
                    <li>Scroll</li>
                    <li><ion-icon name="chevron-down-outline"></ion-icon></li>
                </ul>
            </div>
        </div>

    )
}

export default home
