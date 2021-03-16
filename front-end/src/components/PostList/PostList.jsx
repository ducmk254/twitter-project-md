import React from 'react';
import "../../styles/PostList.css";
import PostItem from './PostItem';
import PostUpdate from './PostUpdate';


function PostList(props) {
    // const getAllPosts = useCallback(async()=>{
    //     try {
    //         const option={
    //             method:'get',
    //             url:'/api/v1/posts'
    //         }
    //         const response = await axios(option);
    //         console.log(response.data.data.posts);
    //     } catch (error) {
    //         console.log(error);
    //     }
        
    // })
    // useEffect(()=>{
    //     getAllPosts();
    // },[getAllPosts]);
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