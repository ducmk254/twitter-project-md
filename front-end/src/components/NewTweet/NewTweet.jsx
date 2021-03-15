import React from 'react';
import "../../styles/NewTweet.css";

function NewTweet(props) {
    return (
            <section className="form-section">
                <form className="form">
                    <textarea name="content" id="new-content" cols="30" rows="10" placeholder="What's happening ?"></textarea>
                    <button className="btn">Tweet</button>
                </form>
            </section>
    );
}

export default NewTweet;