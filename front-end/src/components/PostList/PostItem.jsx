import React, { useContext } from 'react';

import AppContext from "../AppContext/AppContext";

function PostItem(props) {
    const {post,user} = props;
    const {state,dispatch} = useContext(AppContext);
    return (
            <div className="post-item">
                    <p className="post-item__content">{post.content}
                    </p>
                    <div className="post-item__footer">
                        <div className="post-item__infor">
                            <span className="post-item__username">by {post.author.name}</span>
                            <span className="post-item__date">Date: {post.createdAt.substr(0,10).split("-",3).reverse().join("-")}</span>
                        </div>
                        {user && user.userName===post.author.name && (<ul className="post-item__change">
                            <li className="post-item__change-action">Edit</li>
                            <li className="post-item__change-action">Delete</li>
                            <li className="post-item__change-action"><span>Are you sure?</span></li>
                            <li className="post-item__change-action">yes</li>
                            <li className="post-item__change-action">No</li>
                        </ul>)}
                    </div>
                </div>
    );
}

export default PostItem;