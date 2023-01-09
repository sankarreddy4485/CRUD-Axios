import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
const Posts = () => {
    const baseUrl = "http://localhost:3001/posts";
    const [postArr, setPostArr] = useState([]);
    const [postdetail, setPostDetail] = useState([]);
    const [postName,setPostName] = useState('');
const [description,setDescription] = useState('');
    useEffect(() => {
        Axios.get(baseUrl).then((response) => {
            setPostArr(response.data);
            console.log(postArr);
        });
    }, []);

    const handleSubmit =(event)=>{
        event.preventDefault();
        
          }
          const addPostHandler =()=>{
            // Axios.post(baseUrl,{name,desc}).then((response)=>{
        
            //   console.log(response);
        
            //  // setName("");
        
            //  // setDesc("");
        
             
            // }
            
            // )
          }
    //  View Operation
    const viewHandler = (id) => {
        console.log(id);
         Axios.get(`${baseUrl}/${id}`).then((response) => {

            setPostDetail(response.data);
            console.log(postdetail);
        });
    }
   
    const updateHandler = (id) => {
        viewHandler();
        // console.log(id);
        // const { title } = 'title-1'

        // Axios.get(`${baseUrl}/${id}`).then((response) => {

        //     setPostDetail(response.data);
        //     console.log(postdetail);
        // });
    }
   
    
    //  Delete Operation
    const deleteHandler = (id) => {

        console.log(id);
        Axios.delete(`${baseUrl}/${id}`).then(() => {
            //setPostArr(null);
 let newArr=postArr.filter(data =>(data.id !==id));
 setPostArr(newArr);
        });
        // alert("Post deleted!");

    }
    useEffect(() => {
        deleteHandler();
    }, [postArr]);

    if (postArr.length == 0) return "<h1>There is No Data</h1>";
    return (
        <>
        <div className='maindiv'>
            
                <div className='posts'>
                    <h1>All Post ({postArr.length})</h1>

                    <ul>
                        {postArr.map((post) => <li><p className='postdetail'>{post.name}</p>
                        <p>
                            <button onClick={() => viewHandler(post.id)} className='postbtn'>View</button>
                            <button onClick={updateHandler} className='postbtn'>Modify</button> 
                            <button onClick={() => deleteHandler(post.id)} className='postbtn'>Delete</button>
                            </p></li>)}
                    </ul>
                </div>
           
                <div className='view-post' >
                    <h1>Post Details</h1>
                    <p>Post ID : {postdetail.id}</p>
                    <p>Post Name : {postdetail.name}</p>
                    <p>Post Description : {postdetail.desc}</p>
                   
                </div>
                <div className='modify-post'>
                <form onSubmit={handleSubmit}>
  <input type='text'  name ={postdetail.name} value={postName} onChange={(e) => setPostName(e.target.value)}></input><br/>

  <input type='text' name={postdetail.desc} value={description} onChange={(e) => setDescription(e.target.value)}></input><br/>
  <button type='submit' className='add-btn' onClick={addPostHandler}>
          Update Posts
        </button>
  </form>
                </div>
           
            </div>
        </>
    )
}

export default Posts;
