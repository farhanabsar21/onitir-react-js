import React from 'react';
import bg2 from "../assets/bg2.jpg"
import bg4 from "../assets/bg4.jpg"
import bg5 from "../assets/bg5.jpg"
const Footer = () => {
    return (
        <section className="footer-main d-flex justify-content-centers align-items-center">
            <div className="footer-contents">
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-4 footer-items">
                                <h5>company</h5>
                                <div>
                                    <a href="/">about</a>
                                    <a href="/">leadership</a>
                                    <a href="/">blog</a>
                                    <a href="/">careers</a>
                                    <a href="/">referral program</a>
                                    <a href="/">press</a>
                                    <a href="/">legal</a>
                                </div>
                            </div>
                            <div className="col-md-4 footer-items">
                            <h5>community</h5>
                                <div>
                                    <a href="/">about</a>
                                    <a href="/">leadership</a>
                                    <a href="/">blog</a>
                                    <a href="/">careers</a>
                                    <a href="/">referral program</a>
                                    <a href="/">press</a>
                                    <a href="/">legal</a>
                                </div>
                            </div>
                            <div className="col-md-4 footer-items">
                            <h5>community</h5>
                                <div>
                                    <a href="/">about</a>
                                    <a href="/">leadership</a>
                                    <a href="/">blog</a>
                                    <a href="/">careers</a>
                                    <a href="/">referral program</a>
                                    <a href="/">press</a>
                                    <a href="/">legal</a>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 footer-news-feed">
                        <h5>News feeds</h5>
                        <div className="footer-news-info d-flex pb-1 pt-3">
                            <img src={bg2} alt="bg-2" />
                            <div className="padding">
                                <h6>14 may 2021</h6>
                                <h4>managing partner along with senior consuls</h4>
                            </div>
                        </div>
                        <div className="footer-news-info d-flex pb-1 pt-3">
                            <img src={bg4} alt="bg-4" />
                            <div className="padding">
                                <h6>14 may 2021</h6>
                                <h4>managing partner along with senior consuls</h4>
                            </div>
                        </div>
                        <div className="footer-news-info d-flex pb-1 pt-3">
                            <img src={bg5} alt="bg-5" />
                            <div className="padding">
                                <h6>14 may 2021</h6>
                                <h4>managing partner along with senior consuls</h4>
                            </div>
                        </div>
                    </div>
                </div>
                {/* copyright */}
                <div className="copyright d-flex justify-content-between py-5">
                    <p>Copyright By @onitir - 2021</p>
                    <p>Designed By onitir.com</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;