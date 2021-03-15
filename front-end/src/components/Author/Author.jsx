import React from 'react';
import "../../styles/Author.css";
import Login from './Login';
import Register from './Register';

function Author(props) {
    return (
        <section className="author-container">
            <Login/>
            <Register/>                
        </section>
    );
}

export default Author;