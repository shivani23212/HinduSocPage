import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
    return (
        <div className="cards">
            <h1>Who We Are and What We Do</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="images/image-1-logo.jpg"
                        text="Discover the story behind our society"
                        // label="introduction"
                        path="/who-we-are" />

                        <CardItem
                        src="images/image-2-diyas.jpg"
                        text="Our current and upcoming socials"
                        // label="introduction"
                        path="/events" />
                    </ul>

                    <ul className="cards__items">
                        <CardItem
                        src="images/image-3-exec.PNG"
                        text="Meet our Hindu Soc exec team"
                        // label="introduction"
                        path="/our-exec" />

                        <CardItem
                        src="images/NHSF.jpg"
                        text="Find out about the NHSF"
                        // label="introduction"
                        path="/sponsors" />

                        <CardItem
                        src="images/image-5-socials.jpg"
                        text="Follow us on our social media"
                        // label="introduction"
                        path="/socials" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;