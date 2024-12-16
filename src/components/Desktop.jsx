// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { WeatherApi } from './WeatherApi'; // Check if this points to the correct file
import { LogoText } from './LogoText'; // Check the casing
import { ImageFetch } from './ImageFetch'; // Ensure this path is correct
import { Link } from 'react-router-dom';
import '@/style-grid.css'; 

export const Desktop = () => {
    const [color, setColor] = useState('#af8f7d'); // Initial color
    const colorPalette = [
        '#af8f7d',
        '#af7d87',
        '#af7d9a',
        '#af917d',
        '#b08a7d',
        '#b0a07d',
        '#a97d7d',
        '#c0b5a4',
        '#b6a9a4',
        '#d1c6c0',
        '#c7a59b',
        '#a58f7d',
        '#e5c0b0',
        '#d8a69f',
        '#9a7d7d'
    ];

    const handleClick = () => {
        const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        setColor(randomColor); // Change to a random color from the array
    };

    return (
        <div className="desktop">
            {/* Weather API Tile */}
            <div className="weather-api-container tile">
                <WeatherApi color={color} /> {/* Pass color as prop */}
            </div>

            {/* Photography Tiles Container (Portrait Rectangle) */}
            <div className="film-photography-container tile">
                <ImageFetch query="shot in film camera" />
            </div>

            {/* Colorful Tile */}
            <div className="colorful-tile tile" onClick={handleClick} style={{ backgroundColor: color }}>
                <div className="color-label" style={{ color: 'white', fontFamily: 'Helvetica', fontWeight: 'bold', fontSize: '1.5rem' }}>
                    {color} {/* Display the current color code */}
                </div>
            </div>

       
            {/* Row 1 Square Tiles */}
            <div className="street-photography-container tile">
                <ImageFetch query="street portrait" />
            </div>

            <div className="product-photography-container tile">
                <ImageFetch query="scent product" />
            </div>

            <div className="fashion-photography-container tile">
                <ImageFetch query="fashion photoshoot" />
            </div>

            {/* Food Photography Container */}
            <div className="food-photography-container tile">
                <ImageFetch query="sunset" />
            </div>

            {/* Food Photography Container */}
            <div className="wedding-photography-container tile">
                <ImageFetch query="intimate wedding" />
            </div>

            {/* Architecture Photography Tile */}
            <div className="architecture-container tile">
                <ImageFetch query="architecture" />
            </div>

            {/* Logo Text Tile */}
            <div className="bottom-strip tile">
                <LogoText color={color} /> {/* Pass color as prop */}
            </div>

            {/* Arrow Container in Row 3, Column 4 */}
            <div className="arrow-container tile" style={{ backgroundColor: color }}>
                <Link to="/portfolio">
                    <img src="./public/Arrow.svg" alt="Arrow" style={{ width: '81px', height: '24px', cursor: 'pointer' }} />
                </Link>
            </div>
        </div>
    );
};
