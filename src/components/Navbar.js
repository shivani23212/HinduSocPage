import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import {Button} from "./Button";
import './Navbar.css'; 

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const updateClick = () => {setClick(!click);}
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {setButton(true);}
    };

    useEffect( ()=> {       // runs when component is first initialised (when page first loaded) 
        showButton();
    }, []);

    window.addEventListener('resize', showButton);


    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                   <span ><i className="fa fa-om"></i> WARWICK HINDU SOCIETY</span>
                </Link>
                <div className="menu-icon"> {/* hamburger menu*/}
                    <i onClick={updateClick} className={click ? "fa fa-times": "fa fa-bars"}></i>
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}> {/* moves nav menu*/}
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/who-we-are" className="nav-links" onClick={closeMobileMenu}>
                            Who We Are
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/events" className="nav-links" onClick={closeMobileMenu}>
                            Our Events
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/join-us" className="nav-links-mobile" onClick={closeMobileMenu}>
                            Join Us
                        </Link>
                    </li>
                </ul>
                {button && <Link to="/join-us"> <Button buttonStyle="btn--outline">JOIN US</Button></Link> } {/* && represents 'when true' */}
            </div>
        </nav>
        </>
    )
}

export default Navbar;