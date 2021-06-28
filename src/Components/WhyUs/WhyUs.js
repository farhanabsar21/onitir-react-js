import React from 'react';
import cornerBlue from "../../assets/corner-blue.svg";

const WhyUs = () => {
    return (
        <section className="py-4 mt-5">
            <div className="whyus-header d-flex justify-content-between align-items-center">
                <div>
                    <div>
                        <div className="choose-border-line"></div>
                        <h6>why us</h6>
                    </div>
                    <div>
                        <h2>why choose us</h2>
                    </div>
                </div>
                <div className="whyus-header-btn">
                    <img src={cornerBlue} alt="corner-blue" />
                    <button>learn more</button>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;