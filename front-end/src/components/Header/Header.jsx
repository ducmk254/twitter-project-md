import React from 'react';
import "../../styles/Header.css";
import {Link}from "react-router-dom";
function Header(props) {
    return (
        <div>
            <div className="header">
            <h1 className="logo">
                <Link to="/">Twitter</Link>
            </h1>

            <nav className="nav">
                <ul className="nav-main">
                    <li className="nav-main__item"> <Link to="/login">Login</Link></li>
                    <li className="nav-main__item"> <Link to="/register">Register</Link></li>
                    <li className="nav-main__item"> <span className="user-name">Hello,Minh Duc</span></li>
                    <li className="nav-main__item"> <Link to="/logout">Sign out</Link></li>
                </ul>
            </nav>

            
        </div>
        </div>
    );
}

export default Header;