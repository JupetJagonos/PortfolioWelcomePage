// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

export const LogoText = ({ color }) => { // Receive color as prop
    const [isHovered, setIsHovered] = useState(false); // State to manage hover state

    return (
        <div 
            className="logoText" 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)} // Handle hover events
            style={{ color: color }} // Apply the color to the text
        >
            <div className="text-wrapper">
                {isHovered ? '.portfolio' : 'almost'} {/* Conditional rendering based on hover state */}
            </div>
        </div>
    );
};

// PropTypes validation
LogoText.propTypes = {
    color: PropTypes.string.isRequired, 
};