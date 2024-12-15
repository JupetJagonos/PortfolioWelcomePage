// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; 

export const WeatherApi = ({ color }) => { // Receive color as a prop, for the font color
    const [weather, setWeather] = useState({ temperature: '', condition: '' });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`);
                if (!response.ok) throw new Error('Failed to fetch weather data');
                const data = await response.json();
                setWeather({ 
                    temperature: Math.round(data.main.temp), 
                    condition: data.weather[0].description 
                });
            } catch (error) {
                console.error('Error fetching weather data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, []);

    return (
        <div className="weather-api-container">
            <div className="box">
                <div className="text-wrapper">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <div className="temperature" style={{ color: color }}> {/* Apply the color to the temperature */}
                            {weather.temperature}°C
                        </div>
                    )}
                </div>
                <div className="condition" style={{ color: color }}> {/* Apply the color to the condition */}
                    {loading ? <div>Loading...</div> : weather.condition}
                </div>
            </div>
        </div>
    );
};

// Add PropTypes validation
WeatherApi.propTypes = {
    color: PropTypes.string.isRequired, 
};