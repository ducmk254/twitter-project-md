import React, { useContext, useState } from 'react';
import "../../styles/Author.css";
import AppContect from "../AppContext/AppContext";
import axios from 'axios';
import config from "../../config/config";
import { useHistory } from 'react-router';
function Register(props) {
    const {dispatch} = useContext(AppContect);
    const [userInput,setUserInput] = useState({name:"",email:"",password:""});
    const [errorMessage,setErrorMesage] = useState(null); 
    const history = useHistory();
    const  handleInput = (e)=>{
        setUserInput({...userInput,[e.target.name]:e.target.value}); // lay tat ca cac propetys o trong obj cu va thay the prop bang gia tri moi
    }
    const  handleOnSubmit = async (e)=>{
        try {
            e.preventDefault();
        const option ={
            ...config,
            method:"post",
            url:"/api/v1/author/register",
            data:userInput
        }
        const res = await axios(option);
        const {token,userName} = res.data.data;
        
        localStorage.setItem("token",token);
        dispatch({type:"CURRENT_USER",payload:{userName:userName}});
        history.push("/");
        } catch (error) {
            setErrorMesage(error.response.data.message);
        }
    }
    return (
        <section className="author-container">
            <form method="post" className="author-form" onSubmit={handleOnSubmit}>
                    <h2>Register New Account</h2>
                    {  
                        Array.isArray(errorMessage)?(errorMessage.map((err)=>(errorMessage&&(<div className="error-message">Error: {err}</div>))))
                                                   :(errorMessage&&(<div className="error-message">Error: {errorMessage}</div>))
                    }
                    <input type="text" name="name" id="name" required placeholder="Name" value={userInput.name} onChange={handleInput}/>
                    <input type="email" name="email" id="author-email" required placeholder="Email" value={userInput.email} onChange={handleInput} />
                    <input type="password" name="password" id="author-password" required placeholder="Password" value={userInput.password} onChange={handleInput} />
                    <button className="btn" type="submit">Register</button>
        </form>
        </section>
        
    );
}

export default Register;