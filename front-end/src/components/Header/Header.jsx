import React from 'react';
import "../../styles/Header.css";

function Header(props) {
    return (
        <div>
            <div className="header">
            <h1 className="logo">
                Twitter
            </h1>

            <nav className="nav">
                <ul className="nav-main">
                    <li className="nav-main__item"> <a href="#">Login</a></li>
                    <li className="nav-main__item"> <a href="#">Register</a></li>
                    <li className="nav-main__item"> <span href="#" className="user-name">Hello,Minh Duc</span></li>
                    <li className="nav-main__item"> <a href="#">Sign out</a></li>
                </ul>
            </nav>

            
        </div>
        </div>
    );
}

export default Header;