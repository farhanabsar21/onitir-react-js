import React from 'react';
import cornerBlue from "../../assets/corner-blue.svg";
import cornerWhite from "../../assets/corner-white.svg";

const HeaderContent = () => {
    return (
        <div className="header-content container row d-flex align-items-center">
            <div className="col-md-7 py-2 px-5">
                <div>
                    <h1>We create perfect brand goods value</h1>
                </div>
                <div className="p-2">
                    <p>Bring your ideas to life with us</p>
                </div>
                <div className="p-2 d-flex">
                    <div className="get-started-btn">
                        <img src={cornerBlue} alt="corner-blue" />
                        <button>Get started now</button>
                    </div>
                    <div className="learn-more-btn">
                        <img src={cornerWhite} alt="corner-blue" />
                        <button>Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderContent;