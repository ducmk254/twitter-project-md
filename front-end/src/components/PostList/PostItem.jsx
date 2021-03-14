import React from 'react';

PostItem.propTypes = {
    
};

function PostItem(props) {
    return (
            <div className="post-item">
                    <p className="post-item__content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Nesciunt, expedita! Itaque atque qui quam fugiat tenetur enim sint voluptate quasi vitae
                         recusandae eos, hic odio, blanditiis, ut accusantium eum magni?
                    </p>
                    <div className="post-item__footer">
                        <div className="post-item__infor">
                            <span className="post-item__username">by MinhDuc</span>
                            <span className="post-item__date">Date: 14/03/2021</span>
                        </div>
                        <ul className="post-item__change">
                            <li className="post-item__change-action">Edit</li>
                            <li className="post-item__change-action">Delete</li>
                            <li className="post-item__change-action"><span>Are you sure?</span></li>
                            <li className="post-item__change-action">yes</li>
                            <li className="post-item__change-action">No</li>
                        </ul>
                    </div>
                </div>
                
    );
}

export default PostItem;