// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom"; // Include React Router for navigation
// import line3 from "./line-3.svg"; // Import line graphics
// import line4 from "./line-4.svg";
import "./Header.css"; // Optional CSS for additional styles

const Header = () => {
    return (
        <div className="box1">
            <header className="header">
                <div className="overlap-group">
                    {/* <img className="line" alt="Line" src={line4} /> */}
                    
                    <div className="header-text-web">
                        <Link to="/webdev">.webDesign&amp;Development</Link>
                    </div>

                    <div className="header-text-photog">
                        <Link to="/photography">.photography</Link>
                    </div>

                    <div className="header-text-Home">
                        <Link to="/Portfolio">.almost</Link>
                    </div>

                    <div className="header-text-film">
                        <Link to="/filmmaker">.film-making</Link>
                    </div>

                    <div className="header-text-writing">
                        <Link to="/contentwriter">.creative writing</Link>
                    </div>

                    {/* <img className="img" alt="Line" src={line3} />
                    <div className="rectangle" /> */}
                </div>
            </header>
        </div>
    );
}

export default Header;