import React, { useState } from 'react'
import axios from 'axios';

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://posts.com/posts/create', {
        title
      });
    } catch (error) {
      console.log(error);
    }

    setTitle("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Title</label>
          <input 
          className='form-control'
            onChange={e => setTitle(e.target.value)}
          value={title}
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

export default PostCreate
