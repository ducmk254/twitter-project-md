import React, { useContext, useState } from 'react';
import AppContext from '../AppContext/AppContext';
import config from '../../config/config';
import axios from 'axios';
import { useHistory } from 'react-router';
function PostItem(props) {
    const {dispatch} = useContext(AppContext);
    const {post} = props;
    const [openEdit,setOpenEdit] = useState(false);
    const [openDeleteConfirm,setOpenDeleteConfirm] = useState(false);
    const [editDelte,setEditDelete] = useState({showEdit:true,showDelete:true});
    const history = useHistory();
    const [valuePost,setValuePost] = useState(post.content);
    // console.log(post);
    // console.log(post.isEditable);
    const handleDeletePost = async()=>{
        try {
            const token = localStorage.getItem("token");
            const option = {
                ...config,
                method:"delete",
                headers: {
                    Authorization: `Bearer ${token}`, // gui token len API de check xem co dang login ko ?
                  },
                url:`/api/v1/posts/${post._id}`
            }
            await axios(option);
            dispatch({type:"DELETE_ONE_POST",payload:{_id:post._id}});
            history.push("/");
        } catch (error) {
            console.log(error);
        }
    }
    const handleChangeContent =(e)=>{
        setValuePost(e.target.value);
    }

    const handleUpdatePost = async(e)=>{
        try {
            const token = localStorage.getItem("token");
            const newPost = {...post,content:valuePost}
            const option = {
                ...config,
                method:"put",
                url:`/api/v1/posts/${post._id}`,
                headers:{
                    Authorization: `Bearer ${token}`,
                },
                data:{content:newPost.content}
            }
            const res = await axios(option);// return res.data.data.post
            

            //setState tuong ung voi type
            dispatch({type:"UPDATE_ONE_POST",payload:res.data.data.post});

            // set ve true de co the show button: Edit va Delete
            setEditDelete({showDelete:true,showEdit:true});
            //set ve false de an form edit
            setOpenEdit(false);
            history.push("/");
            
        } catch (error) {
            console.log(error);
        }
    }
    return (
            <>
                <div className="post-item">
                        <p className="post-item__content">{post.content}
                        </p>
                        <div className="post-item__footer">
                            <div className="post-item__infor">
                                <span className="post-item__username">by {post.author.name}</span>
                                <span className="post-item__date">Date: {post.createdAt.substr(0,10).split("-",3).reverse().join("-")}</span>
                            </div>
                            {post.isEditable && (<ul className="post-item__change">
                                {editDelte.showEdit&&(<li className="post-item__change-action" onClick={()=>{setOpenEdit(true);setOpenDeleteConfirm(false);setEditDelete({...editDelte,showDelete:false})}}>Edit</li>)}
                                {editDelte.showDelete&&(<li className="post-item__change-action" onClick={()=>{setOpenDeleteConfirm(true);setOpenEdit(false);setEditDelete({...editDelte,showEdit:false})}}>Delete</li>)}
                                {
                                    openDeleteConfirm&&(<><li className="post-item__change-action"><span className="item-action" style={{textDecoration:""}}>Are you sure?</span></li>
                                    <li className="post-item__change-action" onClick={handleDeletePost}>yes</li>
                                    <li className="post-item__change-action" onClick={()=>{setOpenDeleteConfirm(false);setEditDelete({...editDelte,showEdit:true})}}>No</li></>)
                                }
                                
                            </ul>)}
                        </div>
                </div>
                {
                    openEdit&&(<div className="post-update">
                        <textarea type="text" name="content" placeholder="What's happening ?" id="content" className="post-item__content" value={valuePost} onChange={handleChangeContent} />
                        <div className="post-item__footer">
                            <button className="btn" type="button" onClick={handleUpdatePost}>Update</button>
                            <button className="btn" onClick={()=>{setOpenEdit(false);setEditDelete({...editDelte,showDelete:true})}}>Cancel</button>
                        </div>
                    </div>)
                }
            </>
    );
}

export default PostItem;