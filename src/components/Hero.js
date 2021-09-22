import React from 'react';
import "../App.css";
import { Button } from "./Button";
import './Hero.css';
import {Link} from 'react-router-dom';
import video from "../videos/hero-section-video-1.mp4";

function Hero() {
    return (
        <div className="hero-container">
            <video src={video} autoPlay loop muted/>
            <h1>Namaste!</h1>
            <p>Welcome to a home away from home</p>
            <div className="hero-btns">
            
                <Link to="/our-exec">
                    <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>
                    THE EXEC</Button>
                </Link>

                <Link to="/events">
                    <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">EVENTS &#x1FA94;
                    </Button>
                </Link>
            </div>

        </div>
    );
}

export default Hero;
