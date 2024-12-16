// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Footer.css'; // Optional styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Almost Pedro Creatives. All Rights Reserved.</p>
                <div className="footer-links">
                    <a href="https://www.linkedin.com/in/jupet-jagonos-digitalcreator/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/JupetJagonos" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://almostpedrobyjupetjagonos.squarespace.com/" target="_blank" rel="noopener noreferrer">Creative Portfolio</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
