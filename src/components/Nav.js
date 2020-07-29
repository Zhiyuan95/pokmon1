import React from "react";
import './Nav.css'
import {NavLink} from "react-router-dom";

function Navbar() {
    return(
        <>
            <ul>
                <li><NavLink className='LinkOne' to="/" exactClassName='active'>Empty </NavLink></li>
                <li><NavLink className='LinkTwo' to="HomePage" exactClassName='active'>Homepage </NavLink></li>
                <li><NavLink className='LinkThree' to="Video" exactClassName='active'>Video </NavLink></li>
            </ul>
        </>

    );

}

export default Navbar