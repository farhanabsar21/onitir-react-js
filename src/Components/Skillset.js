import React from 'react';
import cornerBlue from "../assets/corner-blue.svg";
import studyImg from "../assets/study.jpg"
import triangle from "../assets/triangle.svg"

const Skillset = () => {
    return (
        <section className="skillset-container">
            <div className="center-line-btn">
                <div className="skillset-container-btn">
                    <img src={cornerBlue} alt="corner-blue" />
                    <button>hire us now</button>
                </div>
            </div>
            <div className="skillset-main-content d-flex justify-content-center align-items-center">
                <div className="">
                    <div className="skillset-content">
                        <div className="row">
                            <div className="col-md-6 p-5">
                                <div className="skillset-header">
                                    <div className="skillset-border-line"></div>
                                    <h5>skillset</h5>
                                </div>
                                <div>
                                    <h2>check skillsets & manipulation</h2>
                                </div>
                                <div>
                                    <h6 className="mt-4">consulting & marketing</h6>
                                    <div className="progress-info mt-2" id="progressOne">
                                        <div className="progress-bar"></div>
                                    </div>
                                    <h6 className="mt-4">it solution & travelshooting</h6>
                                    <div className="progress-info mt-2" id="progressTwo">
                                        <div className="progress-bar"></div>
                                    </div>
                                    <h6 className="mt-4">uix solution</h6>
                                    <div className="progress-info mt-2" id="progressThree">
                                        <div className="progress-bar"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 skillset-image p-5">
                                <img src={studyImg} alt="study" className="img-fluid"/>
                                <div className="skill-triangle">
                                    <img src={triangle} alt="triangle" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skillset;