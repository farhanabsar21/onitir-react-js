import React from 'react';
import logo from "../../assets/logo.png";
import cornerYellow from "../../assets/corner-yellow.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

const MainNav = () => {
    return (
        <nav className="main-nav py-2 px-5 mt-4 d-flex justify-content-between align-items-center">
            <div className="menu-items d-flex justify-content-between align-items-center">
                <div className="menu-logo">
                    <img src={logo} alt="onitir-default" />
                </div>
                <div className="item-info">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Pages</li>
                        <li>News</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div className="main-get-quote d-flex justify-content-between">
                <div className="get-quote-btn">
                    <img src={cornerYellow} alt="corner-icon" />
                    <button>Get a quote</button>
                </div>
                <div className="get-quote-toggle">
                    <button><FontAwesomeIcon icon={faEllipsisV} /></button>
                </div>
            </div>
        </nav>
    );
};

export default MainNav;