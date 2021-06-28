import React, { useEffect, useState } from 'react';
import serviceData from "../../fakeData/services.json";
import Servicedata from './Servicedata';
import boyBlack from "../../assets/boy-black.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import WhyUs from '../WhyUs/WhyUs';
import WhyUsData from '../WhyUs/WhyUsData';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=> {
        setServices(serviceData)
    }, [])
    return (
        <div className="services-container p-2">
            <div className="container service-main-content d-flex justify-content-center align-items-center">
                <div className="container-data">
                    <div className="service-main-header pb-5 text-center">
                        <div>
                            <h6>services</h6>
                        </div>
                        <div>
                            <h3>What we do</h3>
                        </div>
                    </div>
                    {/* service data */}
                    <div className="row pb-5">
                        {services.map((service, index) => <Servicedata service={service} key={index} index={index}></Servicedata>)}
                    </div>
                    {/* estimate section */}
                    <div className="service-get-quote mt-5 p-5">
                        <div className="row container">
                            <div className="col-md-5">
                                <img src={boyBlack} alt="black-boy" className="img-fluid"/>
                            </div>
                            <div className="col-md-7 mt-5">
                                <div className="estimate-line">
                                    <div className="estimate-line-border"></div>
                                    <h5>get a quote</h5>
                                </div>
                                <div>
                                    <h2>we are here for your estimate price</h2>
                                </div>
                                <div>
                                    <button><FontAwesomeIcon icon={faArrowRight} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* why us section */}
                    <WhyUs/>
                    <WhyUsData/>
                </div>
            </div>
        </div>
    );
};

export default Services;