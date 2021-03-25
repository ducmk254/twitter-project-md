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
            dispatch({type:"GET_ALL_POSTS",payload:res.data.data.posts});
            
        } catch (error) {
            console.log(error);
        }
         
    },[dispatch]);
    useEffect(()=>{
        getPostList();
    },[getPostList]);

    const newPosts = state.posts.map((post)=>{
        if(state.user){
            return state.user.userName === post.author.name ? {...post,isEditable:true} : post;
        }else{
            return {...post,isEditable:false}
        }
        }
    );
    // console.log(newPosts);
    return (
        <section className="post-section">
            <div className="post-list">
                {newPosts.map(post=>{return <PostItem key={post._id} post={post} />})}
            </div>
        </section>
    );
}

export default PostList;