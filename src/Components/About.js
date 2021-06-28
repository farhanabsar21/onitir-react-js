import React from 'react';
import teamImg from "../assets/image-team.png"
import Circle from 'react-circle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faGlobe } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    return (
        <section className="about-container">
            <div className="container about-container-content d-flex justify-content-center align-items-center">
                <div className="container row">
                    <div className="col-md-6 p-2">
                        <img src={teamImg} alt="team-work" />
                    </div>
                    <div className="col-md-6">
                        <div className="about-us-header d-flex">
                            <div className="about-line"></div>
                            <h6>About Us</h6>
                        </div>
                        <div className="about-main">
                            <h2 className="mt-2">Onitir help businesses elevate their value.</h2>
                            <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate laudantium aliquid magnam enim pariatur maiores, ut rem odio perspiciatis impedit sunt non, illo iste inventore possimus. Assumenda et magnam eligendi natus facilis error dolorem voluptas, quasi reiciendis laborum possimus quia.</p>
                        </div>

                        {/* first progress section */}
                        <div className="about-progress">
                            <div className="d-flex justify-content-evenly align-items-center">
                                <div className="progress-container p-2">
                                    <Circle
                                        size={100}
                                        progress={80}
                                        progressColor="#ffad33"
                                        showPercentage={false}
                                        showPercentageSymbol={false}
                                    />
                                    <span className="award-icon"><FontAwesomeIcon icon={faAward} /></span>
                                </div>
                                <div className="p-2">
                                    <h2>32+</h2>
                                </div>
                                <div className="progress-main-content p-2">
                                    <h5>Years of experience</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illum repellendus blanditiis repudiandae, vero eius.</p>
                                </div>
                            </div>
                        </div>
                        {/* second progress section */}
                        <div className="about-progress">
                            <div className="d-flex justify-content-evenly align-items-center">
                                <div className="progress-container p-2">
                                    <Circle
                                        size={100}
                                        progress={70}
                                        progressColor="#ffad33"
                                        showPercentage={false}
                                        showPercentageSymbol={false}
                                    />
                                    <span className="globe-icon"><FontAwesomeIcon icon={faGlobe} /></span>
                                </div>
                                <div className="p-2">
                                    <h2>99+</h2>
                                </div>
                                <div className="progress-main-content p-2">
                                    <h5>Project done together</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illum repellendus blanditiis repudiandae, vero eius.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;