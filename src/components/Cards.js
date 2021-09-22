import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import hinduSocLogo from "../images/image-1-logo.jpg";
import diyas from "../images/image-2-diyas.jpg";
import execNames from "../images/image-3-exec.PNG";
import NHSFLogo from "../images/NHSF.png";
import socials from "../images/image-5-socials.jpg";

function Cards() {
    return (
        <div className="cards">
            <h1>Who We Are and What We Do</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src={hinduSocLogo}
                        text="Discover the story behind our society"
                        path="/who-we-are" />

                        <CardItem
                        src={diyas}
                        text="Our current and upcoming socials"
                        path="/events" />
                    </ul>

                    <ul className="cards__items">
                        <CardItem
                        src={execNames}
                        text="Meet our Hindu Soc exec team"
                        path="/our-exec" />

                        <CardItem
                        src={NHSFLogo}
                        text="Find out about the NHSF"
                        path="/sponsors" />

                        <CardItem
                        src={socials}
                        text="Follow us on our social media"
                        path="/socials" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;