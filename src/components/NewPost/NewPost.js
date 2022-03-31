import React from 'react';
import FaceIcon from '@mui/icons-material/Face'; //Avatar Icon
import './NewPost.scss'

function NewPost() {

   const user = sessionStorage.getItem('username');

  return (
    <div className="new-post">
        <FaceIcon className="new-post__avatar"/>
        <form className="new-post__form">
            <input type="text" className="new-post__input" placeholder={`What's on your mind, ${user}?`}/>
        </form>
    </div>
  )
}

export default NewPost