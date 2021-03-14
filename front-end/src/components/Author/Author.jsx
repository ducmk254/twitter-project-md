import React from 'react';
import "../../styles/Author.css";
import Login from './Login';
import Register from './Register';

function Author(props) {
    return (
        <div>
            <section className="author-container">
                <Login/>
                <Register/>                
            </section>
        </div>
    );
}

export default Author;