import React from 'react';

function PostUpdate(props) {
    return (
        <div className="post-update">
                    <textarea type="text" name="content" placeholder="What's happening ?" id="content" className="post-item__content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, expedita! Itaque atque qui quam fugiat tenetur enim sint voluptate quasi vitae recusandae eos, hic odio, blanditiis, ut accusantium eum magni?</textarea>
                    <div className="post-item__footer">
                        <button className="btn">Update</button>
                        <button className="btn">Cancel</button>
                    </div>
                </div>
    );
}

export default PostUpdate;