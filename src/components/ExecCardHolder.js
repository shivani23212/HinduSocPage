import React from "react";
import ExecCard from "./ExecCard";
import './ExecCard.css';
import rangoliDesign from "../images/rangoli.png"

function ExecCardHolder() {
    return (
        <div className="exec__card__holder__container">
            <div className="exec__card__holder">
                <div className="left"><ExecCard name="Co-President: Niraali"/></div>
                <div className="rangoli-container"><img src={rangoliDesign} alt="rangoli drawing" className="rangoli-design" /></div>

                <div className="rangoli-container"><img src={rangoliDesign} alt="rangoli drawing" className="rangoli-design" /></div>
                <div className="right"><ExecCard name="Co-President: Riana"/></div>

                <div className="left"><ExecCard name="Secretary: Ami"/></div>
                <div className="rangoli-container"><img src={rangoliDesign} alt="rangoli drawing" className="rangoli-design" /></div>

                <div className="rangoli-container"><img src={rangoliDesign} alt="rangoli drawing" className="rangoli-design" /></div>
                <div className="right"><ExecCard name="Treasurer: Raam"/></div>

                <div className="left"><ExecCard name="Learning Co-ordinator: Shivani"/></div>
                <div className="rangoli-container"><img src={rangoliDesign} alt="rangoli drawing" className="rangoli-design" /></div>

                <div className="rangoli-container"><img src={rangoliDesign} alt="rangoli drawing" className="rangoli-design" /></div>
                <div className="right"><ExecCard name="Sewa Co-ordinator: Vid"/></div>

                <div className="left"><ExecCard name="Event Co-ordinator: Liam"/></div>
                <div className="rangoli-container"><img src={rangoliDesign} alt="rangoli drawing" className="rangoli-design" /></div>

                <div className="rangoli-container"><img src={rangoliDesign} alt="rangoli drawing" className="rangoli-design" /></div>
                <div className="right"><ExecCard name="Event Co-ordinator: Rani"/></div>

                <div className="left"><ExecCard name="Media Co-ordinator: Nidhi"/></div>
                <div className="rangoli-container"><img src={rangoliDesign} alt="rangoli drawing" className="rangoli-design" /></div>

                <div className="rangoli-container"><img src={rangoliDesign} alt="rangoli drawing" className="rangoli-design" /></div>
                <div className="right"><ExecCard name="Media Co-ordinator: Gaya"/></div>

                <div className="left"><ExecCard name="Sports Co-ordinator: Rikhil"/></div>
                <div className="rangoli-container"><img src={rangoliDesign} alt="rangoli drawing" className="rangoli-design" /></div>

                <div className="rangoli-container"><img src={rangoliDesign} alt="rangoli drawing" className="rangoli-design" /></div>
                <div className="right"><ExecCard name="Sports Co-ordinator: Keri"/></div>
            </div>
        </div>
    )
}

export default ExecCardHolder;