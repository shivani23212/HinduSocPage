import React from "react";
import "./Button.css";
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline']; // css classes that get decided depending on promps passed in

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) =>
 {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        // <Link to="./join-us" className="btn-mobile">
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
                >
                {children} {/* display whatever passed into 'children' parameter */}
            </button>
        /* </Link> */
    )
};

/* exports Button component with specified promps. eg if a button style was
specified then use this buttonStyle from the STYLES arr, else
 include style 0 from the arr */