// eslint-disable-next-line no-unused-vars
import React from 'react';
import Masonry from 'react-masonry-css';
import PropTypes from 'prop-types';

const MasonryGallery = ({ images }) => {
    const breakpointColumnsObj = {
        default: 5,
        1100: 4,
        700: 3,
        500: 2,
        300: 1
    };

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >
            {images.map((image, index) => (
                <img 
                    src={image} 
                    alt={`Gallery ${index}`} 
                    key={index} 
                    style={{ marginBottom: '8px', width: '100%', borderRadius: '8px' }} 
                />
            ))}
        </Masonry>
    );
};

MasonryGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MasonryGallery;