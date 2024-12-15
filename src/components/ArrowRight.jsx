// import React from 'react';

// Basic arrow representation using a styled div
export const ArrowRight = () => {
    return (
        <div
            style={{
                cursor: 'pointer',
                width: '20px',
                height: '20px',
                backgroundColor: 'black',
                clipPath: 'polygon(0 0, 100% 50%, 0 100%)', 
                marginLeft: '10px',
            }}
            title="Go to Portfolio"
            onClick={() => alert("Navigate to Portfolio!")} 
        />
    );
};