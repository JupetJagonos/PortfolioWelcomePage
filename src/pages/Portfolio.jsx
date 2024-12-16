// eslint-disable-next-line no-unused-vars
import React from 'react';
// import line1 from './img/line-1.svg'; // Ensure the correct path for the line graphic
// import line2 from './img/line-2.svg';
// import line3 from './img/line-3.svg';
// import line4 from './img/line-4.svg';
// import maskGroup from './img/mask-group.svg'; // Ensure the correct path for the mask graphic
import '@/Portfolio.css';

export const Portfolio = () => {
    return (
        <div className="portfolio-container" style={{ paddingTop: '102px' }}>


         <img className="about-me-graphic" src="/public/Aboutme.svg" alt="About Me" style={{ width: '100%', height: 'auto' }} />
            

            <div className="portfolio-content">
                <p className="creative-writing">
                    we don’t count the could’ve been’s<br />
                    but we can start from there<br /><br />
                    we could be defined,<br />with infinite possibilities<br /><br />
                    we don’t stop because the externals are insecure.<br />
                    we liberate who touches our light<br /><br />
                    almost, magical.<br />we almost made it<br />
                    either way<br />it represents us
                </p>


                <div className="ellipse"></div>
                <div className="ellipse-2"></div>
                <div className="ellipse-3"></div>

                <div className="portfolio-wip">
                    portfolio<br />work in progress
                </div>
                
                <div className="skills-group">
                <div className="skills-box">
                <div className="skills group">skilss</div>
                <div className="skills-container" />
                <div className="skills-container2" />
                <div className="skills-container3" />
                <div className="skills-container4" />
                <div className="skills-container5" />
                <div className="skills-container6" />
                <div className="skills-container7" />
                <div className="skills-container8" />
                </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;