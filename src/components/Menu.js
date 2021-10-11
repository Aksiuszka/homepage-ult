import React from 'react';
import './Menu.css';
import Logo from './Logo';
import Greeting from './Greetings';
import { FaGithub } from 'react-icons/fa'
import { Link } from "react-router-dom";

function Menu() {
    return (
        <div className="menu-container">
            <div className="logo-wrapper">
                <div className="logo-inner-wrapper">
                
            <Logo/>
            </div>
            <Greeting/>
            </div>
            <div className="btns">
            <a target="_blank" href="https://github.com/Aksiuszka"><button className="btn" id="btn-github" type="button"><FaGithub/></button></a>
            <Link to="/personalprojects"> <button className="btn" type="button">personal projects</button></Link>
            <Link to="/commercialprojects"><button className="btn" type="button">commercial projects</button> </Link>
            <Link to="/aboutme"><button className="btn" type="button">who is Ania?</button></Link>
            </div>
        </div>
    )
}

export default Menu
