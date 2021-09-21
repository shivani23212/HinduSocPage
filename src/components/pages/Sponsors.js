import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';
import './Sponsors.css';

function Sponsors() {
    return (
        <>
            <h1 className="sponsors">OUR SPONSORS</h1>
            <div className="sponsors-cards-container">
            <CardItem src="images/image-1-logo.jpg"
                text="Discover the story behind our society"
                path="/who-we-are" />

            <CardItem src="images/image-1-logo.jpg"
                text="Discover the story behind our society"
                path="/who-we-are" />

            <CardItem src="images/image-1-logo.jpg"
                text="Discover the story behind our society"
                path="/who-we-are" />
                
            </div>
        </>
        )
}

export default Sponsors;