import React, { useState } from 'react'
import Axios from 'axios'
const AddPost = () => {
  const baseUrl = "http://localhost:3001/posts";
  const [name,setName] = useState('');
const [desc,setDesc] = useState('');
  const handleSubmit =(event)=>{
event.preventDefault();

  }
  const addPostHandler =()=>{
    Axios.post(baseUrl,{name,desc}).then((response)=>{

      console.log(response);

      setName("");

      setDesc("");

     
    }
    
    )
  }
  return (
    <div className='addpost'>
      <div><h2>AddPost</h2></div>
<div className='add-input'>
  <form onSubmit={handleSubmit}>
  <input type='text' placeholder='Add Title' value={name} onChange={(e) => setName(e.target.value)}></input><br/>

  <input type='text' placeholder='Add description' value={desc} onChange={(e) => setDesc(e.target.value)}></input><br/>
  <button type='submit' className='add-btn' onClick={addPostHandler}>
          Add Posts
        </button>
  </form>
</div>

    </div>
  )
}

export default AddPost