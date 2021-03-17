import React, { useContext } from 'react';
import "../../styles/Header.css";
import {Link}from "react-router-dom";
import AppContext from "../AppContext/AppContext";

function Header(props) {
    const {state,dispatch} = useContext(AppContext);
    const signOut = (e)=>{
        // remove token
        localStorage.removeItem("token");
        //reset user to null
        dispatch({type:"CURRENT_USSER",payload:null});
    }
    return (
        <div>
            <div className="header">
            <h1 className="logo">
                <Link to="/">Twitter</Link>
            </h1>

            <nav className="nav">
                
                    {
                    state.user ? <ul className="nav-main">
                                    <li className="nav-main__item"> <span className="user-name">Hello,{state.user.userName}</span></li>
                                    <li className="nav-main__item" onClick={signOut}> <a href="/"> Sign out</a></li>
                                </ul>
                    :           <ul className="nav-main">
                                    <li className="nav-main__item"> <Link to="/login">Login</Link></li>
                                    <li className="nav-main__item"> <Link to="/register">Register</Link></li>
                                </ul>
                    }
            </nav>

            
        </div>
        </div>
    );
}

export default Header;