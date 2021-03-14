import React from 'react';

Login.propTypes = {
    
};

function Login(props) {
    return (
        <form action="" className="author-form">
            <h2>Enter Your Accou</h2>
            <div className="error-message">Error: Your Password is not Corre</div>
            <input type="email" name="email" id="author-email" required placeholder="Email" />
            <input type="password" name="password" id="author-password" required placeholder="Password"/>
            <button className="btn" type="submit">Login</button>
        </form>
    );
}

export default Login;