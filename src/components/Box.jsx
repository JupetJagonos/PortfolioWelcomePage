// import React from 'react';
import PropTypes from 'prop-types'; 

export const Box = ({ className, children }) => {
    return (
        <div className={`box ${className}`}>
            {children}
        </div>
    );
};

//  PropTypes validation
Box.propTypes = {
    className: PropTypes.string, 
    children: PropTypes.node.isRequired, 
};