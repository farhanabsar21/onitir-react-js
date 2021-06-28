import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import person from "../assets/boy-black.png"

const Review = () => {

    return (
        <section className="review-collection">
            <div className="review-container d-flex justify-content-between align-items-center">
                <div>
                    <div className="review-info d-flex justify-content-between p-4">
                        <div className="p-3">
                            <img src={person} alt="person" />
                        </div>
                        <div className="">
                            <div className="star-ratings">
                                <ul>
                                    <li><FontAwesomeIcon icon={faStar} /></li>
                                    <li><FontAwesomeIcon icon={faStar} /></li>
                                    <li><FontAwesomeIcon icon={faStar} /></li>
                                    <li><FontAwesomeIcon icon={faStar} /></li>
                                    <li><FontAwesomeIcon icon={farStar} /></li>
                                </ul>
                            </div>
                            <div className="pt-5 pl-2">
                                <h3><span><FontAwesomeIcon icon={faQuoteLeft} /></span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nemo illum eius magnam quam beatae enim earum quidem hic eos.<FontAwesomeIcon icon={faQuoteRight} /></h3>
                            </div>
                        </div>
                    </div>
                    <div className="review-person">
                        <div className="row">
                            <div className="col-md-4 person-info">
                                <h5>rosanila d. williams</h5>
                                <h6>founder, coexial.co</h6>
                            </div>
                            <div className="col-md-4 person-info" id="personTwo">
                                <h5>rosanila d. williams</h5>
                                <h6>founder, coexial.co</h6>
                            </div>
                            <div className="col-md-4 person-info">
                                <h5>rosanila d. williams</h5>
                                <h6>founder, coexial.co</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="large-quote"><FontAwesomeIcon icon={faQuoteRight} /></div>
        </section>
    );
};

export default Review;