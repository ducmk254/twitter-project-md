import React from 'react';
import "../../styles/Author.css";

function Register(props) {
    return (
        <section className="author-container">
            <form action="" className="author-form">
                    <h2>Register New Account</h2>
                    <div className="error-message">Error: Your Password is not Correct</div>
                    <input type="text" name="name" id="name" required placeholder="Name" />
                    <input type="email" name="email" id="author-email" required placeholder="Email" />
                    <input type="password" name="password" id="author-password" required placeholder="Password"/>
                    <button className="btn" type="submit">Register</button>
        </form>
        </section>
        
    );
}

export default Register;