import React, { useState } from 'react'
import axios from 'axios';

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://posts.com/posts/${postId}/comments`, {
        content
      });
    } catch (error) {
      console.log(error);
    }

    setContent("");
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>New Comment</label>
          <input
            className='form-control'
            onChange={e => setContent(e.target.value)}
            value={content}
          />
        </div>
        <button
          className='btn btn-primary'
          type='submit'
        >Submit</button>
      </form>
    </div>
  )
}

export default CommentCreate
