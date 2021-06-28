import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faBehance, faYoutube, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import logoAlt from "../assets/logo-alt.png";

const SocialMedia = () => {
    return (
        <section className="social-media d-flex justify-content-center align-items-center">
            <div className="media-container d-flex justify-content-between align-items-center">
                <div>
                    <img src={logoAlt} alt="alt" />
                </div>
                <div>
                    <div className="social-icon">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </div>
                    <div className="social-icon">
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <div className="social-icon">
                        <FontAwesomeIcon icon={faBehance} />
                    </div>
                    <div className="social-icon">
                        <FontAwesomeIcon icon={faYoutube} />
                    </div>
                    <div className="social-icon">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialMedia;