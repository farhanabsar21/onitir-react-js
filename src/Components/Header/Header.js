import React from 'react';
import SubNav from './SubNav';
import MainNav from './MainNav';
import HeaderContent from './HeaderContent';

const Header = () => {
    return (
        <div className="Header">
            <div className="container">
                <SubNav />
                <MainNav/>
                <HeaderContent/>
            </div>
        </div>
    );
};

export default Header;