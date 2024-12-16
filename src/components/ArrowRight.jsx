// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const ArrowRight = () => {
    return (
        <Link to="/portfolio" style={{ cursor: 'pointer' }}>
            <img 
                src="/img/arrow.svg" 
                alt="Arrow" 
                style={{ width: '40px', height: '40px' }} 
            />
        </Link>
    );
};

export default ArrowRight;