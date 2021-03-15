import React from 'react';
import "../../styles/PostList.css";
import PostItem from './PostItem';
import PostUpdate from './PostUpdate';
function PostList(props) {
    return (
            <section className="post-section">
            <div className="post-list">
                <PostItem/>
                <PostUpdate/>
            </div>
        </section>
    );
}

export default PostList;