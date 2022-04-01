import React from 'react';
import './Post.scss';
import FaceIcon from '@mui/icons-material/Face'; //Avatar Icon

function Post({postContent}) {
  
  return (
    <div className="post">
        <div className="post__content">
            <FaceIcon className="post__avatar"/>
            <div className="post__body">
                <p className="post__user">User {postContent.post_user_id}</p>
                <p className="post__date">{postContent.postedAt}</p>
            </div>
        </div>
        <p className="post__text">{postContent.postContent}</p>

        {

        }
    </div>
  )
}

export default Post