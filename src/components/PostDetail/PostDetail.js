import React,{useEffect, useState} from 'react';
import {useParams} from 'react-router'
import Comment from '../Comment/Comment'
const PostDeatil = () => {
    const detail = {
        border : "1px solid blue",
        margin : "10px 20px",
        padding : "20px",
        borderRadius : "10px"
    }
    const {id} = useParams();
    const [post, setPost] = useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(data => setPost(data))
    },[]);
    const [comment, setComment] = useState([]);
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setComment(data))
    },[])
    return (
        <div style={detail}>
            <h1>user Post id {post.id}</h1> 
            <p>{post.title}</p>
            <p>{post.body}</p>
              {
                  comment.map(comment=><Comment comment={comment}></Comment>)
              }
        </div>
    );
};

export default PostDeatil;