// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Make sure this is your main App component
import '@/style-grid.css'; // Ensure your styles are imported

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);