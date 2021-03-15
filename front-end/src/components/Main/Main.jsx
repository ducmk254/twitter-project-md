import React from 'react';
import NewTweet from '../NewTweet/NewTweet';
import PostList from '../PostList/PostList';

function Main(props) {
    return (
        <div>
            <NewTweet />
            <PostList/>
        </div>
    );
}

export default Main;