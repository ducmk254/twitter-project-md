import React, { useCallback, useContext, useEffect } from 'react';
import "../../styles/PostList.css";
import PostItem from './PostItem';
import axios from 'axios';
import config from '../../config/config';
import AppContext from "../AppContext/AppContext";
function PostList(props) {
    const {state,dispatch} = useContext(AppContext);
    const getPostList = useCallback(async()=>{
        try {
            const options = {
                ...config,
                method:"get",
                url:"/api/v1/posts",
            }
            const res = await axios(options);
            // console.log(res.data.data.posts[1].author.name);
            dispatch({type:"GET_ALL_POSTS",payload:res.data.data.posts})
        } catch (error) {
            console.log(error);
        }
         
    },[dispatch]);
    useEffect(()=>{
        getPostList();
    },[getPostList]);

    return (
        <section className="post-section">
            <div className="post-list">
                {state.posts.map(post=><PostItem key={post._id} post={post} user={state.user}/>)}
                {/* <PostUpdate/> */}
            </div>
        </section>
    );
}

export default PostList;