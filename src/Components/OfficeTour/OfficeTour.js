import React from 'react';
import CeoCollection from './CeoCollection';

const OfficeTour = () => {
    return (
        <section className="office-tour">
            <div className="row office-video-container">
                <div className="col-md-6 office-tour-back"></div>
                <div className="col-md-6 office-tour-content p-5 d-flex justify-content-center align-items-center">
                    <div className="office-tour-content-width">
                        <div className="intro-content">
                            <div className="intro-border-line"></div>
                            <h6>intro video</h6>
                        </div>
                        <div>
                            <h2>let's make an office tour from here</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque tempore voluptatibus ab placeat reiciendis deleniti optio ea, consectetur autem porro tenetur dignissimos, similique repellat perspiciatis!</p>
                        </div>
                    </div>
                </div>
                <div className="mare-circle"></div>
                <button>play</button>
            </div>
            {/* employee container */}
            <div className="employee-container p-5">
                <CeoCollection />
            </div>
        </section>
    );
};

export default OfficeTour;