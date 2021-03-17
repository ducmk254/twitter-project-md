import React, { useContext, useState } from 'react';
import "../../styles/Author.css";
import axios from 'axios';
import AppContext from "../AppContext/AppContext";
import {useHistory} from 'react-router';

function Login(props) {
    const {dispatch} = useContext(AppContext);

    const [userInput,setUserInput] = useState({email:"",password:""});
    const [errorMessage,setErrorMessage] = useState(null);

    const history = useHistory();
    const handleInputChange = (e)=>{
        setUserInput({...userInput,[e.target.name]:e.target.value});
    }
    const handleOnSubmit = async (e)=>{
        try {
            
            e.preventDefault(); // khi nhấn submit thì page không bị reload khi nhấn submit
            const option = {
                method:'post',
                url:'http://localhost:5000/api/v1/author/login',
                data:userInput
            }
            const res = await axios(option); 
            
            const {token,userName} = res.data.data;
            localStorage.setItem("token",token);
            dispatch({type:"CURRENT_USER",payload:{userName:userName}});
            history.push("/"); // điều hướng người dùng tới route mới là /
        } catch (error) {
            
            setErrorMessage(error.response.data.message);
        }
    }
    return (
        <section className="author-container">
            <form className="author-form" onSubmit={handleOnSubmit} method="post">
                <h2>Enter Your Account</h2>
                {errorMessage&&(<div className="error-message">Error:{errorMessage}</div>)}

                <input type="email" name="email" id="author-email" required placeholder="Email" value={userInput.email} onChange={handleInputChange}/>
                <input type="password" name="password" id="author-password" required placeholder="Password" value={userInput.password} onChange={handleInputChange} />
                <button className="btn" type="submit"  >Login</button>
            </form>
        </section>
    );
}

export default Login;