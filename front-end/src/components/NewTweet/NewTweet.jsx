import React, { useContext ,useState} from 'react';
import "../../styles/NewTweet.css";
import AppContext from "../AppContext/AppContext";
import axios from 'axios';

function NewTweet(props) {
    const {state,dispatch} = useContext(AppContext);
    const [inputText,setInputText] = useState("");


    const handleInput = (e)=>{
        setInputText(e.target.value);
    }


    const handleTwitter = async (e)=>{
        try {
            e.preventDefault();
            const token = localStorage.getItem("token");
            const option ={
                baseURL:"http://localhost:5000",
                method:"post",
                url:"/api/v1/posts",
                headers: {
                    Authorization: `Bearer ${token}`, // gui token len API de check xem co dang login ko ?
                  },
                data:{content:inputText}
            }
            // console.log(option);
            const res = await axios(option);
            const {post} = res.data.data;
            dispatch({type:"CREATE_ONE_POST",payload:post}); // tra ve cai gi thi vut vao payload
            setInputText("");
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            {state.user &&(
                <section className="form-section">
                    <form className="form" method="post" onSubmit={handleTwitter}>
                        <textarea name="content" id="new-content" cols="30" rows="10" placeholder="What's happening ?" value={inputText} onChange={handleInput}></textarea>
                        {inputText!==""&&(<button className="btn" type="submit">Tweet</button>)}
                    </form>
                </section>)
            }
        </>
    );
}

export default NewTweet;