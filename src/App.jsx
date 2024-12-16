// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Desktop } from './components/Desktop';
import Header from './components/Header';     // Import Header for navigation
import Footer from './components/Footer';     // Import Footer for footer content // Import Footer for footer content
// import Home from './pages/Home';                  // Import Home page component
import WebDev from './pages/WebDev';              // Import Web Developer page component
import Photography from './pages/Photography';   // Import Photography page component
import Filmmaker from './pages/Filmmaker';        // Import Filmmaker page component
import ContentWriter from './pages/ContentWriter'; // Import Content Writer page component
import Portfolio from './pages/Portfolio';        // Import Portfolio page component

const App = () => {
    return (
        <Router>
            <main>
                <Routes>
                    <Route path="/" element={<Desktop />} /> {/* Desktop without Header/Footer */}
                    <Route path="/webdev" element={
                        <>
                            <Header />
                            <WebDev />
                            <Footer />
                        </>} />
                    <Route path="/photography" element={
                        <>
                            <Header />
                            <Photography />
                            <Footer />
                        </>} />
                    <Route path="/filmmaker" element={
                        <>
                            <Header />
                            <Filmmaker />
                            <Footer />
                        </>} />
                    <Route path="/contentwriter" element={
                        <>
                            <Header />
                            <ContentWriter />
                            <Footer />
                        </>} />
                    <Route path="/portfolio" element={
                        <>
                            <Header />
                            <Portfolio />
                            <Footer />
                        </>} />
                </Routes>
            </main>
        </Router>
    );
};

export default App;