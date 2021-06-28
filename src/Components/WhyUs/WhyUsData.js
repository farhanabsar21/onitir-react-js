import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faCog, faHeadphonesAlt } from '@fortawesome/free-solid-svg-icons'
import boyCircle from "../../assets/boy-circle.png"
const WhyUsData = () => {
    return (
        <div className="row">
            <div className="col-md-4">
                <div className="left-service-data">
                    <h6><FontAwesomeIcon icon={faFolder} /> unlimited layout</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="left-service-data">
                    <h6><FontAwesomeIcon icon={faCog} /> easy to customize</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="left-service-data">
                    <h6><FontAwesomeIcon icon={faHeadphonesAlt} /> 24/7 online support</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className="col-md-4 why-us-img">
                <img src={boyCircle} alt="boy-circle" />
            </div>
            <div className="col-md-4">
                <div className="right-service-data">
                    <h6><FontAwesomeIcon icon={faFolder} /> unlimited layout</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="right-service-data">
                    <h6><FontAwesomeIcon icon={faCog} /> easy to customize</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="right-service-data">
                    <h6><FontAwesomeIcon icon={faHeadphonesAlt} /> 24/7 online support</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyUsData;