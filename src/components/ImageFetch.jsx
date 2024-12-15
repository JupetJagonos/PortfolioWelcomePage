// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; 

export const ImageFetch = ({ query }) => {
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(true);
    const [hoverLoading, setHoverLoading] = useState(false); // Loading state for hover images

  // Array of random queries for fetching different images on hover
  const randomQueries = [
    "sunset landscape", "mountain scenery", "forest in autumn", "beach waves", "desert dunes",
    "cute puppies", "wildlife photography", "birds in flight", "underwater marine life", "horses running",
    "city skyline", "urban street photography", "historic buildings", "modern architecture", "night city lights",
    "happy family", "business professionals", "children playing", "portraits of women", "diverse groups of people",
    "delicious desserts", "healthy smoothie bowl", "gourmet dishes", "coffee art", "cooking ingredients",
    "adventure travel", "backpacking in Europe", "remote islands", "cultural festivals", "road trips",
    "abstract art", "colorful patterns", "wood textures", "metal surfaces", "fabric close-ups",
    "Christmas decorations", "spring flowers", "Halloween costumes", "summer activities", "autumn leaves",
    "yoga poses", "running on the beach", "gym workouts", "healthy lifestyle", "meditation techniques",
    "artificial intelligence", "smart devices", "cloud computing", "robotics", "innovative startups"
];

    // Fetch the initial image when the component mounts
    useEffect(() => {
        const fetchImage = async () => {
            setLoading(true); 
            try {
                const response = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=1`, {
                    headers: {
                        'Authorization': import.meta.env.VITE_PEXELS_API_KEY
                    }
                });

                if (!response.ok) throw new Error('Failed to fetch image');
                const data = await response.json();
                setImage(data.photos[0].src.original); // this is setting the original image
            } catch (error) {
                console.error('Error fetching image:', error);
                setImage(''); // Reset 
            } finally {
                setLoading(false); // End 
            }
        };

        fetchImage();
    }, [query]); // this will be base on query

    const handleMouseEnter = () => {
        fetchNewImage(); // new image when hovered
    };

    const fetchNewImage = async () => {
        setHoverLoading(true); //load hovered image

        const randomQuery = randomQueries[Math.floor(Math.random() * randomQueries.length)]; // Select a random query
        
        try {
            const response = await fetch(`https://api.pexels.com/v1/search?query=${randomQuery}&per_page=1`, {
                headers: {
                    'Authorization': import.meta.env.VITE_PEXELS_API_KEY
                }
            });

            if (!response.ok) throw new Error('Failed to fetch new image');
            const data = await response.json();
            setImage(data.photos[0].src.original); 
        } catch (error) {
            console.error('Error fetching new image:', error);
            setImage(''); // Reset error
        } finally {
            setHoverLoading(false); // End load
        }
    };

    return (
        <div 
            className="image-fetcher" 
            onMouseEnter={handleMouseEnter} // Trigger on hover
            style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }} 
        >
            {loading || hoverLoading ? ( // Check if either initial or hover image is loading
             <div>Loading...</div>
            ) : (
                <img 
                    src={image} 
                    alt={query} 
                    style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover', 
                        position: 'absolute', 
                        top: 0, 
                        left: 0 
                    }} 
                />
            )}
        </div>
    );
};

// Add PropTypes validation
ImageFetch.propTypes = {
    query: PropTypes.string.isRequired // query prop must be a string and is required
};