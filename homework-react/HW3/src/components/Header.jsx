import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
    return (
        <ul className="nav-list">
            <li className="nav-list__item"><Link to="/" style={getStylesForLink()}>Home</Link></li>
            <li className="nav-list__item"><Link to="/basket" style={getStylesForLink()}>Basket</Link></li>
            <li className="nav-list__item"><Link to="/archive" style={getStylesForLink()}>Archive</Link></li>
        </ul>
    )

    function getStylesForLink() {
        return {
            textDecoration: "none",
            padding: "15px",
            display: "inline-block",
            color: "white",
        }
    }
}

export default Header;