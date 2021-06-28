import React from 'react';

const SubNav = () => {
    return (
        <nav className="sub-navbar d-flex justify-content-between py-4">
            <div className="sub-navbar-info d-flex p-1 justify-content-between">
                <p>INFO@WEBMAIL.COM</p>
                <p className="ml-2">+984 875 985 85 78 1</p>
            </div>
            <div className="social-container">
                <ul>
                    <li>FB</li>
                    <li>TW</li>
                    <li>BE</li>
                    <li>YU</li>
                    <li>LI</li>
                </ul>
            </div>
        </nav>
    );
};

export default SubNav;