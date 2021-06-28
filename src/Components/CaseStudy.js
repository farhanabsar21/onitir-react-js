import React from 'react';
import bg1 from "../assets/bg1.jpg"
import bg2 from "../assets/bg2.jpg"
import bg3 from "../assets/bg3.jpg"
import bg4 from "../assets/bg4.jpg"
import bg5 from "../assets/bg5.jpg"

const CaseStudy = () => {
    return (
        <section className="case-study-container d-flex justify-content-center align-items-center">
            <div className="case-study-content">
                <div className="case-study-header text-center mb-4">
                    <h6>portfolio</h6>
                    <h2>case study</h2>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <img src={bg1} alt="bg1" className="img-fluid"/>
                    </div>
                    <div className="col-md-4">
                        <img src={bg2} alt="bg2" className="img-fluid"/>
                    </div>
                    <div className="col-md-4">
                        <img src={bg3} alt="bg3" className="img-fluid"/>
                    </div>
                    <div className="col-md-4">
                        <img src={bg4} alt="bg4" className="img-fluid"/>
                    </div>
                    <div className="col-md-8">
                        <img src={bg5} alt="bg5" className="img-fluid two-row"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudy;