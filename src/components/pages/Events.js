import React from 'react';
import '../../App.css';
import './Events.css';
import comingSoonImg from "../../images/coming-soon.png";

function Events() {
    return (
        <>
            <h1 className="events">EVENTS AND SOCIALS</h1>
            <div className="image-container">
                <img src={comingSoonImg} alt="coming soon image" className="coming-soon-img" />
            </div>
        </>
    )
}

export default Events;