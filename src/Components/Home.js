import React from 'react';
import About from './About';
import CaseStudy from './CaseStudy';
import Header from './Header/Header';
import OfficeTour from './OfficeTour/OfficeTour';
import Skillset from './Skillset';
import Services from './WeDo/Services';
import Review from './Review';
import Blog from './Blog/Blog';
import SocialMedia from './SocialMedia';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Header/>
            <About/>
            <Services/>
            <OfficeTour/>
            <Skillset/>
            <CaseStudy/>
            <Review/>
            <Blog/>
            <SocialMedia/>
            <Footer/>
        </div>
    );
};

export default Home;